import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const Project = ({ title, role, year, children, image, link }) => {
    return (
        <motion.div className='flex flex-col h-full w-full p-10 sm:p-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            <p className='text-6xl sm:text-5xl text-portfolio font-semibold mb-10'>{title}</p>
            <p className="text-2xl text-portfolio font-semibold mb-4">Role | <span className="text-xl text-tertiary font-semibold">{role}</span></p>
            <p className="text-2xl text-portfolio font-semibold">Year | <span className="text-xl text-tertiary font-semibold">{year}</span></p>
            <p className="text-xl text-tertiary font-medium text-center sm:text-left self-center w-1/2 sm:w-full mt-12">{children}</p>
            <a href={link} target="_blank" className='cursor-pointer self-center rounded-full bg-tertiary text-white font-medium py-2 w-32 text-sm ease-in duration-300 border border-tertiary hover:text-tertiary hover:bg-white hover:border-sky-800 text-center my-12'>VIEW PROJECT</a>
            <img src={image} className='object-cover w-3/5 sm:w-full self-center' /> 
        </motion.div>
    )
}

export default Project