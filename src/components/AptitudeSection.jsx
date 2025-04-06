import React from 'react'

const AptitudeSection = () => {
  return (
    <div className="bg-green-500 text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="/companylogo/aptitude.png" // <-- apni image ka path daal
            alt="Aptitude"
            className="w-60 h-auto"
          />
        </div>

        {/* Right content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Most Important Aptitude Topics For Placements
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Important Aptitude Topics for Placements are listed on this page. You can start your aptitude preparation for various Service Based and Product Based companies, by going through this page. On this page, you will find:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
            <li>
              <strong>Important Aptitude Topics for Campus Placements – Quants</strong>
            </li>
            <li>
              <strong>Important Aptitude Topics for Campus Placements – Logical</strong>
            </li>
            <li>
              <strong>Important Aptitude Topics for Campus Placements – Verbal Ability</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AptitudeSection

