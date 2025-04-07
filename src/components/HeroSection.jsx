import React from 'react'

function HeroSection() {
    return (
        <>
            <section className="bg-gray-50 min-h-screen p-6 flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-10 xl:px-10">
                <h1 className="text-3xl sm:text-4xl font-sans font-semibold text-gray-900 text-center">
                    Choose a Learning Path
                </h1>


                <div className=" relative flex flex-col lg:flex-row items-start justify-between w-full gap-6 mt-6">
                    

                    {/* Left Section - Companies Container (70%) */}
                    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-800  sm:p-8  shadow-lg w-full lg:w-[70%] h-auto lg:h-[400px] ">
                        <h2 className="lg:text-3xl sm:text-xl font-semibold text-black">Companies</h2>
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
                        <div className='mt-30'>
                        <a 
                        href='/View All Companies'
                        className="lg:mt-30 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
                            View All Companies →
                        </a>
                        </div>
                    </div>

                    {/* Right Section - Image Container (30%) */}
                    <img src="/logos/note-taking.svg" alt="Featured" className="w-[400px] h-[400px] lg:h-[400px] shadow-amber-100 object-contain" />
                </div>


                {/* Learning Paths Section */}
                <div className=" relative grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full ">
                    

                    {/* Aptitude Card */}
                    <div className="border border-gray-300 shadow-lg dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-800">
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
                        
                        <h1 className="lg:text-3xl sm:text-xl font-semibold text-black mt-2">Aptitude</h1>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">Learn aptitude from basic to pro with PrepInsta Prime.</p>
                        
                        <div className='mt-30'><a 
                        href='Prepare'
                        className="lg:mt-30 bg-black text-white py-2 px-4 rounded-lg hover:scale-105 ">
                            
                            <span className="relative z-10">Prepare→</span>
                        </a>
                        </div>
                    </div>

                    {/* CS Subjects Card */}
                    <div className="relative shadow-lg h-[300px]  border border-gray-300 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-800 ">
                        
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
                        <h1 className="lg:text-3xl sm:text-xl font-semibold text-black mt-2 ">CS Subjects</h1>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">Prepare for CS subjects and excel in your chosen field.</p>
                        <button className="relative mt-30 bg-black text-white py-2 px-4 rounded-lg hover:scale-105 sm:mt-30">
                            
                            <span className="relative z-10">Move →</span>
                        </button>
                    </div>

                    {/* Programming Card */}
                    <div className="relative shadow-lg h-[300px] border border-gray-300 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-800">
                       
                        <div
                            className="absolute bottom-2 right-2 text-black font-bold"
                            style={{
                                fontSize: "90px",
                                fontWeight: "bold",
                                opacity: 0.2,
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
                        <h1 className="lg:text-3xl sm:text-xl font-semibold text-black">Programming</h1>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">Learn and become a pro in programming.</p>
                        <button className="relative mt-30 bg-black text-white py-2 px-4 rounded-lg hover:scale-105 sm:mt-30">
                            
                            <span className="relative z-10">Prepare Now →</span>
                        </button>
                    </div>

                    {/* Interview Card */}
                    <div className="relative border border-gray-300 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-800 shadow-lg">
                        
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
                        <h1 className="lg:text-3xl sm:text-xl font-semibold text-black">Interview</h1>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">HR, puzzles, group discussions, and more.</p>


                        <button className="relative mt-30 bg-black text-white py-2 px-4 rounded-lg hover:scale-105 sm:mt-30">
                            
                            <span className="relative z-10">Prepare Now →</span>
                        </button>


                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
