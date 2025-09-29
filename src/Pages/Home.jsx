import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Featured from '../Components/Featured/Featured'
import HealthConcern from '../Components/HealthConcern/HealthConcern'

const Home = () => {
  return (
    <>
        <Hero/>
        <Featured/>
        <HealthConcern/>
    </>
  )
}

export default Home