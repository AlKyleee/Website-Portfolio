import React from 'react'
import Skills from './Skills'

const Skillset = () => {
  return (
    <div className='flex flex-col px-14 py-28 sm:p-8 my-7 bg-white w-full shadow-[0_10px_16px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]'>
        <p className="text-2xl font-medium">Frontend Development</p>
        <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-1 gap-y-8 my-10">
            <Skills language='HTML' experience='Experienced' />
            <Skills language='CSS' experience='Intermediate' />
            <Skills language='React' experience='Intermediate' />
            <Skills language='Vue' experience='Intermediate' />
            <Skills language='Tailwind' experience='Intermediate' />
            <Skills language='JavaScript' experience='Intermediate' />
        </div>
        <p className="text-2xl font-medium my-10">Backend Development</p>
        <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-1 gap-y-8">
            <Skills language='Python' experience='Experienced' />
            <Skills language='PHP' experience='Experienced' />
            <Skills language='Java' experience='Intermediate' />
            <Skills language='MySQL' experience='Experienced' />
            <Skills language='Node JS' experience='Novice' />
        </div>
    </div>
  )
}

export default Skillset