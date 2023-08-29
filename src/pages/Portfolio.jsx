import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import CryptoCause from '../assets/images/CryptoCause.jpg'
import Ceap from '../assets/images/CEAP.jpg'
import CakesByLis from '../assets/images/CakesByLis.jpg'
import AccInventorySystem from '../assets/images/AccInventorySystem.jpg'
import OrderingAccountSystem from '../assets/images/OrderingAccountSystem.jpg'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <motion.section id='' className='flex flex-col h-full w-full py-20 justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <p className="text-6xl font-semibold text-tertiary">My Portfolio</p>
      <p className="text-xl text-center font-semibold text-tertiary my-10 w-1/3">Welcome to my portfolio. Here you'll find a selection of my work. Explore my projects to learn more about what I do.</p>
      <div className="grid grid-cols-3 grid-flow-row auto-rows-max gap-10 px-10">
        <PortfolioCard image={CryptoCause} projectTitle="CryptoCause" path="/portfolio/CryptoCause" />
        <PortfolioCard image={Ceap} projectTitle="CEAP Online Resources for Education (CORE)" path="/portfolio/Ceap" />
        <PortfolioCard image={CakesByLis} projectTitle="Cakes by LIS Inventory and Ordering System" path="/portfolio/CakesByLis" />
        <PortfolioCard image={AccInventorySystem} projectTitle="Account and Inventory Management System" path="/portfolio/AccountInventorySystem" />
        <PortfolioCard image={OrderingAccountSystem} projectTitle="Ordering and Account Management System" path="/portfolio/OrderingAccountSystem" />
      </div>
    </motion.section>
  )
}

export default Portfolio