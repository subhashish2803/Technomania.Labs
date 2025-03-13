import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'


import Tech from '../components/Tech'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InstallationGuide from '../components/InstallationGuide'







function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <Banner/>
        
        
        
        <Tech/>
        <HeroSection/>
        <InstallationGuide/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
