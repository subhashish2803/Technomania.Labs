import React from 'react'

function HeroSection() {
    return (
        <>
            <section className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6">
                <h1 className="text-4xl font-sans font-semibold text-gray-900 text-center">
                    Choose a Learning Path
                </h1>

                {/* Companies Section */}
                <div className="bg-white p-6 rounded-2xl shadow-lg mt-6 w-full">
                    <h2 className="text-2xl font-semibold text-gray-800">Companies</h2>
                    <p className="text-gray-600 mt-2">
                        Prepare for companies like Cisco, Amazon, TCS, Google with PrepInsta Prime’s company-specific courses.
                    </p>

                    {/* Company Logos */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <span className="font-semibold font-Bebas Neue  text-black text-sm tracking-wide">tcs</span>
                        <span className="font-semibold font-Bebas Neue  text-black text-sm tracking-wide">cisco</span>
                        <span className="font-semibold font-segoe UI  text-black text-sm tracking-wide">Tech Mahindra</span>
                        <span className="font-semibold font-pacifico  text-black text-sm tracking-wide ">amazon</span>
                        <span className="font-semibold font-Fredoka  text-black text-sm tracking-wide">Mindtree</span>
                        <span className="font-semibold font-sans  text-black text-sm tracking-wide">NETFLIX</span>

                        <span className="font-semibold font-sans  text-black text-sm flex items-center">
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #F25022, #FFB900, #7FBA00, #00A4EF)",
                                }}
                                className="bg-black w-5 h-5 mr-2"></span> Microsoft
                        </span>
                        <span className="font-semibold font-sans  text-black text-sm tracking-wide ">D E Shaw & Co</span>
                        <span className="font-semibold font-sans  text-black text-sm">Google</span>

                        {/* Add more logos */}
                    </div>

                    <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                        View All Companies →
                    </button>
                </div>

                {/* Learning Paths Section */}
                <div className="grid grid-cols-2 gap-4 mt-8 w-full ">
                    {/* Aptitude Card */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                        {/* Pattern in Top-Right Corner */}
                        <div
                            className="absolute top-0 right-0 w-70 h-28 rounded-tr-2xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(transparent 90%, rgba(16, 185, 129, 0.2) 10%), linear-gradient(90deg, transparent 90%, rgba(16, 185, 129, 0.2) 10%)",
                                backgroundSize: "20px 20px",
                                backgroundRepeat: "repeat",
                                opacity: 0.4, // Adjust transparency
                            }}
                        ></div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold text-gray-800">Aptitude</h3>
                        <p className="text-gray-600 mt-2">Learn aptitude from basic to pro with PrepInsta Prime.</p>
                        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                            Prepare Now →
                        </button>
                    </div>


                    {/* CS Subjects Card */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                        {/* Pattern Overlay in Top-Right Corner */}
                        <div
                            className="absolute top-0 right-0 w-70 h-28 rounded-tr-2xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(transparent 90%, rgba(16, 185, 129, 0.2) 10%), linear-gradient(90deg, transparent 90%, rgba(16, 185, 129, 0.2) 10%)",
                                backgroundSize: "20px 20px",
                                backgroundRepeat: "repeat",
                                opacity: 0.4, // Adjust transparency
                            }}
                        ></div>

                        {/* Card Content */}
                        <h3 className="relative text-xl font-semibold text-gray-800">CS Subjects</h3>
                        <p className="relative text-gray-600 mt-2">
                            Prepare for CS subjects and excel in your chosen field.
                        </p>
                        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                            Prepare Now →
                        </button>
                    </div>


                    {/* Programming Card */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                        {/* Pattern Overlay in Top-Right Corner */}
                        <div
                            className="absolute top-0 right-0 w-70 h-28 rounded-tr-2xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(transparent 90%, rgba(16, 185, 129, 0.2) 10%), linear-gradient(90deg, transparent 90%, rgba(16, 185, 129, 0.2) 10%)",
                                backgroundSize: "20px 20px",
                                backgroundRepeat: "repeat",
                                opacity: 0.4, // Adjust transparency
                            }}

                        ></div>
                        <div
                            className="absolute bottom-2 right-2 text-black font-bold"
                            style={{
                                fontSize: "40px", // Adjust size as needed
                                fontWeight: "bold",
                                opacity: 0.4, // Adjust transparency
                            }}
                        >
                            &lt;/&gt;
                        </div>

                        {/* Card Content */}
                        <h3 className="relative text-xl font-semibold text-gray-800">Programming</h3>
                        <p className="relative text-gray-600 mt-2">
                            Learn and become a pro in programming.
                        </p>
                        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                            Get Started →
                        </button>
                    </div>
                    {/* Interview Card */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                        {/* Pattern Overlay in Top-Right Corner */}
                        <div
                            className="absolute bottom-2 left-0 w-120 h-15 rounded-tr-2xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(transparent 90%, rgba(16, 185, 129, 0.2) 10%), linear-gradient(90deg, transparent 90%, rgba(16, 185, 129, 0.2) 10%)",
                                backgroundSize: "20px 20px",
                                backgroundRepeat: "repeat",
                                opacity: 0.4, // Adjust transparency
                            }}
                        ></div>

                        {/* Card Content */}
                        <h3 className="relative text-xl font-semibold text-gray-800">Interview</h3>
                        <p className="relative text-gray-600 mt-2">
                        HR, puzzles, group discussions, and more.
                        </p>
                        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                            Prepare Now →
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
