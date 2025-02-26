import { PROJECTS } from "../constants"
import { motion } from "motion/react"
import { containerLeft, containerRight, containerTop } from "../constants/animations"

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
        <motion.h2
        variants={containerTop(0)}
        whileInView="visible"
        initial="hidden"
        transition="transition"
        className="my-20 text-center text-4xl">
            Projects
        </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index}>
                    <a href={project.link}>
                        <div className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div
                            variants={containerLeft(0)}
                            whileInView="visible"
                            initial="hidden"
                            transition="transition" className="w-full lg:w-1/4">
                                <img src={project.image} width={150} height={150} alt={project.title} className="rounded-lg object-contain"/>
                            </motion.div>
                            <motion.div
                            variants={containerRight(0)}
                            whileInView="visible"
                            initial="hidden"
                            transition="transition"className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">{project.title}</h6>
                                <p className="mb-4 text-neutral-400">{project.description}</p>
                                <div>
                                    {project.skills.map((skill, index) => (
                                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects