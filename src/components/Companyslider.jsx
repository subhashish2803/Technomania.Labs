import { useEffect, useState, useRef } from "react";

const CompanySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0); // To store the starting X position for the swipe
  const companies = [
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 2", logo: "public/companylogo/accenture.png" },
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 3", logo: "public/companylogo/deloitte.png" },
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 2", logo: "public/companylogo/accenture.png" },
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 3", logo: "public/companylogo/deloitte.png" },
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 2", logo: "public/companylogo/accenture.png" },
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 2", logo: "public/companylogo/accenture.png" },
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 3", logo: "public/companylogo/deloitte.png" },
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 2", logo: "public/companylogo/accenture.png" },
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 3", logo: "public/companylogo/deloitte.png" },
    { name: "Company 1", logo: "/public/companylogo/google.webp" },
    { name: "Company 2", logo: "public/companylogo/accenture.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX; // Get the initial touch point
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX; // Get the final touch point
    const diff = startX.current - endX;

    // If the swipe is more than 50px in either direction, change the slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length); // Swipe Left
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length); // Swipe Right
      }
    }
  };

  return (
    <div
      className="flex space-x-4 bg-green-500 md:justify-center sm:justify-start"
      onTouchStart={handleTouchStart} // Start of touch event
      onTouchEnd={handleTouchEnd} // End of touch event
    >
      {companies.map((company, index) => (
        <div
          key={company.name}
          className={`transition-all duration-1000 ease-in-out ${
            currentIndex === index ? "opacity-100 scale-110" : "opacity-80 scale-100"
          } lg:w-28 lg:h-14`}
        >
          <img
            src={company.logo}
            alt={company.name}
            className="w-full h-full object-contain rounded "
          />
        </div>
      ))}
    </div>
  );
};

export default CompanySlider;
