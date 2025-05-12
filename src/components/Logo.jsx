import React from 'react';

const Logo = () => {
  return (
    <div>
      <svg className="h-10 w-10" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
        <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
        <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle>
        <circle cx="207.5" cy="135" r="125" fill="white"></circle>
        <circle cx="207.5" cy="135" r="56" fill="#007BFF"></circle>
        <line x1="182.5" y1="115" x2="232.5" y2="115" stroke="white" strokeWidth="10" />
        <line x1="207.5" y1="115" x2="207.5" y2="165" stroke="white" strokeWidth="10" />
      </svg>
    </div>
  );
};

export default Logo;
