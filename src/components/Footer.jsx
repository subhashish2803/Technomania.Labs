import React from 'react';

function Footer() {
  return (
    <footer className="relative bg-[#F4F5F7] text-gray-700 py-6 mt-auto w-full overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/companylogo/footer6.webp"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/70 to-black/90 z-10"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-20 w-full px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-6 text-white">

          {/* Logo & About */}
          <div className="col-span-1">
            <div className="flex items-center mb-2">
              <svg className="h-8 w-8" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
                <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5" />
                <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3" />
                <circle cx="207.5" cy="135" r="125" fill="white" />
                <circle cx="207.5" cy="135" r="56" fill="#007BFF" />
                <line x1="182.5" y1="115" x2="232.5" y2="115" stroke="white" strokeWidth="10" />
                <line x1="207.5" y1="115" x2="207.5" y2="165" stroke="white" strokeWidth="10" />
              </svg>
              <span className="ml-2 font-bold font-jakarta text-2xl text-[#AF9A57]">technomaniaLabs</span>
            </div>
            <p className="text-sm mt-3 mb-2">
              Empowering the Future of Learning with Technomania Labs.
            </p>
            <p className="text-xs sm:text-sm mb-3">
              We help students prepare for placements with curated resources, online classes, sectional stats, and tips by toppers.
            </p>
            <p className="text-xs sm:text-sm">Powered by Skillanto Private Limited</p>

            {/* Awards */}
            <div className="mt-4 flex gap-4">
              <iframe
                width="130"
                height="130"
                src="https://shareables.clutch.co/share/badges/1264692/37945?utm_source=clutch_award_badge&utm_medium=image_embed"
                title="Top Skillanto Design Production Company India 2025 Award"
              ></iframe>
              <a
                href="https://www.google.com/maps/place/Zeksta+Technology+Pvt+Ltd./@12.8927879,77.6136046,17.58z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
                      alt="rating"
                      width={20}
                      height={20}
                    />
                    <span className="text-base font-bold">5</span>
                  </div>
                  <img
                    src="/companylogo/google.gif"
                    alt="google"
                    width={73}
                    height={24}
                    className="mt-1"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Companies */}
          <div>
            <h4 className="text-xl font-semibold text-[#e7e4e4] mb-6 pb-2 border-b border-gray-500">Companies</h4>
            <ul className="font-sans space-y-2 text-white">
              <li><a href="https://www.accenture.com" target="_blank" className="hover:text-[#AF9A57] transition-colors">Accenture</a></li>
              <li><a href="https://www.cognizant.com" target="_blank" className="hover:text-[#AF9A57] transition-colors">Cognizant</a></li>
              <li><a href="https://www.mindtree.com" target="_blank" className="hover:text-[#AF9A57] transition-colors">MindTree</a></li>
              <li><a href="https://www.ibm.com" target="_blank" className="hover:text-[#AF9A57] transition-colors">IBM</a></li>
              <li><a href="https://www.capgemini.com" target="_blank" className="hover:text-[#AF9A57] transition-colors">CapGemini</a></li>
              <li><a href="https://www.deloitte.com" target="_blank" className="hover:text-[#AF9A57] transition-colors">Deloitte</a></li>
              <li><a href="https://www.wipro.com" target="_blank" className="hover:text-[#AF9A57] transition-colors">Wipro</a></li>
              <li><a href="https://www.microsoft.com" target="_blank" className="hover:text-[#AF9A57] transition-colors">Microsoft</a></li>
              <li><a href="https://www.tcs.com" target="_blank" className="hover:text-[#AF9A57] transition-colors">TCS</a></li>

            </ul>
          </div>

          {/* Services */}
          <div className="md:px-4">
            <h3 className="text-xl font-semibold text-[#e7e4e4] mb-6 pb-2 border-b border-gray-500">Services</h3>
            <ul className="space-y-4">
              {[
                { name: "Web Development", href: "/services/web-development" },
                { name: "Mobile Apps", href: "/services/mobile-development" },
                { name: "Cloud Services", href: "/services/cloud-services" },
                { name: "Data Analytics", href: "/services/data-analytics" }
              ].map(({ name, href }) => (
                <li key={name}>
                  <a className="group flex items-center hover:text-[#AF9A57] transition-colors" href={href}>
                    <span className="mr-2 font-sans opacity-0 group-hover:opacity-100 text-[#AF9A57]">→</span>{name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-[#e7e4e4] mb-6 pb-2 border-b border-gray-500">Location</h3>
            <p className="font-sans">INDIA</p>
            <p className="mt-2 text-white font-sans">
              Technomania Labs Pvt. Ltd., Patia, Bhubaneswar - 751024
            </p>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-xl font-semibold text-[#e7e4e4] mb-6 pb-2 border-b border-gray-500">Get in Touch</h4>
            <ul className="font-sans space-y-3 text-gray-300 ">
              <li>Email: <a href="mailto:info@technomanialabs.com" className="underline font-sans  hover:text-[#AF9A57] transition-colors">info@technomanialabs.com</a></li>
              <li>Phone: <a href="tel:+919000000000" className="underline font-sans hover:text-[#AF9A57] transition-colors">+91 90000 00000</a></li>
              <li>Support: <a href="#" className="underline hover:text-[#AF9A57] font-sans transition-colors">technomanialabs.com/support</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-[#e7e4e4] mb-6 pb-2 border-b border-gray-500">Follow Us</h4>
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.instagram.com/zeksta_technology/" target="_blank" rel="noopener noreferrer">
                <div className="bg-slate-600 rounded-full p-3 hover:bg-[#AF9A57] transition-colors">
                  <svg fill="white" viewBox="0 0 24 24" width="15" height="15">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                  </svg>
                </div>
              </a>
              <a href="https://www.facebook.com/Zeksta.technology" target="_blank" rel="noopener noreferrer">
                <div className="bg-slate-600 rounded-full p-3 hover:bg-[#AF9A57] transition-colors">
                  <svg fill="white" viewBox="0 0 24 24" width="15" height="15">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.2l-.4 2.9H14v7A10 10 0 0 0 22 12z" />
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/ZekstaTech" target="_blank" rel="noopener noreferrer">
                <div className="bg-slate-600 rounded-full p-3 hover:bg-[#AF9A57] transition-colors">
                  <svg fill="white" viewBox="0 0 24 24" width="15" height="15">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.54 8.54 0 0 1-2.7 1.03A4.24 4.24 0 0 0 11.1 9a12.03 12.03 0 0 1-8.74-4.44 4.23 4.23 0 0 0 1.3 5.66 4.21 4.21 0 0 1-1.92-.53v.05a4.24 4.24 0 0 0 3.4 4.15 4.2 4.2 0 0 1-1.91.07 4.24 4.24 0 0 0 3.96 2.95 8.5 8.5 0 0 1-5.26 1.82c-.34 0-.68-.02-1.02-.06A12 12 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.36-.02-.54A8.2 8.2 0 0 0 22.46 6z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 py-6 text-md flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-white">
          <div className="text-sm">
            Copyright © 2025 TML Pvt. Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:text-[#AF9A57] transition-colors" href="/privacy-policy">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a className="hover:text-[#AF9A57] transition-colors" href="/cookies-policy">Cookies</a>
            <span className="text-gray-600">|</span>
            <a className="hover:text-[#AF9A57] transition-colors" href="/terms-of-services">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
