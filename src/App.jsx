import React from "react"
import Navbar from "./components/Navbar"
import AnimatedRoutes from "./components/AnimatedRoutes"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  )
}

export default App
