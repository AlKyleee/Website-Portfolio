import React from 'react'
import AboutCard from '../components/AboutCard'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section id='about' className='flex lg:h-[85vh] w-full'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <AboutCard />
      <span className='lg:w-2/5 bg-primary'></span>
    </motion.section>
  )
}

export default About