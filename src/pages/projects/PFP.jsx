import React from 'react'
import Project from '../../components/Project'
import Img from '../../assets/images/pfp.jpg'

const PFP = () => {
  return (
    <Project title="Pautricia Food Processing Corporation" role="Full Stack Developer" year="2024" image={Img} link="https://www.pfppautriciafoodprocessingcompany.com/">
        Created the official website for Pautricia Food Processing Corporation. The website was built using React.
    </Project>
  )
}

export default PFP