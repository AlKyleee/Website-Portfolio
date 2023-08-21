import React from "react"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Error404 from "./pages/Error404"
import AnimatedRoutes from "./components/AnimatedRoutes"

function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
    </>
  )
}

export default App
