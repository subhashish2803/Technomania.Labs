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
<div className="border border-gray-300 rounded-2xl p-6 sm:p-8 bg-gray-50 shadow-xl">

  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 place-items-center">
    {techStacks
      .filter((tech) => selectedCategory === "Top" || tech.category === selectedCategory)
      .slice(0, 32)
      .map((tech) => (
        <div
          key={tech.name}
          className="w-20 h-20 bg-white border-2 border-gray-300 rounded-xl flex items-center justify-center shadow-sm relative group hover:shadow-lg transition"
        >
          {/* Tooltip */}
          <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
            {tech.name}
          </div>
          <img
            src={tech.src}
            alt={tech.name}
            className="w-12 h-12 object-contain"
          />
        </div>
      ))}
  </div>
</div>

    </div>
    
  );
}

export default Tech;
