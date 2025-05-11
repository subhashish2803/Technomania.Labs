// src/components/ExpertiseSection.jsx

import React from "react";

const expertiseData = [
  {
    title: "Cloud Computing",
    subtitle: "Infrastructure",
    description: "Expert cloud solutions using AWS, Azure, and Google Cloud for scalable and reliable infrastructure.",
    features: [
      "Cloud Migration & Integration",
      "Serverless Architecture",
      "Cloud Security & Compliance",
      "DevOps Automation",
    ],
    image: "https://aasint.com/_next/image?url=%2Fassets%2Fexpertise%2Fcloud-banner.webp&w=828&q=75",
    icon: "https://aasint.com/_next/image?url=%2Fassets%2Fexpertise%2Fcloud.png&w=64&q=75",
    color: "#ffac72",
    layout: "left",
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Artificial Intelligence",
    description: "Advanced AI solutions for predictive analytics, computer vision, and natural language processing.",
    features: [
      "Deep Learning Models",
      "Computer Vision Systems",
      "NLP Solutions",
      "Predictive Analytics",
    ],
    image: "https://aasint.com/_next/image?url=%2Fassets%2Fexpertise%2Faiml.jpeg&w=828&q=75",
    icon: "https://aasint.com/_next/image?url=%2Fassets%2Fexpertise%2Fartificial-intelligence.png&w=64&q=75",
    color: "#42bc7e",
    layout: "right",
  },
  {
    title: "Cybersecurity",
    subtitle: "Security",
    description: "Comprehensive security solutions including penetration testing, security audits, and compliance.",
    features: [
      "Penetration Testing",
      "Security Audits",
      "Compliance Management",
      "Incident Response",
    ],
    image: "https://globalbanking.ac.uk/media/d4ibkep2/hero-image-4-1.webp?width=1500&height=711&format=webp",
    icon: "https://aasint.com/_next/image?url=%2Fassets%2Fexpertise%2Fcyber-security.png&w=64&q=75",
    color: "#7868e6",
    layout: "left",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="relative py-16  min-h-screen">
        <div className="absolute inset-0 z-0">
  <div className="sticky top-0 h-screen w-full">
    <img
      src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600"
      alt="Background"
      className="w-full h-full object-cover"
      style={{ opacity: 0.25 }}
    />
  </div>
</div>
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl md:text-5xl font-sans text-center text-black mb-16">Our Expertise</h1>

        <div className="space-y-16 pb-16">
          {expertiseData.map((item, index) => {
            const isRight = item.layout === "right";
            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-amber-50${
                  isRight ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`relative md:col-span-2 h-64 md:h-80 ${isRight ? "order-last" : ""}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-all duration-700 hover:scale-110 hover:rotate-2 rounded-l-xl"
                  />
                </div>

                <div
                  className={`p-6 md:p-8 flex flex-col justify-center md:col-span-3 ${
                    isRight ? "border-l-4" : "border-r-4"
                  }`}
                  style={{
                    borderColor: item.color,
                    backgroundColor: `${item.color}10`,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-opacity-10 rounded-lg bg-gray-50">
                      <img src={item.icon} alt={item.title} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-sans text-black">{item.title}</h3>
                      <p className="text-sm font-sans text-gray-600">{item.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 font-sans">{item.description}</p>
                  <ul className="space-y-2 mb-4">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center font-sans text-sm text-gray-700">
                        <span
                          className="w-1.5 h-1.5 rounded-full mr-2"
                          style={{ backgroundColor: item.color }}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center w-full py-10">
          <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200">
            Related Expertise
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
