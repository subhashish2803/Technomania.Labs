import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'


import Tech from '../components/Tech'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Notes from '../components/Notes'
import HowWeWork from '../components/HowWework'
import IndustriesSlider from '../components/IndustriesSlider'
import ExpertiseSection from '../components/ExpertiseSection'
import BlogSection from '../components/BlogSection'
import AboutSection from '../components/AboutSection'








function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <Banner/>
        <HeroSection/>
        <AboutSection/>
        <IndustriesSlider/>
        <ExpertiseSection/>
        <HowWeWork/>
        <BlogSection/>
        <Tech/>
        
        
        
        <Footer/>
    </div>
    </>
  )
}

export default Home
