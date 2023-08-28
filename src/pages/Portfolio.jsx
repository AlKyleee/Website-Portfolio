import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import { motion } from 'framer-motion'
import Project1 from '../assets/images/project1.jpg'

const Portfolio = () => {
  return (
    <motion.section id='' className='flex flex-col h-full w-full py-20 justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <p className="text-6xl font-semibold text-tertiary">My Portfolio</p>
      <p className="text-xl text-center font-semibold text-tertiary my-10 w-1/3">Welcome to my portfolio. Here you’ll find a selection of my work. Explore my projects to learn more about what I do.</p>
      <div className="grid grid-cols-3 grid-flow-row auto-rows-max gap-10 px-10">
        <PortfolioCard image={Project1} projectTitle="Project Title" />
        <PortfolioCard image={Project1} projectTitle="Project Title" />
        <PortfolioCard image={Project1} projectTitle="Project Title" />
      </div>
    </motion.section>
  )
}

export default Portfolio