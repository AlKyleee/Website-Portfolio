import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="w-full flex flex-wrap items-center justify-between px-24 sm:px-3 md:px-12 my-5">
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <img src={Logo} className="w-40" alt="Kyle Logo" />
        </Link>
        <div className='block lg:hidden'>
          <button
              onClick={toggleMenu}
              className="block text-tertiary p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
        </div>
        <div className='sm:hidden md:hidden'>
          <ul className="font-medium flex sm:flex-col p-4 lg:space-x-8">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-tertiary font-thin">ABOUT ME</Link>
            </li>
            <li>
              <Link to="/resume" className="block py-2 pl-3 pr-4 text-tertiary font-thin">RESUME</Link>
            </li>
            <li>
              <Link to="/portfolio" className="block py-2 pl-3 pr-4 text-tertiary font-thin">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 pl-3 pr-4 text-tertiary font-thin">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`sm:${menuOpen ? 'block' : 'hidden'} md:${menuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <ul className="font-medium flex flex-col lg:flex-row p-4 lg:space-x-8 text-center bg-[#f4ece6] lg:bg-white">
          <li>
            <Link to="/" className="block py-2 pl-3 pr-4 text-tertiary font-thin" onClick={toggleMenu}>ABOUT ME</Link>
          </li>
          <li>
            <Link to="/resume" className="block py-2 pl-3 pr-4 text-tertiary font-thin" onClick={toggleMenu}>RESUME</Link>
          </li>
          <li>
            <Link to="/portfolio" className="block py-2 pl-3 pr-4 text-tertiary font-thin" onClick={toggleMenu}>PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 pl-3 pr-4 text-tertiary font-thin" onClick={toggleMenu}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar