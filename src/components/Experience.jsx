import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'motion/react'
import { containerLeft, containerRight, containerTop } from '../constants/animations'

export const Experiences = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
        <motion.h2
        variants={containerTop(0)}
        whileInView="visible"
        initial="hidden"
        transition="transition"
        className='my-20 text-center text-4xl'><span className='text-neutral-500'>Relevant</span> Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index}>
                    <a href={experience.link}>
                        <div className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div
                            variants={containerLeft(0)}
                            whileInView="visible"
                            initial="hidden"
                            transition="transition"
                            className='w-full lg:w-1/4'>
                                <p className='lg:text-right mb-2 text-sm text-neutral-400'>{experience.year}</p>
                            </motion.div>
                            <div className='mx-10 hidden lg:block'>
                                <div className="-ml-1 size-3 rounded-full bg-cyan-500"></div>
                                <div className='w-0.5 h-full bg-gray-700'></div>
                            </div>
                            <motion.div
                            variants={containerRight(0)}
                            whileInView="visible"
                            initial="hidden"
                            transition="transition"
                            className="w-full max-w-xl lg:-3/4">
                                <h6 className='mb-2 font-semibold'>
                                    {experience.role} - <span className='text-sm text-pink-100 font-black'>{experience.company}</span>
                                </h6>
                                <p className='mb-4 text-neutral-400'>{experience.descripction}</p>
                                <div>
                                    {experience.skills.map((skill, index) => (
                                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500'>{skill}</span>
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

export default Experiences