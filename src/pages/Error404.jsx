import React from 'react'
import { motion } from 'framer-motion'

const Error404 = () => {
  return (
    <motion.section id='404' className='flex flex-col h-full w-full py-20 justify-center items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <p className="text-6xl sm:text-5xl font-semibold text-tertiary">404</p>
      <p className="text-xl text-center font-semibold text-tertiary my-10 lg:w-1/2 xl:w-1/3 w-4/5">The page you are looking for does not exist.</p>

    </motion.section>
  )
}

export default Error404