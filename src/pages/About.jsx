import React from 'react'
import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <section id='about' className='flex h-[85vh] w-full'>
      <AboutCard />
      <span className='w-2/5 bg-primary'></span>
    </section>
  )
}

export default About