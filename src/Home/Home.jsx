import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import ExpertiseCarousel from '../components/ExpertiseCrousel'
import Tech from '../components/Tech'
import Footer from '../components/Footer'







function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <Banner/>
        
        <ExpertiseCarousel/>
        
        <Tech/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
