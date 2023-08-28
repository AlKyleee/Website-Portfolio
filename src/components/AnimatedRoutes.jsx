import React from 'react'
import About from "../pages/About"
import Resume from "../pages/Resume"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import Error404 from "../pages/Error404"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes