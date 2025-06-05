import { motion } from "motion/react"
import profilePic from "../assets/images/profile.png"
import cv from "../assets/CV_ImamAF_Short.pdf"
import { containerLeft, containerRight } from "../constants/animations"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { useNavigate } from "react-router-dom"

const Hero = () =>  {
    const navigate = useNavigate()
    const [text] = useTypewriter({
        words: ["Machine Learning", "Data Science", "Artificial Intelligence"],
        loop: 0,
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 2000
    });
    
  return (
    <div className="border-b border-y-neutral-900 pb-4 lg:mb-30">
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
                    variants={containerLeft(1)}
                    whileInView="visible"
                    initial="hidden"
                    transition="transition"
                    className="my-2 max-w-xl font-light tracking-tight text-4xl">
                        I'm enthusiast in
                    </motion.span>
                    <motion.span
                    variants={containerLeft(0.5)}
                    whileInView="visible"
                    initial="hidden"
                    transition="transition"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        [ {text}<span className="text-cyan-300"><Cursor cursorStyle='|'/></span>]
                    </motion.span>
                    
                    <div className="w-full">
                        <div className="flex items-center lg:items-start gap-x-5">
                            <a href={cv} target="_blank">
                                <motion.button
                                type="button"
                                variants={containerLeft(1)}
                                whileInView="visible"
                                initial="hidden"
                                transition="transition"
                                className="my-10 max-w-xl bg-transparent interactive-bg-blue text-cyan-300 font-semibold py-2 px-4 border border-cyan-300 hover:border-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded inline-flex cursor-pointer">
                                    Download CV
                                </motion.button>
                            </a>
                            <motion.button onClick={() => navigate("/chat")}
                            type="button"
                            variants={containerLeft(1)}
                            whileInView="visible"
                            initial="hidden"
                            transition="transition"
                            className="my-10 max-w-xl bg-transparent interactive-bg-blue text-cyan-300 font-semibold py-2 px-4 border border-cyan-300 hover:border-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded inline-flex cursor-pointer">
                                Chat with AI Assistant
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                    variants={containerRight(1)}
                    whileInView="visible"
                    initial="hidden"
                    transition="transition"
                    className="rounded-2xl" src={profilePic} alt="Imam Agus Faisal" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero