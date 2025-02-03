import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="max-w-screen-2xl mx-auto px-4">
        
        {/* Footer Content Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start">
          {/* Creator Info Section */}
          <div className="w-full sm:w-1/3 text-left mb-6 sm:mb-0">
            <div className="flex items-center justify-start space-x-4">
              <div className="avatar">
                <div className="mask mask-squircle w-16 h-16">
                  <img
                    src="/logos/Myimage.jpg"
                    alt="Subhashish Nayak"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-sans text-black">Created by</p>
                <p className="text-lg text-black font-bold">Subhashish Nayak</p>
              </div>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="w-full sm:w-1/3 text-left mt-6 sm:mt-0">
            <h3 className="font-bold font-sans text-lg mb-2 text-gray-800">Get in Touch</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a
                  href="https://github.com/subhashish2803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-black"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/subhashishnayak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-black"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/subhashish2803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-black"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full sm:w-1/3 text-left mt-6 sm:mt-0">
            <h3 className="font-bold font-sans text-gray-800 text-lg mb-2">Contact Info</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a
                  href="mailto:example@example.com"
                  className="text-gray-600 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-black"
                >
                  +91-7752025571
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/subhashish2803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-black"
                >
                  Text us on <span className="h-5">|</span> Whatsapp/Instagram
                </a>
              </li>
              <li>
                {/* Copyright Text */}
                <p className="font-sans font-bold text-black">&copy; 2024-2025 Technomania Labs</p>
              </li>
            </ul>
          </div>

          {/* Location Info Section */}
          <div className="w-full sm:w-1/3 text-left mt-6 sm:mt-0">
            <h3 className="font-bold font-sans text-gray-800 text-lg mb-2">Location</h3>
            <h6 className="font-sans text-sm">INDIA</h6>
            <p className="mt-2 text-black font-sans">
              Technomania Labs Pvt. Ltd. Patia, Bhubaneswar-751024
            </p>
          </div>
        </div>
      </div>
      <br />
    </footer>
  );
}

export default Footer;
