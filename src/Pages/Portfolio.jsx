import React from 'react'
import Aboutme from '../Components/About/Aboutme'
import MyService from '../Components/about/MyService'
import Testimonials from '../Components/about/Testimonials'
import ChoosePlan from '../Components/about/ChoosePlan'

const Portfolio = () => {
  return (
    <div className='about'>
        <span className='home_animation'></span>
        <Aboutme/>
        <MyService />
        <Testimonials />
        <ChoosePlan />
    </div>
  )
}

export default Portfolio