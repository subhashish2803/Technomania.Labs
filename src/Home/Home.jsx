import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import Portfolio from '../components/Portfolio'
import ExpertiseCarousel from '../components/ExpertiseCrousel'
import Tech from '../components/Tech'
import Footer from '../components/Footer'



function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <Banner/>

        <Portfolio/>
        <ExpertiseCarousel/>
        <Tech/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
