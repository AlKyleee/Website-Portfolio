import React from 'react'

const Skills = ({ language, experience }) => {
    return (
        <article className='flex flex-row gap-4'>
            <span className='h-3 w-3 mt-[6px] bg-quaternary'></span>
            <div className="flex flex-col">
                <p className="text-tertiary font-bold">{language}</p>
                <p className="text-tertiary font-medium">{experience}</p>
            </div>
        </article>
    )
}

export default Skills