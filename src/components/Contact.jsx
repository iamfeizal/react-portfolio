import { CONTACT } from "../constants"
import { motion } from "motion/react"
import { containerLeft, containerTop } from "../constants/animations"

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
        <motion.h2
        variants={containerTop(0)}
        whileInView="visible"
        initial="hidden"
        transition="transition"
        className="my-20 text-center text-4xl">
            Contact
        </motion.h2>

        <motion.div
        variants={containerLeft(0)}
        whileInView="visible"
        initial="hidden"
        transition="transition"className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <a href="mailto:imamagusfaisal120@gmail.com" className="border-b">{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default Contact