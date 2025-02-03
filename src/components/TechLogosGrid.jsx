import React from "react";

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

const TechLogosGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col items-center p-3 bg-white rounded-xl shadow-md border">
          <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
          <p className="mt-1 text-xs font-semibold">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechLogosGrid;
