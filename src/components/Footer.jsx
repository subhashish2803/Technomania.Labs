import React from 'react';

function Footer() {
  return (
    <footer className="bg-amber-50 text-gray-600 py-8 mt-auto w-full">
      <div className="w-full px-4">
        {/* Top Section with Logo */}
        <div className='flex flex-wrap items-center justify-start border-b border-gray-500 pb-6'>
  <svg
    className="h-12 w-12 md:h-16 md:w-16"
    width="64"
    height="64"
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
  <h1 className="text-xl font-bold text-gray-800 ml-0">technomaniaLabs
    </h1>  
</div>


        {/* Footer Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-6">
          {/* Creator Info */}
          <div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-300 shadow">
                <img src="/logos/Myimage.jpg" alt="Subhashish Nayak" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-sans text-gray-700">Created by</p>
                <p className="text-lg text-black font-bold">Subhashish Nayak</p>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/subhashish2803" target="_blank" className="hover:text-black">Github</a></li>
              <li><a href="https://www.linkedin.com/in/subhashishnayak" target="_blank" className="hover:text-black">LinkedIn</a></li>
              <li><a href="https://twitter.com/subhashish2803" target="_blank" className="hover:text-black">Twitter</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+917752025571" className="hover:text-black">+91-7752025571</a></li>
              <li><a href="https://github.com/subhashish2803" target="_blank" className="hover:text-black">Whatsapp/Instagram</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Location</h3>
            <p className="text-sm">INDIA</p>
            <p className="mt-2 text-black">Technomania Labs Pvt. Ltd., Patia, Bhubaneswar-751024</p>
          </div>
        </div>
        
        {/* Bottom Footer Section */}
        <div className="text-center mt-6 border-t border-gray-500 pt-4">
        <p className="font-sans font-bold text-black">&copy; 2024-2025 Technomania Labs</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
