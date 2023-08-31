import React from 'react'
import Project from '../../components/Project'
import Img from '../../assets/images/CakesByLis.jpg'

const CakesByLis = () => {
    return (
        <Project title="Cakes by LIS Inventory and Ordering System" role="Backend Developer" year="2022" image={Img} link="https://github.com/BKryth/CakesByLis">
            Created an inventory and ordering system for Cakes by LIS. The application was built using vanilla HTML, CSS, and JavaScript.
        </Project>
    )
}

export default CakesByLis