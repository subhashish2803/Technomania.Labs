import React from 'react';
import { Link } from 'react-router-dom'; // Optional if using React Router
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <div id="header" className="section header-section transparent-header">
      <div className="container">
        <div className="header-wrap flex justify-between items-center">

          {/* Logo */}
          <div className="header-logo">
            <Link to="/"><img src="/assets/images/logo.png" alt="skillanto tech" /></Link>
          </div>

          {/* Desktop Menu */}
          <div className="header-menu hidden lg:block">
            <ul className="main-menu flex gap-6">
              <li className="active-menu"><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>

              {/* Services Dropdown */}
              <li className="relative group">
                <Link to="/services">Services</Link>
                <ul className="sub-menu absolute hidden group-hover:block bg-white shadow-md mt-2">
                  <li><Link to="/mobile-app">Mobile App Development</Link></li>
                  <li><Link to="/cloud-service">Cloud Services</Link></li>
                  <li><Link to="/custom-software">Custom Software Development</Link></li>
                  <li><Link to="/data-service">Data Services Management</Link></li>
                  <li><Link to="/web-development">Website Development</Link></li>
                  <li><Link to="/it-support">IT Support & Maintenance</Link></li>
                  <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                </ul>
              </li>

              {/* Products Dropdown */}
              <li className="relative group">
                <Link to="/products">Products</Link>
                <ul className="sub-menu absolute hidden group-hover:block bg-white shadow-md mt-2">
                  <li><Link to="/roboslither">Roboslither</Link></li>
                  <li><Link to="/riims">RIIMS</Link></li>
                  <li><Link to="/digipainter">Digipainter</Link></li>
                  <li><Link to="/itjobswala">ITJobswala</Link></li>
                  <li><Link to="/skillantika">Skillantika</Link></li>
                  <li><Link to="/protecto">Protecto</Link></li>
                </ul>
              </li>

              <li><Link to="/trainings">Trainings</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>
          </div>

          {/* Header Right */}
          <div className="header-meta flex items-center gap-4">
            <div className="header-btn-2 hidden xl:block">
              <Link to="/contact" className="btn">Contact</Link>
            </div>

            {/* Mobile Toggle */}
            <div className="header-toggle lg:hidden">
              <button type="button">
                <FaBars size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
