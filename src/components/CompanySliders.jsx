import { useEffect, useRef } from "react";

const CompanySliders = () => {
  const scrollRef = useRef(null);

  const companies = [
    { name: "Google", logo: "/companylogo/google.webp" },
    { name: "Accenture", logo: "/companylogo/accenture.png" },
    { name: "Deloitte", logo: "/companylogo/deloitte.png" },
    { name: "TCS", logo: "/companylogo/tcs.png" },
    { name: "Amazon", logo: "/companylogo/amazon.png" },
    { name: "Wipro", logo: "/companylogo/wipro.png" },
    { name: "Infosys", logo: "/companylogo/infosys.png" },
    { name: "Capgemini", logo: "/companylogo/capgemini.png" },
  ];

  // Duplicate the array for seamless infinite scroll
  const companyList = [...companies, ...companies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollLogos = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollLogos, 20); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      
      className="bg-[url('/companylogo/sbc.jpg')] bg-cover bg-center bg-no-repeat py-12 px-4 "
    >
      
      
    <div className="overflow-hidden w-full bg-gray-50 py-6">
      <div
        className="flex gap-6 w-max animate-scroll-slow"
        ref={scrollRef}
      >
        {companyList.map((company, index) => (
          <div
            key={index}
            className="w-28 h-14 flex items-center justify-center bg-white shadow rounded-md p-2"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CompanySliders;
