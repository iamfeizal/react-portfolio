import { useContext, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import profilePic from "../assets/images/profile.png";
import { FiSend, FiRotateCcw, FiUser } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";
import { Context } from "../context/Context.jsx";
import { STARTER_PROMPTS } from "../constants/impersonatorKnowledge.js";
import { AnimatePresence, motion } from "motion/react";

const RoomChat = () => {
  const { onSent, loading, setInput, input, chatHistory, newChat } = useContext(Context);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll smoothly to bottom on new messages or loading updates
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, loading]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !loading) {
        onSent();
      }
    }
  };

  const handlePromptClick = (promptText) => {
    onSent(promptText);
  };

  // Check if conversation is still at welcome state (1 or fewer messages)
  const isInitialState = chatHistory.length <= 1;

  return (
    <div className="flex-1 flex flex-col h-full bg-neutral-950/70 backdrop-blur-md relative overflow-hidden">
      {/* Header Bar */}
      <header className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-900/60 backdrop-blur-md flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={profilePic}
              alt="Imam Agus Faisal"
              className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400 shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-neutral-900 rounded-full animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-white tracking-wide">
                Imam Agus Faisal
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 font-medium">
                AI Persona
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              Machine Learning & Data Science Specialist
            </p>
          </div>
        </div>

        <button
          onClick={newChat}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 hover:border-cyan-400/40 transition-all cursor-pointer shadow-sm active:scale-95"
          title="Reset percakapan"
        >
          <FiRotateCcw className="text-sm text-cyan-400" />
          <span className="hidden sm:inline">Reset Chat</span>
        </button>
      </header>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Welcome Hero State with Starter Chips */}
        {isInitialState && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto my-4 p-6 rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-900/40 border border-neutral-800 shadow-xl"
          >
            <div className="flex items-center gap-2 text-cyan-300 text-sm font-medium mb-2">
              <LuSparkles className="text-base" />
              <span>Portfolio AI Assistant</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white mb-2">
              Selamat datang! Tanyakan apa saja tentang saya.
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
              Saya adalah versi digital dari Imam Agus Faisal. Saya siap menjawab pertanyaan seputar proyek Machine Learning, pengalaman magang di PT. Stechoq Robotika, tech stack, hingga peluang kolaborasi kerja.
            </p>

            <div className="space-y-2">
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                Pertanyaan Populer:
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {STARTER_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePromptClick(prompt)}
                    disabled={loading}
                    className="text-xs text-left px-3 py-2 rounded-xl bg-neutral-800/90 hover:bg-cyan-950/60 text-neutral-200 hover:text-cyan-200 border border-neutral-700 hover:border-cyan-400/50 transition-all cursor-pointer shadow-sm active:scale-95 disabled:opacity-50"
                  >
                    💬 {prompt}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Chat Messages */}
        <div className="max-w-3xl mx-auto space-y-6">
          {chatHistory.map((msg, idx) => {
            const isUser = msg.sender === "user";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser && (
                  <img
                    src={profilePic}
                    alt="Bot Avatar"
                    className="w-8 h-8 rounded-full object-cover border border-cyan-400/50 mt-1 shrink-0"
                  />
                )}

                <div
                  className={`flex flex-col max-w-[85%] sm:max-w-[75%] ${isUser ? "items-end" : "items-start"
                    }`}
                >
                  <div className="flex items-center gap-2 mb-1 px-1">
                    <span className="text-[11px] font-medium text-neutral-400">
                      {isUser ? "Anda" : "Imam (AI)"}
                    </span>
                    {msg.time && (
                      <span className="text-[10px] text-neutral-500">
                        {msg.time}
                      </span>
                    )}
                  </div>

                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm break-words overflow-hidden ${isUser
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-sm shadow-cyan-950/40"
                        : "bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-tl-sm shadow-black/40"
                      }`}
                  >
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0 leading-relaxed">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside space-y-1 my-2 text-neutral-200">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside space-y-1 my-2 text-neutral-200">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="leading-relaxed">{children}</li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-cyan-300">
                            {children}
                          </strong>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 font-medium transition-colors"
                          >
                            {children}
                          </a>
                        ),
                        code: ({ children }) => (
                          <code className="bg-neutral-800 text-cyan-300 px-1.5 py-0.5 rounded text-xs font-mono border border-neutral-700">
                            {children}
                          </code>
                        ),
                        pre: ({ children }) => (
                          <pre className="bg-neutral-950 p-3 rounded-xl overflow-x-auto my-2 border border-neutral-800 text-xs font-mono text-cyan-200">
                            {children}
                          </pre>
                        ),
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-cyan-700/40 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mt-1 shrink-0">
                    <FiUser className="text-sm" />
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Typing Indicator */}
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 items-start"
            >
              <img
                src={profilePic}
                alt="Bot Avatar"
                className="w-8 h-8 rounded-full object-cover border border-cyan-400/50 mt-1 shrink-0"
              />
              <div className="bg-neutral-900 border border-neutral-800 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-2">
                <span className="text-xs text-neutral-400">
                  Imam sedang mengetik
                </span>
                <div className="flex gap-1 items-center">
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"
                  />
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"
                  />
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form Bar */}
      <div className="p-4 sm:p-6 pt-2 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-center bg-neutral-900/90 border border-neutral-700/80 focus-within:border-cyan-400/80 focus-within:ring-1 focus-within:ring-cyan-400/30 rounded-2xl px-4 py-2.5 shadow-xl transition-all">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              placeholder="Tanyakan pengalaman, skill, atau proyek Imam..."
              className="w-full bg-transparent text-sm text-neutral-100 placeholder-neutral-500 outline-none pr-10"
            />

            <div className="absolute right-2.5 flex items-center">
              <AnimatePresence>
                {input.trim() ? (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => onSent()}
                    disabled={loading}
                    className="w-8 h-8 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-neutral-950 flex items-center justify-center transition-all cursor-pointer shadow-md disabled:opacity-50"
                    title="Kirim pesan (Enter)"
                  >
                    <FiSend className="text-sm translate-x-px" />
                  </motion.button>
                ) : (
                  <button
                    disabled
                    className="w-8 h-8 rounded-xl bg-neutral-800 text-neutral-600 flex items-center justify-center cursor-not-allowed"
                  >
                    <FiSend className="text-sm translate-x-px" />
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-neutral-500 px-2 mt-2">
            <span>
              💡 Tekan <kbd className="px-1 py-0.5 rounded bg-neutral-800 text-neutral-400 font-mono text-[10px]">Enter</kbd> untuk mengirim
            </span>
            <span>Bertenaga Gemini 2.0 Flash</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomChat;