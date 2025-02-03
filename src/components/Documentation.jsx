import React from "react";
import "./styles.css"; // Importing external styles for the galaxy background and animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Documentation = () => {
  const notes = [
    {
      title: "Selective Interview Questions Notes",
      description: "Master the essentials for your next interview.",
      url: "/pdfs/Interview_Prep.pdf",
    },
    {
      title: "Node.js Interview Tips",
      description: "Get ready to ace your Node.js interviews with this guide.",
      url: "/pdfs/NodeJS_Interview_Tips.pdf",
    },
    {
      title: "React Interview Guide",
      description: "Boost your React skills with this comprehensive guide.",
      url: "/pdfs/React_Interview_Guide.pdf",
    },
    {
      title: "JavaScript Interview Q&A",
      description: "Prepare for JavaScript interview questions with confidence.",
      url: "/pdfs/JavaScript_Interview_QA.pdf",
    },
    {
      title: "Database Management Tips",
      description: "Essential DBMS tips for technical interviews.",
      url: "/pdfs/DBMS_Tips.pdf",
    },
    {
      title: "System Design Basics",
      description: "Learn the fundamentals of system design for interviews.",
      url: "/pdfs/System_Design_Basics.pdf",
    },
  ];
  
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 cards per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="galaxy-background relative overflow-auto text-gray-400 h-screen w-full">
      {/* Revolving Planet */}
      <div className="revolving-planet absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg animate-revolve"></div>

      <div className="relative flex flex-col items-center py-20 px-4 max-w-screen-2xl mx-auto">
        {/* Profile Section */}
        <div className="relative text-white py-20 px-10 flex items-center justify-center rounded-lg mb-12">
          <div className="relative">
            <img
              src="/logos/Myimage1.png" // Replace with your image path
              alt="Subhashish Nayak"
              className="h-80 w-80 object-cover shadow-2xl"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-4 right-[-50px] bg-purple-600 text-white px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Mentored Many</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-mono dark:text-slate-700 text-white mb-8">
          Interview Preparation Notes
        </h1>

        {/* Slider Section for Notes */}
        <Slider {...sliderSettings} className="w-full">
          {notes.map((note, index) => (
            <div key={index} className="p-4">
              <div
                className="card bg-gray dark:bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 text-gray-400 shadow-xl border border-gray-200 rounded-lg p-4 relative hover:scale-105"
                style={{
                  borderImage: "linear-gradient(90deg, #00ffcc, #00aaff) 1",
                }}
              >
                <div className="card-body">
                  <h2 className="card-title text-white text-sm font-mono dark:text-black">
                    {note.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{note.description}</p>
                  <div className="card-actions justify-end mt-4 space-x-2">
                    <a
                      href={note.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 px-4 rounded-md"
                    >
                      View PDF
                    </a>
                    <a
                      href={note.url}
                      download
                      className="text-xs leading-5 bg-slate-400/10 rounded-full py-2 mt-2 px-3 flex items-center space-x-2 dark:hover:bg-base-300 dark:text-black"
                      type="button"
                      aria-label="Download PDF"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 10l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  );
};

export default Documentation;
