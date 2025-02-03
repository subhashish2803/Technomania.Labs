import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'



function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <Banner/>
        
        <Portfolio/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
