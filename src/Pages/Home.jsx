import React from 'react'
import Navbar from '../Components/Layout/Navbar';
import Banner from '../Components/Banner';

const Home = () => {
  return (
    <div className='home'>
        <span className='home_animation'></span>
        <Navbar />
        <Banner />
    </div>
  )
}

export default Home