import { ABOUT } from "../constants"
import aboutPic from "../assets/images/about.png"
import { motion } from "motion/react"
import { containerLeft, containerRight, containerTop } from "../constants/animations"

const About = () =>  {
  return (
    <div className="border-b border-neutral-800 pb-4">
        <motion.h2
        variants={containerTop(0)}
        whileInView="visible"
        initial="hidden"
        transition="transition"
        className="my-10 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span>
        </motion.h2>
        <div className="flex flex-wrap">
            <motion.div
            variants={containerLeft(0)}
            whileInView="visible"
            initial="hidden"
            transition="transition"
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" width={250} height={250} src={aboutPic} alt="About" />
                </div>
            </motion.div>
            <motion.div
            variants={containerRight(0)}
            whileInView="visible"
            initial="hidden"
            transition="transition"
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About