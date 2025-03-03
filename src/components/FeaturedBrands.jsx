import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedBrands = () => {
  const logos = [
    "/companylogo/accenture.png",
    "/companylogo/google.gif",
    "/companylogo/deloitte.png",
    "/companylogo/accenture.png",
    "/companylogo/google.gif",
    "/companylogo/deloitte.png",
    "/companylogo/accenture.png",
    "/companylogo/google.gif",
    "/companylogo/deloitte.png",
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="py-10 bg-indigo-300">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Featured In & Backed By
      </h2>
      <div className="max-w-6xl mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={false}
          arrows={false}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt="Partner Logo"
                className="h-16 object-contain mx-auto rounded-xl"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedBrands;
