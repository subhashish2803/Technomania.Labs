import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#F4F5F7] text-gray-700 py-6 mt-auto w-full">
      <div className="w-full px-4">
        {/* Top Section with Logo Background */}
        <div
          className="w-full bg-no-repeat min-h-[240px] sm:min-h-[280px] md:min-h-[320px] py-8 brightness-110 contrast-125 rounded-md bg-center bg-contain"
          style={{
            backgroundImage: "url('/logos/Untitled design (2).png')",
          }}
        ></div>

        {/* Footer Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-6">
          {/* Logo & Description Section */}
          <div className="flex flex-col col-span-1">
            <div className="flex items-center mb-2">
              <svg
                className="h-8 w-8"
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
              <span className="ml-2 font-bold font-jakarta text-lg text-black">
                technomaniaLabs
              </span>
            </div>

            <h2 className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-teal-500 to-green-600 text-transparent bg-clip-text mb-3">
              Empowering the Future of Learning with Technomania Labs
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 mb-4">
              We help students to prepare for placements with the best study material, online classes,
              Sectional Statistics for better focus, and Success stories & tips by Toppers on Technomania Labs.
            </p>

            <p className="text-xs sm:text-sm text-gray-700">
              Technomania Labs Powered by Skillanto Private Limited
            </p>
          </div>

          {/* Companies Section */}
          <div className="col-span-1">
            <h3 className="font-semibold text-base text-gray-800 mb-2">Companies</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-1 text-sm">
                <li><a href="https://www.accenture.com" target="_blank" className="hover:text-black">Accenture</a></li>
                <li><a href="https://www.cognizant.com" target="_blank" className="hover:text-black">Cognizant</a></li>
                <li><a href="https://www.mindtree.com" target="_blank" className="hover:text-black">MindTree</a></li>
                <li><a href="https://www.ibm.com" target="_blank" className="hover:text-black">IBM</a></li>
                <li><a href="https://www.capgemini.com" target="_blank" className="hover:text-black">CapGemini</a></li>
                <li><a href="https://www.deloitte.com" target="_blank" className="hover:text-black">Deloitte</a></li>
                <li><a href="https://www.wipro.com" target="_blank" className="hover:text-black">Wipro</a></li>
              </ul>

              <ul className="space-y-1 text-sm">
                <li><a href="https://www.microsoft.com" target="_blank" className="hover:text-black">Microsoft</a></li>
                <li><a href="https://www.tcs.com" target="_blank" className="hover:text-black">TCS</a></li>
                <li><a href="https://www.infosys.com" target="_blank" className="hover:text-black">Infosys</a></li>
                <li><a href="https://www.oracle.com" target="_blank" className="hover:text-black">Oracle</a></li>
                <li><a href="https://www.hcltech.com" target="_blank" className="hover:text-black">HCL</a></li>
                <li><a href="https://www.tcs.com/ninja" target="_blank" className="hover:text-black">TCS Ninja</a></li>
                <li><a href="https://www.zoho.com" target="_blank" className="hover:text-black">ZOHO</a></li>
              </ul>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="col-span-1">
            <h3 className="font-semibold text-base text-gray-800 mb-2">Get in Touch</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="https://github.com/subhashish2803" target="_blank" className="hover:text-black">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/subhashishnayak" target="_blank" className="hover:text-black">LinkedIn</a></li>
              <li><a href="https://twitter.com/subhashish2803" target="_blank" className="hover:text-black">Twitter</a></li>
              <li><a href="https://youtube.com" target="_blank" className="hover:text-black">YouTube</a></li>
              <li><a href="https://facebook.com" target="_blank" className="hover:text-black">Facebook</a></li>
              <li><a href="https://telegram.me" target="_blank" className="hover:text-black">Telegram</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-base text-gray-800 mb-2">Contact Info</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="tel:+917752025571" className="hover:text-black">+91-7752025571</a></li>
              <li><a href="https://wa.me/917752025571" target="_blank" className="hover:text-black">WhatsApp / Instagram</a></li>
            </ul>
          </div>

          {/* Location */}
          <div className="col-span-1">
            <h3 className="font-semibold text-base text-gray-800 mb-2">Location</h3>
            <p className="text-sm">INDIA</p>
            <p className="mt-2 text-black text-sm">
              Technomania Labs Pvt. Ltd., Patia, Bhubaneswar - 751024
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center pt-4 mt-6 border-t border-gray-300">
          <p className="font-sans font-medium text-gray-700 text-sm">
            &copy; 2024-2025 Technomania Labs
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
