import React from 'react'
import Project from '../../components/Project'
import Img from '../../assets/images/CryptoCause.jpg'

const CryptoCause = () => {
  return (
    <Project title="CryptoCause" role="Frontend Developer" year="2023" image={Img} link="https://github.com/gnrflcthm/smart-contract">
      Created a decentralized application that allows users to donate to a charity of their choice using cryptocurrency. The application was built using ReactJS and Solidity.
    </Project>
  )
}

export default CryptoCause