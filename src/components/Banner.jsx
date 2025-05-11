import React, { useState, useEffect, useRef } from "react";
import { Star, User } from "lucide-react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaRobot, FaMobileAlt, FaCube, FaLightbulb, FaUsers, FaSitemap, FaPenNib, FaRocket, FaCogs, FaChartLine, FaLifeRing } from "react-icons/fa";

import PatternedBackground from "./PatternedBackground";

function Banner() {
  // ... (keep your existing state and logic)
  const [typedCode, setTypedCode] = useState("");
  const [codeIndex, setCodeIndex] = useState(0);
  const codeContainerRef = useRef(null);
  const [feedback, setFeedback] = useState("");
  const [resume, setResume] = useState(null);
  const [resumeFeedback, setResumeFeedback] = useState("");
  const ratingsData = {
    averageRating: 4.8,
    totalReviews: 1200,
    reviews: [
      {
        name: "Rahul Sharma",
        rating: 5,
        comment: "PrepInsta helped me crack my dream job!",
      },
      {
        name: "Aditi Verma",
        rating: 4,
        comment: "Great platform for placement preparation!",
      },
    ],
  };
  const ratings = [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 60 },
    { stars: 3, percentage: 40 },
    { stars: 2, percentage: 20 },
    { stars: 1, percentage: 10 },
  ];
  const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      description: "Building scalable web apps using React, Next.js, Express.js, and MongoDB.",
      icon: <FaCode />,
    },
    {
      id: 2,
      title: "API Development & Integration",
      description: "Creating RESTful & GraphQL APIs to enhance data communication.",
      icon: <FaDatabase />,
    },
    {
      id: 3,
      title: "Cloud & Web services",
      description: "Deploying scalable applications using AWS, Docker, Kubernetes, and CI/CD pipelines.",
      icon: <FaCloud />,
    },
    {
    id: 4,
    title: "Define",
    description: "Strategy, Research & Insights, Stakeholder Workshops, Platform Strategy, IA & Content Planning.",
    icon: <FaLightbulb />,
  },
  {
    id: 5,
    title: "Visualize",
    description: "UX Design, User Research, Personas, Journey Mapping, Wireframing, and IA Validation.",
    icon: <FaUsers />,
  },
  {
    id: 6,
    title: "Create",
    description: "UI Design, Responsive Design, Digital Branding, Prototyping, and Design Systems.",
    icon: <FaPenNib />,
  },
  {
    id: 7,
    title: "Launch",
    description: "System Architecture, CMS, Product Development, APIs, and 3rd Party Integrations.",
    icon: <FaRocket />,
  },
  
  ];
  const [content, setContent] = useState({
    title: "Redux & Zustand",
    logo: "/logos/redux.svg",
    description: "State management with Redux and Zustand, two libraries for managing state in React applications.",
    code: `// Redux Example\n// Action\nconst increment = () => ({ type: 'INCREMENT' });\n\n// Reducer\nconst counter = (state = 0, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n    default:\n      return state;\n  }\n};\n\n// Store\nconst store = createStore(counter);\n\n// Zustand Example\n// Store\nconst useStore = create((set) => ({\n  count: 0,\n  increment: () => set((state) => ({ count: state.count + 1 })),\n}));\n\n// Usage\nconst Component = () => {\n  const { count, increment } = useStore();\n  return <button onClick={increment}>Count: {count}</button>;\n};`,
  });

  const handleCardClick = (technology) => {
    switch (technology) {
      case "React":
        setContent({
          title: "React",
          logo: "/logos/react.svg",
          description: "A JavaScript library for building user interfaces.",
          code: `// Installation\nnpm install react react-dom\n// Sample Component\nimport React from 'react';\nfunction App() {\n  return <h1>Hello</h1>;\n}\nexport default App;`,
          additionalInfo: "Visit the official documentation: https://reactjs.org",
        });
        break;

      case "Tailwind CSS":
        setContent({
          title: "Tailwind CSS",
          logo: "/logos/tailwindcss.svg",
          description: "A utility-first CSS framework for rapid UI development.",
          code: `// Installation\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init\n\n// Tailwind Configuration\nmodule.exports = {\n  content: ['./src/**/*.{js,jsx,ts,tsx}',],\n  theme: { extend: {}, },\n  plugins: [],\n};\n\n// Example Usage\n\n// HTML Snippet\n<div class="bg-blue-500 text-white font-bold py-2 px-4 rounded">\n  Hello, Tailwind CSS!\n</div>\n\n// React Snippet\nimport React from 'react';\n\nconst App = () => {\n  return (\n    <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded">\n      Hello, Tailwind CSS!\n    </div>\n  );\n};\n\nexport default App;`,
          additionalInfo: "Visit the official documentation: https://tailwindcss.com",
        });
        break;


      case "Node.js & Express.js":
        setContent({
          title: "Node.js",
          logo: "/logos/node.jsexpress.js.svg",
          description: "A runtime and framework for building REST APIs.",
          code: `// Installation\nnpm install express\n\n// Sample Express Server\nconst express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => res.send('Hello, Express!'));\n\napp.listen(3000, () => console.log('Server running on port 3000'));`,
          additionalInfo: "Visit the official documentation: https://expressjs.com",
        });
        break;

      case "MongoDB":
        setContent({
          title: "MongoDB",
          logo: "/logos/mongodb.svg",
          description: "A NoSQL database for flexible and scalable data storage.",
          code: `// Installation\nnpm install mongoose\n\n// Sample Connection\nconst mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });\n\nconst schema = new mongoose.Schema({ name: String });\nconst Model = mongoose.model('Model', schema);\n\nconst doc = new Model({ name: 'Test' });\ndoc.save();`,
          additionalInfo: "Visit the official documentation: https://www.mongodb.com",
        });
        break;

      case "MySQL":
        setContent({
          title: "MySQL",
          logo: "/logos/mysql.svg",
          description: "Learn how to set up MySQL, write queries, and design relational databases.",
          code: `// Installation\nsudo apt-get install mysql-server\n\n// Sample Query\nCREATE DATABASE mydb;\nUSE mydb;\n\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(255),\n  email VARCHAR(255)\n);\n\nINSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');`,
        });
        break;

      case "API Fetching":
        setContent({
          title: "API Fetching",
          logo: "/logos/apifetching.svg",
          description: "Learn how to fetch data from APIs and integrate it into your application.",
          code: `// Fetch API Example\nfetch('https://jsonplaceholder.typicode.com/posts')\n  .then((response) => response.json())\n  .then((data) => console.log(data))\n  .catch((error) => console.error('Error:', error));\n\n// Using Axios\nimport axios from 'axios';\n\naxios.get('https://jsonplaceholder.typicode.com/posts')\n  .then((response) => console.log(response.data))\n  .catch((error) => console.error('Error:', error));`,
        });
        break;

      case "Daisy UI":
        setContent({
          title: "Daisy UI",
          logo: "/logos/daisyui.svg",
          description: "A Tailwind CSS plugin that provides pre-built components for faster development.",
          code: `// Installation\nnpm install daisyui\n\n// Tailwind Configuration\nmodule.exports = {\n  content: ['./src/**/*.{js,jsx,ts,tsx}',],\n  theme: { extend: {}, },\n  plugins: [require('daisyui')],\n};\n\n// Example Button\n<button className=\"btn btn-primary\">Daisy UI Button</button>`,
        });
        break;

      case "Next.js":
        setContent({
          title: "Next.js",
          logo: "/logos/nextjs.svg",
          description: "A Tailwind CSS plugin that provides pre-built components for faster development.",
          code: `// Installation\nnpm install daisyui\n\n// Tailwind Configuration\nmodule.exports = {\n  content: ['./src/**/*.{js,jsx,ts,tsx}',],\n  theme: { extend: {}, },\n  plugins: [require('daisyui')],\n};\n\n// Example Button\n<button className=\"btn btn-primary\">Daisy UI Button</button>`,
        });
        break;
      case "Redux & Zustand":
        setContent({
          title: "Redux & Zustand",
          logo: "/logos/redux.svg",
          description: "A Tailwind CSS plugin that provides pre-built components for faster development.",
          code: `// Installation\nnpm install daisyui\n\n// Tailwind Configuration\nmodule.exports = {\n  content: ['./src/**/*.{js,jsx,ts,tsx}',],\n  theme: { extend: {}, },\n  plugins: [require('daisyui')],\n};\n\n// Example Button\n<button className=\"btn btn-primary\">Daisy UI Button</button>`,
        });
        break;

    }
    setTypedCode("");
    setCodeIndex(0);
  }; useEffect(() => {
    if (content && codeIndex < content.code.length) {
      const timer = setTimeout(() => {
        setTypedCode((prev) => prev + content.code[codeIndex]);
        setCodeIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [content, codeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (codeContainerRef.current) {
        const { top } = codeContainerRef.current.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && codeIndex === content?.code.length) {
          console.log("Typing complete, reveal next section.");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content, codeIndex]);


  {/*const handleBookmark = () => setBookmarked([...bookmarked, content]);
  const handleFeedbackSubmit = () => {
    alert(`Feedback submitted: ${feedback}`);
    setFeedback("");
  };
*/}

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setResume(file);
      analyzeResume(file);
    } else {
      setResumeFeedback("Please upload a valid PDF file.");
    }
  };

  const analyzeResume = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      // Basic analysis - Simulate feedback
      const feedback = text.includes("JavaScript")
        ? "Great! Your resume highlights JavaScript skills."
        : "Consider adding JavaScript to your resume to enhance its appeal.";
      setResumeFeedback(feedback);
    };
    reader.readAsText(file);
  };

  const handleDownload = () => {
    if (content) {
      const element = document.createElement("a");
      const file = new Blob([content.code], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `${content.title}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };
  const descriptions = {
    "React": "A JavaScript library for building UI components.",
    "Tailwind CSS": "A utility-first CSS framework for styling.",
    "Node.js & Express.js": "Server-side JavaScript runtime and web framework.",
    "MongoDB": "NoSQL database for flexible, scalable storage.",
    "MySQL": "A popular open-source relational database.",
    "API Fetching": "Fetching and handling data from APIs.",
    "Daisy UI": "Tailwind CSS components for UI design.",
    "Next.js": "A React framework for server-rendered apps.",
    "Redux & Zustand": "State management tools for React.",

  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-400 md:px-20 px-4 flex flex-col md:flex-row font-sans">
        {/* Left Section */}
        <div className="order-2 md:order-1 w-full md:w-2/3 mt-12 text-white">
        <PatternedBackground>
          <div className="shadow-md rounded-lg p-6 mb-6 container mx-auto">
            <h1 className="text-4xl font-sans text-black sm:text-5xl relative">
              Get started with
              <span className="relative inline-block ml-2">
                <span className="relative z-10 text-[#AF9A57] text-4xl sm:text-5xl">Technomania Labs</span>
              </span>
            </h1>
            <p className="my-3 text-slate-400 dark:text-slate-600">"Your Gateway to Full-Stack Brilliance."</p>
            <div className="flex flex-row items-center space-x-2 font-sans flex-wrap">
              <img width="20" height="20" src="https://img.icons8.com/emoji/20/check-mark-emoji.png" alt="check-mark-emoji" />
              <a href="/" className="text-black text-sm">Aptitude</a>
              <span className="h-6 text-slate-400 dark:text-black">|</span>
              <img width="20" height="20" src="https://img.icons8.com/emoji/20/check-mark-emoji.png" alt="check-mark-emoji" />
              <a href="/Documentation" className="text-black text-sm">Coding</a>
              <span className="h-6 text-slate-400 dark:text-black">|</span>
              <img width="20" height="20" src="https://img.icons8.com/emoji/20/check-mark-emoji.png" alt="check-mark-emoji" />
              <a href="#" className="text-black text-sm">Interview Prep</a>
              <span className="h-6 text-slate-400 dark:text-black">|</span>
              <img width="20" height="20" src="https://img.icons8.com/emoji/20/check-mark-emoji.png" alt="check-mark-emoji" />
              <a href="#" className="text-black text-sm sm:text-left">New Advancement Skills</a>
            </div>
          </div>
          </PatternedBackground>
          <motion.div
            initial={{ x: '100vw', opacity: 0, scaleX: 0.8 }}
            animate={{ x: 0, opacity: 1, scaleX: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 25, ease: "easeOut", duration: 2 }}
            className="relative flex sm:flex-col items-center sm:h-auto justify-center shadow-md md:mt-10 rounded-lg bg-gray-100 px-6 mb-5"
          >
            {/* Grid Background */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                backgroundImage:
                  "linear-gradient(transparent 95%,rgba(16, 185, 129, 0.2) 5%), linear-gradient(90deg, transparent 95%, rgba(16, 185, 129, 0.2) 5%)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            {/* Floating Placement Notification */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-16 left-8 bg-white shadow-lg rounded-lg px-6 py-3 flex items-center space-x-3 border w-64 border-2 border-[#AF9A57]"
            >
              <img src="/logos/hero.webp" alt="User" className="w-10 h-10 rounded-full" />
              <div className="text-sm">
                <p className="text-black font-sans font-semibold text-xs">Got Placed</p>
                <p className="font-semibold text-black font-sans">Mayur Jain</p>
                <p className="text-gray-500 text-xs font-sans">
                  Cognizant{" "}
                  <span className="ml-10 font-sans rounded-full bg-black text-green-500 py-1 px-1 flex-row items-center justify-center">
                    10 LPA
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Hero Content with Green Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="relative p-6 rounded-2xl flex justify-center items-center"
            >
              <img
                src="/logos/hero.webp"
                alt="Student"
                className="w-full max-w-xs h-auto rounded-2xl object-cover shadow-lg"
              />
            </motion.div>

            {/* Additional Student Placement Notification */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="absolute bottom-10 right-8 bg-white shadow-lg rounded-lg px-6 py-3 flex flex-col items-start space-y-2 border-2 border-[#AF9A57] w-64 h-auto"
            >
              <div className="flex items-center gap-2">
              <svg
                className="relative h-6 w-6 md:h-8 md:w-8"
                width="32"
                height="32"
                viewBox="0 0 415 415"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
                <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle>
                <circle cx="207.5" cy="135" r="125" fill="white"></circle>
                <circle cx="207.5" cy="135" r="56" fill="#007BFF"></circle>
                <line x1="182.5" y1="115" x2="232.5" y2="115" stroke="white" strokeWidth="10" />
                <line x1="207.5" y1="115" x2="207.5" y2="165" stroke="white" strokeWidth="10" />
                
              </svg>
              
                <div>
                  <div className="rating-container space-y-1">
                    {ratings.map((rating, index) => (
                      <div key={index} className="rating-col flex flex-col items-start">
                        <span className="text-black text-xs">
                          {rating.stars} ★
                        </span>
                        <motion.div
                          className="rating-bar-wrapper w-full bg-gray-200 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${rating.percentage}%` }}
                          transition={{ duration: 1 }}
                          style={{ height: '6px' }}
                        >
                          <motion.div
                            className="rating-bar bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                            style={{ height: '100%' }}
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Section: Services */}
        <div className="order-2 md:order-2 w-full md:w-1/3 p-4 mt-12 md:mt-6 md:px-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="bg-white text-black font-sans p-6"
          >
            <h2 className="text-2xl font-bold text-black font-jakarta mb-4">
              Our Service Journey
            </h2>
            <div className="relative border-l-2 border-[#AF9A57] ml-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-6 pl-4"
                >
                  <div className="absolute -left-5 w-10 h-10 flex items-center justify-center bg-[#AF9A57] rounded-full text-white shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-md ml-2 font-sans text-black font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm ml-2 font-sans text-black font-sans">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies and Code Snippet Section */}s
      <div className="flex flex-wrap md:flex-nowrap items-start gap-6 p-6 bg-white">
        {/* Left Section: Technologies */}
        <div className="w-full md:w-2/3 lg:w-2/3 flex flex-wrap gap-6 md:ml-4">
          {["React", "Tailwind CSS", "Node.js & Express.js", "MongoDB", "MySQL", "API Fetching", "Daisy UI", "Next.js", "Redux & Zustand"].map((tech) => (
            <button
              key={tech}
              onClick={() => handleCardClick(tech)}
              className="border border-gray-300 rounded-lg p-5 bg-gray-50 sm:p-8  shadow-lg text-white hover:scale-105 duration-200 card mb-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <img
                src={`/logos/${tech === 'Next.js' ? 'nextjs' : tech === 'Redux & Zustand' ? 'redux' : tech.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '')}.svg`}
                alt={`${tech} logo`}
                className="h-14 w-14 mx-auto mb-4"
              />
              <h3 className="text-black mb-2">
                <span className="text-black font-medium">{tech}</span>
              </h3>
              <p className="text-sm text-slate-900">{descriptions[tech]}</p>
            </button>
          ))}
        </div>

         
        <div className="w-full md:w-2/3 lg:w-1/3 p-4 md:px-6">
          {content && (
            <div
              ref={codeContainerRef}
              className="border border-gray-300 rounded-lg p-5 bg-gray-50 sm:p-8  shadow-lg  mb-0"
            >
              <img
                src={content.logo}
                alt={`${content.title} logo`}
                className="h-16 w-16 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-black mb-2">
                {content.title}
              </h2>
              <p className="text-slate-800">{content.description}</p>

              <div className="relative mt-4">
                
                <div className="rounded-lg bg-slate-800 border border-slate-700 shadow-md overflow-hidden">
                  
                  <div className="flex items-center space-x-2 bg-slate-700 px-4 py-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>

                  <pre
                    ref={codeContainerRef}
                    className="p-4 text-sm font-mono leading-relaxed overflow-x-auto text-slate-300 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    <code className="whitespace-pre">
                      {typedCode.split("\n").map((line, index) => (
                        <div key={index} className="flex">
                          
                          <span className="text-slate-500 pr-4 select-none">
                            {index + 1}
                          </span>
                          
                          <span className="text-sky-400">{line}</span>
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}

export default Banner;