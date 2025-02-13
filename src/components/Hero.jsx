import { HERO } from "../constants"
import { motion } from "motion/react"
import { containerLeft, containerRight } from "../constants/animations"
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Hero = () =>  {
    const [text] = useTypewriter({
        words: ["Machine Learning Engineer", "Data Scientist", "Artificial Intelligence Engineer"],
        loop: 0,
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 2000
    });
    
  return (
    <div className="border-b border-y-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                    variants={containerLeft(0)}
                    whileInView="visible"
                    initial="hidden"
                    transition="transition"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Imam Agus Faisal
                    </motion.h1>
                    <motion.span
                    variants={containerLeft(0.5)}
                    whileInView="visible"
                    initial="hidden"
                    transition="transition"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        [ {text}<span className="text-cyan-00"><Cursor cursorStyle='|'/></span> ]
                    </motion.span>
                    <motion.p
                    variants={containerLeft(1)}
                    whileInView="visible"
                    initial="hidden"
                    transition="transition"
                    className="my-2 max-w-xl font-light tracking-tight">
                        {HERO}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                    variants={containerRight(1)}
                    whileInView="visible"
                    initial="hidden"
                    transition="transition"
                    className="rounded-2xl" src="https://via.placeholder.com/150" alt="Imam Agus Faisal" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero