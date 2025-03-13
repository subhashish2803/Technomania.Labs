import React, { useState } from "react";

function Tech() {
  const [selectedCategory, setSelectedCategory] = useState("Top");

  const categories = [
    "Top",
    "Web",
    "Mobile",
    "Backend",
    
    "Database",
    "DevOps & Cloud",
    
  ];

  const techStacks = [
    { name: "Angular", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg", category: "Web" },
    { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", category: "Web" },
    { name: "Vue", src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", category: "Web" },
    { name: "TypeScript", src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", category: "Web" },
    { name: "NextJS", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", category: "Web" },
    { name: "Flutter", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png", category: "Mobile" },
    { name: "NodeJS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", category: "Backend" },
    
    { name: "Docker", src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", category: "DevOps & Cloud" },
    { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", category: "DevOps & Cloud" },
   
    { name: "Firebase", src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg", category: "Database" },
    { name: "PostgreSQL", src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", category: "Database" },
    { name: "Redis", src: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg", category: "Database" },
    { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", category: "Backend" },
    { name: "Java", src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", category: "Backend" },
    { name: "Ruby", src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg", category: "Backend" },
    { name: "Go", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg", category: "Backend" },
    { name: "Kubernetes", src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", category: "DevOps & Cloud" },
    { name: "GraphQL", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg", category: "Backend" },
    
    
   
    { name: "Express", src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", category: "Backend" },
    
    { name: "Spring Boot", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg", category: "Backend" },
  ];

  return (
    <div className="m-auto p-8 bg-white sm:mt-12">
      <div className="flex flex-col max-w-2xl text-center m-auto mb-6">
        <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-gray-900 text-center mb-6">Tech We Love</h2>
        <p className=" text-black  text-md font-sans text-center mb-4">
          Discovering and Celebrating the Best in Technology.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="w-full flex flex-wrap justify-center mb-8">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={` transition duration-300 cursor-pointer mr-1 px-4 py-2 mt-2 rounded-lg border-1 border-black ${
              selectedCategory === category ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <span className="capitalize text-sm font-bold">{category}</span>
          </div>
        ))}
      </div>

      {/* Tech Stack Container */}
      <div className="relative p-4 rounded-xl shadow-lg bg-white">
        {/* Gradient Borders in Corners */}
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
                        <div
                            className="absolute buttom-0 left-0 w-70 h-25 rounded-tr-2xl"
                            style={{
                                backgroundImage:
                                    "linear-gradient(transparent 90%, rgba(16, 185, 129, 0.2) 10%), linear-gradient(90deg, transparent 90%, rgba(16, 185, 129, 0.2) 10%)",
                                backgroundSize: "20px 20px",
                                backgroundRepeat: "repeat",
                                opacity: 0.4,
                            }}
                        ></div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {techStacks
            .filter((tech) => selectedCategory === "Top" || tech.category === selectedCategory)
            .slice(0, 32)
            .map((tech) => (
              <div key={tech.name} className="w-20 h-20 flex justify-center items-center bg-white rounded-lg shadow-md border-2 border-gray-600 relative group">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </div>
                <img src={tech.src} alt={tech.name} className="w-12 h-12 object-contain" />
              </div>
            ))}
        </div>
      </div>
    </div>
    
  );
}

export default Tech;
