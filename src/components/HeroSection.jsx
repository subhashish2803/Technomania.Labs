import React from 'react'

function HeroSection() {
    return (
        <>
            <section className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                <h1 className="text-3xl sm:text-4xl font-sans font-semibold text-gray-900 text-center">
                    Choose a Learning Path
                </h1>

                {/* Companies Section */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mt-6 w-full">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Companies</h2>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                        Prepare for companies like Cisco, Amazon, TCS, Google with PrepInsta Prime’s company-specific courses.
                    </p>

                    {/* Company Logos */}
                    <div className="flex flex-wrap gap-4 mt-4 text-xs sm:text-sm">
                        <span className="font-semibold font-Bebas Neue text-black tracking-wide">tcs</span>
                        <span className="font-semibold font-Bebas Neue text-black tracking-wide">cisco</span>
                        <span className="font-semibold font-segoe UI text-black tracking-wide">Tech Mahindra</span>
                        <span className="font-semibold font-pacifico text-black tracking-wide">amazon</span>
                        <span className="font-semibold font-Fredoka text-black tracking-wide">Mindtree</span>
                        <span className="font-semibold font-sans text-black tracking-wide">NETFLIX</span>
                        <span className="font-semibold font-sans text-black flex items-center">
                            <span
                                style={{ background: "linear-gradient(90deg, #F25022, #FFB900, #7FBA00, #00A4EF)" }}
                                className="bg-black w-4 h-4 sm:w-5 sm:h-5 mr-2"></span> Microsoft
                        </span>
                        <span className="font-semibold font-sans text-black tracking-wide">D E Shaw & Co</span>
                        <span className="font-semibold font-sans text-black">Google</span>
                    </div>

                    <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
                        View All Companies →
                    </button>
                </div>

                {/* Learning Paths Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full ">
                    {/* Aptitude Card */}
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
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Aptitude</h3>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">Learn aptitude from basic to pro with PrepInsta Prime.</p>
                        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
                            Prepare Now →
                        </button>
                    </div>

                    {/* CS Subjects Card */}
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
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">CS Subjects</h3>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">Prepare for CS subjects and excel in your chosen field.</p>
                        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
                            Prepare Now →
                        </button>
                    </div>

                    {/* Programming Card */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg">
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
                        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
                            Get Started →
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
                        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
                            Prepare Now →
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
