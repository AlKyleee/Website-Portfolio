import React from 'react'
import CV from '../assets/files/Guevarra_CV.pdf'
import ResumeCard from '../components/ResumeCard'
import Skillset from '../components/Skillset'

const Resume = () => {
  return (
    <section id='resume' className='flex h-full w-full py-20 justify-center items-center bg-primary'>
      <div className="flex flex-col w-1/2 justify-center">
        <div className="flex justify-center items-center gap-2">
          <span className='h-5 w-5 mt-1 bg-quaternary'></span>
          <p className='text-4xl font-semibold text-tertiary'>Resume</p>
        </div>
        <div className="flex items-center justify-between mt-20">
          <p className="text-2xl font-medium text-tertiary">Experience</p>
          <a href={CV} target="_blank" className='flex justify-center rounded-full bg-tertiary text-white font-semibold py-2 w-36 text-sm ease-in duration-300 border-2 border-tertiary hover:text-tertiary hover:bg-primary hover:border-sky-800'>DOWNLOAD CV</a>
        </div>
        <ResumeCard duration='2023 - 2023' positionName='Web Developer' companyDegree='Syntactics Inc.' location='Cagayan de Oro, Philippines'>
          <p className='text-lg font-semibold text-tertiary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugiat molestias possimus iure, officiis eum ipsa dolores fuga labore voluptatem maxime error soluta quam ab itaque reprehenderit quo consequuntur eos!</p>
        </ResumeCard>
        <p className="mt-20 text-2xl font-medium">Education</p>
        <ResumeCard duration='2019 - 2023' positionName='University of Santo Tomas' companyDegree='Bachelor of Science in Information Technology Major in Web and Mobile Development' location='Manila, Philippines'>
          <p className='text-lg font-semibold text-tertiary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni, totam quidem aperiam delectus est earum accusantium quae voluptatibus, quia unde velit! Natus sapiente magni sit minima atque vero hic?</p>
        </ResumeCard>
        <Skillset />
      </div>
    </section>
  )
}

export default Resume