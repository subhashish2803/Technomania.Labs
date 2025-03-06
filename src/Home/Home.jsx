import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import ExpertiseCarousel from '../components/ExpertiseCrousel'
import Tech from '../components/Tech'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'







function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <Banner/>
        
        <ExpertiseCarousel/>
        
        <Tech/>
        <HeroSection/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
