import React, { useEffect, useRef } from "react";

/**
 * ParticleCanvas
 * - Floating ambient particles drifting in 2D space
 * - Real-time inverse gravitational repulsion (Particle push) when mouse moves nearby
 * - Faint geometric constellation lines between adjacent particles & cursor
 * - Ambient radial gradient spotlight smoothly tracking the cursor (LERP)
 */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates & smoothed coordinates for ambient glow
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      radius: 160, // Particle interaction radius
    };

    // Responsive particle count
    const particleCount = Math.floor(Math.min(width, 1600) / 14);
    const particles = [];

    const colors = [
      { r: 34, g: 211, b: 238 }, // Cyan
      { r: 56, g: 189, b: 248 }, // Sky Blue
      { r: 168, g: 85, b: 247 }, // Purple
      { r: 99, g: 102, b: 241 }, // Indigo
      { r: 52, g: 211, b: 153 }, // Emerald
      { r: 251, g: 191, b: 36 }, // Amber
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.45 + 0.35;
        this.density = Math.random() * 20 + 8; // Resistance to force
        this.vx = (Math.random() - 0.5) * 0.6; // Natural floating speed
        this.vy = (Math.random() - 0.5) * 0.6;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        // Natural ambient floating drift
        this.baseX += this.vx;
        this.baseY += this.vy;

        // Wrap around screen boundaries
        if (this.baseX < 0) this.baseX = width;
        if (this.baseX > width) this.baseX = 0;
        if (this.baseY < 0) this.baseY = height;
        if (this.baseY > height) this.baseY = 0;

        // Slight breathing/pulse effect
        this.pulse += 0.02;
        const currentAlpha = this.alpha + Math.sin(this.pulse) * 0.12;

        // Particle repulsion physics with mouse
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Repulsion force inverse to distance
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = (dx / (distance || 1)) * force * this.density * 1.5;
            const directionY = (dy / (distance || 1)) * force * this.density * 1.5;

            // Push particles away (Particle repulsion)
            this.x -= directionX;
            this.y -= directionY;
          } else {
            // Soft spring return to floating anchor
            this.x += (this.baseX - this.x) * 0.05;
            this.y += (this.baseY - this.y) * 0.05;
          }
        } else {
          // Soft return to drift when mouse inactive
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }

        return currentAlpha;
      }

      draw(currentAlpha) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${Math.max(0.1, currentAlpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.7)`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for performance
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect close particles with delicate constellation lines
    const drawConnections = () => {
      const maxDistance = 95;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw smooth ambient spotlight glow following cursor (no circular shape)
    const drawSpotlight = () => {
      if (!mouse.active) return;

      // Smooth LERP cursor position for ambient glow
      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;

      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        340
      );
      gradient.addColorStop(0, "rgba(6, 182, 212, 0.18)"); // Vivid cyan center
      gradient.addColorStop(0.35, "rgba(99, 102, 241, 0.10)"); // Soft purple/indigo
      gradient.addColorStop(0.7, "rgba(168, 85, 247, 0.04)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.save();
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 340, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing ambient spotlight
      drawSpotlight();

      // 2. Update and draw particles with Particle physics
      for (let i = 0; i < particles.length; i++) {
        const currentAlpha = particles[i].update();
        particles[i].draw(currentAlpha);
      }

      // 3. Draw inter-particle constellation lines
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event Listeners
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      if (!mouse.active) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{ willChange: "transform" }}
      aria-hidden="true"
    />
  );
};

export default ParticleCanvas;
