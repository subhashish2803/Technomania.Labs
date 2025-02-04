import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Importing styles for the carousel

const ExpertiseCarousel = () => {
  const expertiseItems = [
    {
      title: "IoT",
      description: "Our expertise in creating exponential value by adding intelligence to physical objects.",
    },
    {
      title: "Website Development",
      description: "We create high-quality, interactive, better user experience websites considering your requirements. We practice and develop 100% responsive websites. To enhance your user experience, connect with us.",
    },
    {
      title: "Mobile App Development",
      description: "Mobile applications are playing vital roles in running your business. Our expert developers deliver successful applications from years. We are working on Android, iOS, and hybrid App development.",
    },
    {
      title: "Metaverse",
      description: "We enable clients to build interconnected virtual worlds, revolutionizing immersive experiences, digital ownership, and social interactions.",
    },
    {
      title: "UI/UX",
      description: "Stay one step forward amongst the competitors with the latest trendy design. Our expert designing team provides research-based design for your application or website.",
    },
    {
      title: "Blockchain",
      description: "Our team specializes in developing Blockchain solutions such as Smart Contracts, Crypto wallets, Mining software, ICO initialization, and more.",
    },
    
  ];

  const responsive = {
    superLarge: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    large: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    medium: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    small: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="our_expertise" className="expertise mx-auto p-6 bg-white">
      <h2 className="text-3xl lg:text-4xl text-black font-sans text-center text-md font-bold mb-6 md:mb-14 lg:mb-20">
        Our Expertise
      </h2>

      <Carousel
        responsive={responsive}
        arrows={true}
        infinite={true}
        className="react-multi-carousel-list carousel-container expertise"
        dir="ltr"
      >
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="bg-black dark:bg-base-200 shadow-lg rounded-lg p-6 md:p-10 flex flex-col justify-between items-center mb-6 mx-4"
            style={{ minHeight: '350px' }}
          >
            <div className="text-white dark:text-black text-center">
              <h5 className="text-3xl font-sans mb-4">{item.title}</h5>
              <p className="text-sm font-sans sm:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ExpertiseCarousel;
