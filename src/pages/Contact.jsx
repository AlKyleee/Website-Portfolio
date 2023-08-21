import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section id='contact'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      Contact
    </motion.section>
  )
}

export default Contact