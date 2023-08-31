import React from 'react'
import CV from '../assets/files/Guevarra_CV.pdf'
import ResumeCard from '../components/ResumeCard'
import Skillset from '../components/Skillset'
import HeaderTitle from '../components/HeaderTitle'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.section id='resume' className='flex h-full w-full py-20 justify-center items-center bg-primary'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <div className="flex flex-col w-1/2 justify-center">
        <HeaderTitle title="Resume" />
        <div className="flex items-center justify-between mt-20">
          <p className="text-2xl font-medium text-tertiary">Education</p>
          <a href={CV} target="_blank" className='flex justify-center rounded-full bg-tertiary text-white font-semibold py-2 w-36 text-sm ease-in duration-300 border-2 border-tertiary hover:text-tertiary hover:bg-primary hover:border-sky-800'>DOWNLOAD CV</a>
        </div>
        <ResumeCard duration='2019 - 2023' positionName='University of Santo Tomas' companyDegree='Bachelor of Science in Information Technology' location='Manila, Philippines'>
          <p className='text-lg font-semibold text-tertiary'>Studied Bachelor of Science in Information Technology for four years at the University of Santo Tomas. Graduated a Cum Laude and achieved multiple Dean's Lister.</p>
        </ResumeCard>
        <p className="mt-20 text-2xl font-medium">Experience</p>
        <ResumeCard duration='2023 - 2023' positionName='Web Developer (Intern)' companyDegree='Syntactics Inc.' location='Cagayan de Oro, Philippines'>
          <p className='text-lg font-semibold text-tertiary'>Interned as a Web Developer at Syntactics for almost half a year. Used WordPress to create and update websites for multiple clients.</p>
        </ResumeCard>
        <p className="mt-20 text-2xl font-medium">Skills</p>
        <Skillset />
      </div>
    </motion.section>
  )
}

export default Resume