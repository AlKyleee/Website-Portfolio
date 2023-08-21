import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.section id='projects'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      Projects
    </motion.section>
  )
}

export default Projects