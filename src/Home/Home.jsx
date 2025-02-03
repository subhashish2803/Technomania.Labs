import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import ExpertiseCarousel from '../components/ExpertiseCrousel'



function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <Banner/>
        <ExpertiseCarousel/>
        <Portfolio/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
