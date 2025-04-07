// Act.jsx

import React, { useRef } from 'react'
import CompanySlider from './Companyslider'
import CompanySliders from './CompanySliders'
import ServiceBasedCompanies from './ServiceBasedCompanies'

function Act() {
  const serviceRef = useRef(null);

  const scrollToServiceCompanies = () => {
    serviceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className="bg-violet-300 text-black md:p-12 rounded-md shadow-2xl m-4 bg-cover bg-center bg-no-repeat py-12 px-4">
        <h1 className="text-3xl md:text-5xl mb-4">All Companies Dashboard</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          technomaniaLabs, your one-stop for placement preparation and upskilling. Start your journey to placements and upskilling with all companies dashboard.
        </p>
        <button
          onClick={scrollToServiceCompanies}
          className="bg-gray-100 text-black font-semibold px-5 py-3 rounded-md border border-white hover:bg-green-300 transition flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-down">
            <path d="M12 18v-6"></path>
            <path d="m9 15 3 3 3-3"></path>
          </svg>
          Start Preparation
        </button>
      </div>

      {/* Sliders */}
      <CompanySlider />
      <CompanySliders />
      <CompanySliders />

      {/* Service Section with Ref */}
      <div ref={serviceRef}>
        <ServiceBasedCompanies />
      </div>
    </div>
  )
}

export default Act
