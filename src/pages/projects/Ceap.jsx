import React from 'react'
import Project from '../../components/Project'
import Img from '../../assets/images/CEAP.jpg'

const Ceap = () => {
  return (
    <Project title="CEAP Online Resources for Education (CORE)" role="Frontend Developer & Quality Assurance" year="2022" image={Img} link="https://ceapcore.azurewebsites.net/">
      Created a document management system for the Catholic Association of the Philippines (CEAP). The application was built using NextJS.
    </Project>
  )
}

export default Ceap