import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#F4F5F7] text-gray-700 py-6 mt-auto w-full">
      <div className="w-full px-4">
        {/* Top Section with Logo */}
        <div
          className="w-full px-4 bg-no-repeat min-h-[320px] py-8 brightness-110 contrast-125"
          style={{
            backgroundImage: "url('/logos/Untitled design (2).png')",
            backgroundSize: "contain",  // Keeps the image's original size
            backgroundPosition: "center", // Centers the image
          }}
        ></div>

        {/* Footer Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-6">
        
          {/* Logo Section */}
          <div className="flex flex-col items-start justify-start pb-4">
            <div className="flex items-center">
              <svg
                className="relative h-6 w-6 md:h-8 md:w-8"
                width="32"
                height="32"
                viewBox="0 0 415 415"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
                <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle>
                <circle cx="207.5" cy="135" r="125" fill="white"></circle>
                <circle cx="207.5" cy="135" r="56" fill="#007BFF"></circle>
                <line x1="182.5" y1="115" x2="232.5" y2="115" stroke="white" strokeWidth="10" />
                <line x1="207.5" y1="115" x2="207.5" y2="165" stroke="white" strokeWidth="10" />
              </svg>
              <span className="relative font-bold font-jakarta text-lg md:text-xl text-black ">
                technomaniaLabs
              </span>
            </div>

            <div className="container mx-auto px-6 mt-4">
              <div className="flex flex-col items-center text-center">
                {/* Heading */}
                <h2 className="text-md font-semibold font-sans bg-gradient-to-r from-blue-400 via-teal-500 to-green-600 text-transparent bg-clip-text mb-6">
                Empowering the Future of Learning with Technomania Labs
                </h2>

                {/* Main description */}
                <p className="text-xs sm:text-base text-gray-700 mb-6">
                  We help students to prepare for placements with the best study material, online classes,
                  Sectional Statistics for better focus, and Success stories & tips by Toppers on Technomania Labs.
                </p>

                {/* Footer text */}
                <div className="text-xs sm:text-sm text-gray-700">
                  <p className="font-sans">
                    Technomania Labs Powered by Metis Eduventures Private Limited
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Companies Section */}
          <div className="space-y-2 col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-lg text-gray-800">Companies</h3>
            {/* Companies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
              {/* Column for companies */}
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.accenture.com" target="_blank" className="hover:text-black">Accenture</a></li>
                <li><a href="https://www.cognizant.com" target="_blank" className="hover:text-black">Cognizant</a></li>
                <li><a href="https://www.mindtree.com" target="_blank" className="hover:text-black">MindTree</a></li>
                <li><a href="https://www.ibm.com" target="_blank" className="hover:text-black">IBM</a></li>
                <li><a href="https://www.capgemini.com" target="_blank" className="hover:text-black">CapGemini</a></li>
                <li><a href="https://www.deloitte.com" target="_blank" className="hover:text-black">Deloitte</a></li>
                <li><a href="https://www.wipro.com" target="_blank" className="hover:text-black">Wipro</a></li>
              </ul>

              <ul className="space-y-2 text-sm">
                <li><a href="https://www.microsoft.com" target="_blank" className="hover:text-black">Microsoft</a></li>
                <li><a href="https://www.tcs.com" target="_blank" className="hover:text-black">TCS</a></li>
                <li><a href="https://www.infosys.com" target="_blank" className="hover:text-black">Infosys</a></li>
                <li><a href="https://www.oracle.com" target="_blank" className="hover:text-black">Oracle</a></li>
                <li><a href="https://www.hcltech.com" target="_blank" className="hover:text-black">HCL</a></li>
                <li><a href="https://www.tcs.com/ninja" target="_blank" className="hover:text-black">TCS Ninja</a></li>
                <li><a href="https://www.tcs.com/ninja" target="_blank" className="hover:text-black">ZOHO</a></li>
              </ul>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="pb-4">
            <h3 className="font-semibold text-lg text-gray-800">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/subhashish2803" target="_blank" className="hover:text-black">Github</a></li>
              <li><a href="https://www.linkedin.com/in/subhashishnayak" target="_blank" className="hover:text-black">LinkedIn</a></li>
              <li><a href="https://twitter.com/subhashish2803" target="_blank" className="hover:text-black">Twitter</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="pb-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-lg text-gray-800">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+917752025571" className="hover:text-black">+91-7752025571</a></li>
              <li><a href="https://github.com/subhashish2803" target="_blank" className="hover:text-black">Whatsapp/Instagram</a></li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="pb-4">
            <h3 className="font-semibold text-lg text-gray-800">Location</h3>
            <p className="text-sm">INDIA</p>
            <p className="mt-2 text-black">Technomania Labs Pvt. Ltd., Patia, Bhubaneswar-751024</p>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="text-center pt-4 mt-2 border-t border-gray-300">
          <p className="font-sans font-medium text-gray-700">
            &copy; 2024-2025 Technomania Labs
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
