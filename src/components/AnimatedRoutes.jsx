import React from 'react'
import About from "../pages/About"
import Resume from "../pages/Resume"
import Portfolio from "../pages/Portfolio"
import CryptoCause from '../pages/projects/CryptoCause'
import Ceap from '../pages/projects/Ceap'
import CakesByLis from '../pages/projects/CakesByLis'
import AccInventorySystem from '../pages/projects/AccInventorySystem'
import OrderingAccountSystem from '../pages/projects/OrderingAccountSystem'
import PFP from '../pages/projects/PFP'
import Contact from "../pages/Contact"
import Error404 from "../pages/Error404"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const projects = [
        {name: 'CryptoCause', path: '/portfolio/CryptoCause', component: CryptoCause},
        {name: 'CEAP', path: '/portfolio/Ceap', component: Ceap},
        {name: 'Cakes by LIS', path: '/portfolio/CakesByLis', component: CakesByLis},
        {name: 'Account and Inventory Management System', path: '/portfolio/AccountInventorySystem', component: AccInventorySystem},
        {name: 'Ordering and Account Management System', path: '/portfolio/OrderingAccountSystem', component: OrderingAccountSystem},
        {name: 'Pautricia Food Processing Corporation', path: '/portfolio/PFP', component: PFP}
    ]

    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                {projects.map((project) => (
                    <Route path={project.path} element={<project.component />} />
                ))}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes