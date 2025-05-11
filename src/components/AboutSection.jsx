import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background image from internet */}
      <div className="absolute inset-0 before:bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdfd48')] before:bg-cover before:bg-center before:absolute before:inset-0 before:opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#AF9B5C] font-medium inline-block mb-3 tracking-wider uppercase text-sm">
              Discover Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Excellence Across <span className="text-[#AF9B5C]">Industries</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-[#AF9B5C] rounded-full" />
              <div className="w-3 h-1 bg-[#AF9B5C] rounded-full" />
              <div className="w-2 h-1 bg-[#AF9B5C] rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Section */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                {/* Card */}
                <div className="relative">
                  <div className="p-6 bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[#AF9B5C] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="flex items-center gap-6">
                      <div className="p-3 bg-[#AF9B5C]/10 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[#AF9B5C]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[#AF9B5C] font-medium block mb-1 tracking-wide">Who We Are</span>
                        <h3 className="text-3xl font-bold text-white leading-tight">About Us</h3>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -z-10 -inset-1 bg-gradient-to-r from-[#AF9B5C] to-[#8A7B4A] blur-xl opacity-20"></div>
                </div>

                {/* Description */}
                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      <b className="text-[#AF9B5C]">AAS International Private Limited</b> is a dynamic, multi-sector organization dedicated to excellence and innovation across diverse industries. With a strong commitment to growth, sustainability, and cutting-edge solutions, we drive progress in multiple sectors, including:
                    </p>
                  </div>
                  <div className="absolute -z-10 -inset-1 bg-gradient-to-r from-[#AF9B5C]/20 to-transparent blur-xl opacity-30"></div>
                </div>

                {/* Industries List */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    "Information Technology",
                    "Mines & Minerals",
                    "Hospitality",
                    "Agriculture & Technology",
                    "Biotechnology",
                    "Bioinformatics"
                  ].map((industry, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 text-gray-700 group cursor-default">
                      <div className="w-1.5 h-2 rounded-full bg-gradient-to-b from-[#AF9B5C] to-[#8A7B4A] group-hover:scale-y-110 transition-transform"></div>
                      <span className="group-hover:text-[#AF9B5C] transition-colors font-medium">{industry}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#AF9B5C] to-[#8A7B4A] text-white rounded-xl font-medium hover:from-[#8A7B4A] hover:to-[#AF9B5C] transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <span className="relative">Discover More About Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Section - Image from internet */}
            <div className="lg:col-span-7 relative">
              <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
                  alt="About AAS International"
                  className="w-full h-[600px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {[...Array(6)].map((_, i) => (
                    <button key={i} className={`w-2 h-2 rounded-full transition-all ${i === 2 ? 'w-6 bg-[#AF9B5C]' : 'bg-white/60 hover:bg-white'}`}></button>
                  ))}
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#AF9B5C] rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#AF9B5C] rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
