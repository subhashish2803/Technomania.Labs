import React, { useState, useEffect, useRef } from "react";
import { Star, User } from "lucide-react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaRobot, FaMobileAlt, FaCube } from "react-icons/fa";

function Banner() {
  // Initialize content as null
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
      title: "Cloud & DevOps",
      description: "Deploying scalable applications using AWS, Docker, Kubernetes, and CI/CD pipelines.",
      icon: <FaCloud />,
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description: "Integrating AI models into applications using OpenAI, TensorFlow, and NLP.",
      icon: <FaRobot />,
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Developing cross-platform mobile apps using React Native and Flutter.",
      icon: <FaMobileAlt />,
    },
    {
      id: 6,
      title: "Web3 & Blockchain",
      description: "Building decentralized apps (dApps) and smart contracts with Solidity and Ethereum.",
      icon: <FaCube />,
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
      <body className="min-h-screen dark:bg-white  text-gray-400 md:px-20 px-4 flex flex-col md:flex-row font-sans">
        {/* Left Section */}
        <div className="order-2 md:order-1 w-full md:w-2/3 mt-12 text-white ">
          <div className="shadow-md rounded-lg p-6 mb-6 container mx-auto ">
            <h1 className="text-4xl text-white dark:text-black sm:text-5xl relative">
              Get started with
              <span className="relative inline-block ml-2">
                <span className="relative z-10 text-green-600 text-4xl sm:text-5xl ">Technomania Labs</span>

              </span>
            </h1>
            <p className=" my-3 text-slate-400 dark:text-slate-600">"Your Gateway to Full-Stack Brilliance."</p>
            <div className="flex flex-row items-center space-x-2 font-sans flex-wrap ">
              <img width="20" height="20" src="https://img.icons8.com/emoji/20/check-mark-emoji.png" alt="check-mark-emoji" />
              <a
                href="/"
                className="text-white dark:text-black  text-sm"
              >
                Aptitude
              </a>
              <span className="h-6 text-slate-400 dark:text-black">|</span>
              <img width="20" height="20" src="https://img.icons8.com/emoji/20/check-mark-emoji.png" alt="check-mark-emoji" />
              <a
                href="/Documentation"
                className="text-white dark:text-black  text-sm"
              >
                Coding
              </a>
              <span className="h-6 text-slate-400 dark:text-black">|</span>
              <img width="20" height="20" src="https://img.icons8.com/emoji/20/check-mark-emoji.png" alt="check-mark-emoji" />
              <a
                href="#"
                className="text-white dark:text-black  text-sm"
              >
                Interview Prep
              </a>
              <span className="h-6 text-slate-400 dark:text-black">|</span>
              <img width="20" height="20" src="https://img.icons8.com/emoji/20/check-mark-emoji.png" alt="check-mark-emoji" />
              <a
                href="#"
                className="text-white dark:text-black text-sm sm:text-left"
              >
                New Advancement Skills
              </a>
            </div>
          </div>

          <motion.div
            initial={{ x: '100vw', opacity: 0, scaleX: 0.8 }}  // Slide in from right and start squeezed
            animate={{ x: 0, opacity: 1, scaleX: 1 }}          // Slide to original position and expand to full width
            transition={{
              type: 'spring',
              stiffness: 80,               // Controls the springiness of the slide-in
              damping: 25,                 // Controls the spring's resistance as it settles
              ease: "easeOut",             // Smooth, ease-out effect for final position
              duration: 2                 // Duration for the entire transition
            }}
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
              className="absolute top-16 left-8 bg-white shadow-lg rounded-lg px-6 py-3 flex items-center space-x-3 border w-64 border-2 border-green-600"
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
              className="absolute bottom-10 right-8 bg-white shadow-lg rounded-lg px-6 py-3 flex flex-col items-start space-y-2 border-2 border-green-600 w-64 h-auto"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/logos/mylogo.jpg"
                  alt="Technomania Logo"
                  className="w-8 h-8 rounded-full"
                />
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
        <div className="order-2 md:order-2 w-full md:w-1/3 p-4 mt-12 md:mt-6 md:px-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="bg-slate-900 dark:bg-white text-black font-sans p-6 "
          >
            <h2 className="text-2xl font-bold text-white dark:text-black font-sans mb-4">
              Our Service Journey
            </h2>
            <div className="relative border-l-2 border-green-500 ml-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-6 pl-4"
                >
                  <div className="absolute -left-5 w-10 h-10 flex items-center justify-center bg-green-600 rounded-full text-white shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-md text-white font-sans dark:text-black font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white font-sans dark:text-black font-sans">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </body >
      <div className="flex flex-wrap md:flex-nowrap items-start gap-6 p-6 dark:bg-white ">
        {/* Left Section: Technologies */}
        <div className="w-full md:w-2/3 lg:w-2/3 flex flex-wrap gap-6 md:ml-4">
          {["React", "Tailwind CSS", "Node.js & Express.js", "MongoDB", "MySQL", "API Fetching", "Daisy UI", "Next.js", "Redux & Zustand"].map((tech) => (
            <button
              key={tech}
              onClick={() => handleCardClick(tech)}
              className="block bg-blue-55 shadow-md rounded-xl p-6 text-white hover:scale-105 duration-200 card bg-gray shadow-xl rounded-lg p-4 relative mb-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
              style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderRadius: '12px',
                borderImage: 'linear-gradient(45deg, #10B981, #3B82F6, #9333EA) 1', // Green to Blue to Purple gradient
              }}
            >
              <img
                src={`/logos/${tech === 'Next.js' ? 'nextjs' : tech === 'Redux & Zustand' ? 'redux' : tech.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '')}.svg`}
                alt={`${tech} logo`}
                className="h-14 w-14 mx-auto mb-4"
              />
              <h3 className="text-white mb-2">
                <span className="dark:text-black text-white text-transparent bg-clip-text font-bold">
                  {tech}
                </span>
              </h3>
              <p className="text-sm transition-colors duration-500 text-slate-400 dark:text-slate-600">{descriptions[tech]}</p>
            </button>
          ))}
        </div>

        {/* Right Section: Code Snippet */}
        <div className="w-full md:w-2/3 lg:w-1/3 p-4 md:px-6">
          {content && (
            <div
              ref={codeContainerRef}
              className="text-white container mx-auto shadow-md rounded-lg p-6 mb-0 "
            >
              <img
                src={content.logo}
                alt={`${content.title} logo`}
                className="h-20 w-20 mx-auto mb-4 animate-spin-slow"
              />
              <h2 className="text-white text-2xl mb-2 text-white dark:text-black">
                {content.title}
              </h2>
              <p className="transition-colors duration-500 text-slate-400 dark:text-slate-600">{content.description}</p>
              <div className="relative">
                {/* Code Snippet */}
                <pre
                  ref={codeContainerRef}
                  className=" p-4 rounded-lg  overflow-x-auto mt-4 border border-gray-700 dark:bg-gray-900 text-white"
                  style={{ maxHeight: '300px', overflowY: 'auto' }} // Add max height and scroll for code only
                >
                  <code className="whitespace-pre-wrap text-sm leading-relaxed">
                    {typedCode
                      .split("\n")
                      .map((line, index) => (
                        <div key={index} className="flex items-start">
                          {/* Line Numbers */}
                          <span className="text-gray-500 pr-4 select-none">
                            {index + 1}
                          </span>
                          {/* Code Line */}
                          <span className="text-sky-300">{line}</span>
                        </div>
                      ))}
                  </code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Banner;
