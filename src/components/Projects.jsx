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
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block hover:opacity-95 transition-opacity">
                        <div className="mb-8 flex flex-wrap lg:justify-center p-4 sm:p-5 rounded-2xl transition-all duration-300 border border-transparent hover:border-neutral-700/80 hover:bg-neutral-800/60 hover:backdrop-blur-md hover:shadow-xl hover:shadow-black/30">
                            <motion.div
                            variants={containerLeft(0)}
                            whileInView="visible"
                            initial="hidden"
                            transition="transition" className="w-full lg:w-1/4 flex lg:justify-end">
                                <img src={project.image} width={150} height={150} alt={project.title} className="rounded-2xl object-contain bg-neutral-950/80 border border-neutral-800 p-2 shadow-md"/>
                            </motion.div>
                            <div className='mx-10 hidden lg:block'>
                                <div className="-ml-1 size-3 rounded-full bg-cyan-500"></div>
                                <div className='w-0.5 h-full bg-gray-700'></div>
                            </div>
                            <motion.div
                            variants={containerRight(0)}
                            whileInView="visible"
                            initial="hidden"
                            transition="transition"className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
                                <p className="mb-4 text-neutral-400 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.skills.map((skill, index) => (
                                        <span key={index} className="rounded-full bg-neutral-900/90 border border-neutral-800 px-3 py-1 text-xs font-medium text-cyan-400 shadow-sm">
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