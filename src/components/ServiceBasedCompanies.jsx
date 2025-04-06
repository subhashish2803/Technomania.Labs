import React from "react";

const serviceCompaniesLeft = [
  "Accenture",
  "ADP",
  "Applicate AI",
  "Atlassian",
  "Axeno Consultancy",
  "Brillio",
];

const serviceCompaniesRight = [
  "Capgemini",
  "Change CX",
  "Cognizant GenC",
  "Cognizant GenC Pro",
  "Cognizant GenC Next",
  "Colt Tec",
  "Consult Add",
];

const ServiceBasedCompanies = () => {
  return (
    <div
      className="bg-[url('/companylogo/sbc.jpg')] bg-cover bg-center bg-no-repeat py-12 px-4 contrast-100 brightness-100"
    >
      <h2 className="text-center text-2xl md:text-3xl  text-black mb-10">
        Service Based Companies
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        {/* Left Company List */}
        <ul className="space-y-4 text-sm font-medium text-gray-800">
          {serviceCompaniesLeft.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white font-medium px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>

        
        {/* Center Illustration */}
        <div className="flex justify-center">
          <img
            src="/companylogo/std.png" // replace with your actual image
            alt="Student working"
            className="max-h-60 w-auto"
          />
        </div>
        {/* Right Company List */}
        <ul className="space-y-4 text-sm font-medium text-black">
          {serviceCompaniesRight.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>
        {/* Right Company List */}
        <ul className="space-y-4 text-sm font-medium text-black">
          {serviceCompaniesRight.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>
        {/* Center Illustration */}
        <div className="flex justify-center">
          <img
            src="/companylogo/678.png" // replace with your actual image
            alt="Student working"
            className="max-h-60 w-auto"
          />
        </div>
        {/* Right Company List */}
        <ul className="space-y-4 text-sm font-medium text-black">
          {serviceCompaniesRight.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>
        {/* Left Company List */}
        <ul className="space-y-4 text-sm font-medium text-gray-800">
          {serviceCompaniesLeft.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white font-medium px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>

        
        {/* Center Illustration */}
        <div className="flex justify-center">
          <img
            src="/companylogo/std.png" // replace with your actual image
            alt="Student working"
            className="max-h-60 w-auto"
          />
        </div>
        {/* Right Company List */}
        <ul className="space-y-4 text-sm font-medium text-black">
          {serviceCompaniesRight.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-center text-2xl md:text-3xl  text-black mb-10">
        Product Based Companies
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        {/* Left Company List */}
        <ul className="space-y-4 text-sm font-medium text-gray-800">
          {serviceCompaniesLeft.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white font-medium px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>

        
        {/* Center Illustration */}
        <div className="flex justify-center">
          <img
            src="/companylogo/std.png" // replace with your actual image
            alt="Student working"
            className="max-h-60 w-auto"
          />
        </div>
        {/* Right Company List */}
        <ul className="space-y-4 text-sm font-medium text-black">
          {serviceCompaniesRight.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>
        {/* Right Company List */}
        <ul className="space-y-4 text-sm font-medium text-black">
          {serviceCompaniesRight.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>
        {/* Center Illustration */}
        <div className="flex justify-center">
          <img
            src="/companylogo/678.png" // replace with your actual image
            alt="Student working"
            className="max-h-60 w-auto"
          />
        </div>
        {/* Right Company List */}
        <ul className="space-y-4 text-sm font-medium text-black">
          {serviceCompaniesRight.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>
        {/* Left Company List */}
        <ul className="space-y-4 text-sm font-medium text-gray-800">
          {serviceCompaniesLeft.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white font-medium px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>

        
        {/* Center Illustration */}
        <div className="flex justify-center">
          <img
            src="/companylogo/std.png" // replace with your actual image
            alt="Student working"
            className="max-h-60 w-auto"
          />
        </div>
        {/* Right Company List */}
        <ul className="space-y-4 text-sm font-medium text-black">
          {serviceCompaniesRight.map((company, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>• {company}:-</span>
              <button className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-green-600">
                Placement Papers
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceBasedCompanies;
