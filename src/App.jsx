import React from "react"
import Navbar from "./components/Navbar"
import AnimatedRoutes from "./components/AnimatedRoutes"
import ScrollToTop from "./components/ScrollToTop"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Analytics/>
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  )
}

export default App
