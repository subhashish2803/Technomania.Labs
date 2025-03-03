import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Importing styles for the carousel
import PatternedBackground from "./PatternedBackground";

const ExpertiseCarousel = () => {
  const expertiseItems = [
    {
      title: "Full-Stack Development",
      description:
        "Master the MERN and MEVN stacks with hands-on experience in React, Node.js, Express, and MongoDB. Build scalable and modern web applications.",
    },
    {
      title: "Frontend Frameworks",
      description:
        "Explore React, Next.js, and Vue.js to create interactive, high-performance user interfaces with best practices in UI/UX.",
    },
    {
      title: "Backend Technologies",
      description:
        "Learn about Express.js, Node.js, Django, and NestJS to build robust, scalable, and high-performance backend services.",
    },
    {
      title: "Database Management",
      description:
        "Gain expertise in SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) databases, focusing on optimization and security.",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Integrate AI into web apps using TensorFlow.js and OpenAI APIs, enhancing automation, personalization, and smart recommendations.",
    },
    {
      title: "DevOps & Cloud Computing",
      description:
        "Understand CI/CD pipelines, Docker, Kubernetes, AWS, and Firebase to streamline deployment and scalability.",
    },
    {
      title: "API Development & Integration",
      description:
        "Design and implement RESTful & GraphQL APIs, ensuring efficient communication between frontend and backend systems.",
    },
    {
      title: "Web3 & Blockchain",
      description:
        "Dive into decentralized apps (dApps) with Solidity, Ethereum smart contracts, and NFT marketplace development.",
    },
    {
      title: "Testing & Debugging",
      description:
        "Master Jest, Cypress, and Selenium to ensure web applications are reliable, bug-free, and optimized for performance.",
    },
  ];

  const responsive = {
    superLarge: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    large: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    medium: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    small: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <PatternedBackground>
      <div id="our_expertise" className="expertise mx-auto p-6">
        <h2 className="text-3xl lg:text-4xl text-black font-sans text-center text-md font-bold mb-6 md:mb-14 lg:mb-20">
          Our Expertise
        </h2>

        <Carousel
          className="react-multi-carousel-list carousel-container expertise"
          dir="ltr"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={false}
          arrows={true}
        >
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="bg-black dark:bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-col justify-between items-center mb-6 mx-4"
              style={{ minHeight: "350px" }}
            >
              <div className="text-white dark:text-black text-center">
                <h5 className="text-3xl font-segoe mb-4">{item.title}</h5>
                <p className="text-sm font-sans sm:text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </PatternedBackground>
  );
};

export default ExpertiseCarousel;
