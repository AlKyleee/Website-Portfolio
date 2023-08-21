import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section id='contact' className='flex h-full w-full py-20 justify-center items-center bg-primary'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <HeaderTitle title="Let's talk" />
    </motion.section>
  )
}

export default Contact