import React from 'react'
import test from '../assets/images/logo.png'

const PortfolioCard = ({image, projectTitle}) => {
    return (
        <div className='group flex relative items-center justify-center w-full h-full bg-black cursor-pointer'>
            <img src={image} className='z-10 group-hover:z-0 group-hover:opacity-75 transition ease-in-out duration-200' />
            <p className='absolute text-white text-3xl font-semibold group-hover:z-10'>{projectTitle}</p>
        </div>
    )
}

export default PortfolioCard