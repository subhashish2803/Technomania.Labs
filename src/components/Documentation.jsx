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
  const technologies = [
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg" },
    { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    { name: "GraphQL", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
    { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
    { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "Redis", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Redis_Logo.svg" },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "Ruby", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
    { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
    { name: "Go", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
    { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "Heroku", logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Heroku_logo.svg" },
    { name: "Mocha", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Mocha_%28JavaScript_framework%29_Logo.svg" },
    { name: "Chai", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chai_Logo.svg" }
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
      <div className="grid grid-cols-5 gap-4 p-4">
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col items-center p-3 bg-white rounded-xl shadow-md border">
          <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
          <p className="mt-1 text-xs font-semibold">{tech.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Documentation;
