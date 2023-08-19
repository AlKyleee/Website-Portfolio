import React from 'react'
import Image from '../assets/images/hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function getTime() {
    const date = new Date()
    const hour = date.getHours()
    if (hour >= 0 && hour < 12) {
        return 'Good Morning'
    } else if (hour >= 12 && hour < 18) {
        return 'Good Afternoon'
    } else {
        return 'Good Evening'
    }
}

const Card = () => {
    return (
        <div className='flex absolute w-full h-3/4 justify-center items-center z-10'>
            <div className='flex flex-col drop-shadow-lg shadow-[0_10px_16px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]'>
                <div className='bg-secondary px-20 py-10 text-center flex flex-col items-center'>
                    <img src={Image} alt="" className='object-cover h-52 w-52 rounded-full' />
                    <p className='pt-5 text-3xl font-semibold text-tertiary'>Alejandro Kyle J.</p><p className='pb-5 text-3xl font-semibold text-tertiary'>Guevarra</p>
                    <span className='bg-[#2061b7] w-1/4 h-[2px]'></span>
                    <p className='pt-5 text-lg font-semibold text-tertiary tracking-[.25em]'>Web Developer</p>
                </div>
                <div className='flex gap-6 bg-white h-12 items-center justify-center'>
                    <a href="https://www.facebook.com/alkyleguevarra" target="_blank" className=' hover:opacity-75 ease-in duration-200'><FontAwesomeIcon icon={faFacebook} size='lg' style={{color: "#281a39",}} /></a>
                    <a href="https://stackoverflow.com/users/20494288/alkyleee" target="_blank" className=' hover:opacity-75 ease-in duration-200'><FontAwesomeIcon icon={faStackOverflow} size="lg" style={{color: "#281a39",}} /></a>
                    <a href="https://github.com/AlKyleee" target="_blank" className=' hover:opacity-75 ease-in duration-200'><FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#281a39",}} /></a>
                    <a href="https://www.linkedin.com/in/alkyleee/" target="_blank" className=' hover:opacity-75 ease-in duration-200'><FontAwesomeIcon icon={faLinkedinIn} style={{color: "#281a39",}} /></a>
                </div>
            </div>
            <div className='flex flex-col pl-8 w-1/5'>
                <p className='py-4 text-tertiary text-7xl font-semibold'>{getTime()}</p>
                <p className='py-4 text-2xl font-semibold text-tertiary'>Here's who I am & what I do</p>
                <div className='flex gap-2 py-4'>
                    <Link to='/resume'><button className='rounded-full bg-tertiary text-white font-medium py-2 w-32 text-sm ease-in duration-300 border border-tertiary hover:text-tertiary hover:bg-white hover:border-sky-800'>RESUME</button></Link>
                    <Link to='/projects'><button className='rounded-full bg-tertiary text-white font-medium py-2 w-32 text-sm ease-in duration-300 border border-tertiary hover:text-tertiary hover:bg-white hover:border-sky-800'>PROJECTS</button></Link>
                </div>
                <p className='py-4 text-tertiary font-semibold'>I am a graduate of Bachelor of Science in Information Technology Major in Web and Mobile Development in University of Santo Tomas and I am seeking clients to work with, wherein I can showcase my knowledge and skills for continuous improvement.</p>
            </div>

        </div>
    )
}

export default Card