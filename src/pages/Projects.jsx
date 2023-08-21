import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.section id='projects' className='flex h-full w-full py-20 justify-center items-center bg-primary'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <HeaderTitle title="Projects" />
    </motion.section>
  )
}

export default Projects