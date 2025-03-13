import React from 'react'

function HeroSection() {
    return (
        <>
            <section className="bg-gray-50 min-h-screen p-6 flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-10 xl:px-10">
                <h1 className="text-3xl sm:text-4xl font-sans font-semibold text-gray-900 text-center">
                    Choose a Learning Path
                </h1>


                <div className=" relative flex flex-col lg:flex-row items-start justify-between w-full gap-6 mt-6">
                    {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-purple-400 opacity-20 blur-3xl rounded-2xl"></div>
            
            {/* Left Section - Companies Container (70%) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full lg:w-[70%] h-auto lg:h-[400px]">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Companies</h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    Prepare for companies like Cisco, Amazon, TCS, Google with PrepInsta Prime’s company-specific courses.
                </p>
                {/* Company Logos */}
                <div className="space-x-2 mt-4 flex flex-wrap gap-2">
                    <span className="font-semibold text-black tracking-wide">TCS</span>
                    <span className="font-semibold text-black tracking-wide">Cisco</span>
                    <span className="font-semibold text-black tracking-wide">Tech Mahindra</span>
                    <span className="font-semibold text-black tracking-wide">Amazon</span>
                    <span className="font-semibold text-black tracking-wide">Mindtree</span>
                    <span className="font-semibold text-black tracking-wide">Netflix</span>
                    <span className="font-semibold text-black tracking-wide flex items-center">
                        <span
                            style={{ background: "linear-gradient(90deg, #F25022, #FFB900, #7FBA00, #00A4EF)" }}
                            className="w-3 h-3 sm:w-4 sm:h-4 mr-1">
                        </span> Microsoft
                        <span className="font-semibold ml-2 text-black tracking-wide">Google</span>  
                    </span>
                    
                </div>
                <button className="mt-30 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
                        View All Companies →
                    </button>
            </div>
            
            {/* Right Section - Image Container (30%) */}
            <img src="/logos/herr.png" alt="Featured" className="w-[400px] h-[400px] lg:h-[400px] shadow-amber-100 object-contain" />
        </div>


                {/* Learning Paths Section */}
                <div className=" relative grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full ">
                    {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-purple-600 opacity-20 blur-3xl rounded-2xl"></div>
            
                    {/* Aptitude Card */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg ">
                        <div
                            className="absolute top-0 right-0 w-70 h-28 rounded-tr-2xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(transparent 90%, rgba(16, 185, 129, 0.2) 10%), linear-gradient(90deg, transparent 90%, rgba(16, 185, 129, 0.2) 10%)",
                                backgroundSize: "20px 20px",
                                backgroundRepeat: "repeat",
                                opacity: 0.4,
                            }}
                        ></div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Aptitude</h3>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">Learn aptitude from basic to pro with PrepInsta Prime.</p>
                        <button className="relative mt-4 bg-gray-950 text-amber-300 py-2 px-4 rounded-lg hover:scale-105 lg:mt-30">
  <div className="absolute -inset-1.5 bg-gradient-to-r from-green-700 to-purple-600 rounded-xl blur opacity-75 z-0"></div>
  <span className="relative z-10">Prepare Now →</span>
</button>
                    </div>

                    {/* CS Subjects Card */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg h-[300px]  ">
                        <div
                            className="absolute top-0 right-0 w-70 h-28 rounded-tr-2xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(transparent 90%, rgba(16, 185, 129, 0.2) 10%), linear-gradient(90deg, transparent 90%, rgba(16, 185, 129, 0.2) 10%)",
                                backgroundSize: "20px 20px",
                                backgroundRepeat: "repeat",
                                opacity: 0.4,
                            }}
                        ></div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 ">CS Subjects</h3>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">Prepare for CS subjects and excel in your chosen field.</p>
                        <button className="relative mt-30 bg-gray-950 text-amber-300 py-2 px-4 rounded-lg hover:scale-105 sm:mt-30">
  <div className="absolute -inset-1.5 bg-gradient-to-r from-green-700 to-purple-600 rounded-xl blur opacity-75 z-0"></div>
  <span className="relative z-10">Prepare Now →</span>
</button>
                    </div>

                    {/* Programming Card */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg h-[300px]">
                        <div
                            className="absolute bottom-2 right-2 text-black font-bold"
                            style={{
                                fontSize: "40px",
                                fontWeight: "bold",
                                opacity: 0.4,
                            }}
                        >
                            &lt;/&gt;
                        </div>
                        <div
                            className="absolute top-0 right-0 w-70 h-28 rounded-tr-2xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(transparent 90%, rgba(16, 185, 129, 0.2) 10%), linear-gradient(90deg, transparent 90%, rgba(16, 185, 129, 0.2) 10%)",
                                backgroundSize: "20px 20px",
                                backgroundRepeat: "repeat",
                                opacity: 0.4,
                            }}
                        ></div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Programming</h3>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">Learn and become a pro in programming.</p>
                        <button className="relative mt-30 bg-gray-950 text-amber-300 py-2 px-4 rounded-lg hover:scale-105 sm:mt-30">
  <div className="absolute -inset-1.5 bg-gradient-to-r from-green-700 to-purple-600 rounded-xl blur opacity-75 z-0"></div>
  <span className="relative z-10">Prepare Now →</span>
</button>
                    </div>

                    {/* Interview Card */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                        <div
                            className="absolute top-0 right-0 w-70 h-28 rounded-tr-2xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(transparent 90%, rgba(16, 185, 129, 0.2) 10%), linear-gradient(90deg, transparent 90%, rgba(16, 185, 129, 0.2) 10%)",
                                backgroundSize: "20px 20px",
                                backgroundRepeat: "repeat",
                                opacity: 0.4,
                            }}
                        ></div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Interview</h3>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">HR, puzzles, group discussions, and more.</p>

                    
                        <button className="relative mt-4 bg-gray-950 text-amber-300 py-2 px-4 rounded-lg hover:scale-105 lg:mt-30">
  <div className="absolute -inset-1.5 bg-gradient-to-r from-green-700 to-purple-600 rounded-xl blur opacity-75 z-0"></div>
  <span className="relative z-10">Prepare Now →</span>
</button>

                    
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
