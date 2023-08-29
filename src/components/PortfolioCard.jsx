import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioCard = ({ path, image, projectTitle }) => {
    return (
        <Link to={path} className='group flex relative items-center justify-center w-full h-full cursor-pointer bg-black'>
            <img src={image} className='z-10 group-hover:opacity-50 group-hover:blur-sm group-hover:z-0 transition ease-in-out duration-200 w-full h-full object-cover' />
            <p className="absolute text-[#fff6dc] font-['Ysabeau_SC'] text-6xl font-bold group-hover:z-10 text-center">{projectTitle}</p>
        </Link>
    )
}

export default PortfolioCard