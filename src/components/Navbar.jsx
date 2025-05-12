import React, { useState, useEffect } from "react";

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
    document.documentElement.classList.contains("dark")
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleProduct = () => setProductOpen(prev => !prev);
  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
    document.documentElement.classList.toggle("dark", !isDarkTheme);
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-[#AF9A57] shadow ${isSticky ? "shadow-md" : ""} transition duration-300`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <svg className="h-10 w-10" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
            <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
            <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle>
            <circle cx="207.5" cy="135" r="125" fill="white"></circle>
            <circle cx="207.5" cy="135" r="56" fill="#007BFF"></circle>
            <line x1="182.5" y1="115" x2="232.5" y2="115" stroke="white" strokeWidth="10" />
            <line x1="207.5" y1="115" x2="207.5" y2="165" stroke="white" strokeWidth="10" />
          </svg>
          <div className="flex flex-col text-sm">
            <span className="font-bold text-black">TECHNOMANIA LABS</span>
            <span className="text-[10px] text-slate-700 font-sans">Build Beyond Limits</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 items-center font-medium">
          <a href="/" className="hover:bg-black hover:text-white px-3 py-1 rounded">Home</a>
          <a href="/" className="hover:bg-black hover:text-white px-3 py-1 rounded">About Us</a>

          {/* Products */}
          <div className="relative group">
            <button
              onClick={toggleProduct}
              className="hover:text-blue-600 font-semibold"
            >
              Products
            </button>
            {productOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-md z-20">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">VISTOFY</a>
                </li>
              </ul>
            )}
          </div>

          <a href="/All Companies" className="hover:bg-black hover:text-white px-3 py-1 rounded">All Companies</a>
          <a href="https://github.com/TechnoManiaLabs" target="_blank" rel="noreferrer" className="hover:bg-black hover:text-white px-3 py-1 rounded">GitHub</a>
          <a href="#" className="hover:bg-black hover:text-white px-3 py-1 rounded">Career</a>
          <a href="/contact" className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-sky-600">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`${menuOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all duration-300 md:hidden bg-[#AF9A57] px-4 pb-4`}>
        <a href="/" className="block py-2 font-medium text-black hover:bg-black hover:text-white rounded px-3">Home</a>
        <a href="/" className="block py-2 font-medium text-black hover:bg-black hover:text-white rounded px-3">About Us</a>

        {/* Mobile Product Dropdown */}
        <div className="relative">
          <button onClick={toggleProduct} className="w-full text-left py-2 font-medium text-black hover:text-blue-600 px-3">Products</button>
          {productOpen && (
            <ul className="ml-3 mt-1 bg-white rounded-md shadow-sm">
              <li>
                <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">VISTOFY</a>
              </li>
            </ul>
          )}
        </div>

        <a href="/All Companies" className="block py-2 font-medium text-black hover:bg-black hover:text-white rounded px-3">All Companies</a>
        <a href="https://github.com/TechnoManiaLabs" className="block py-2 font-medium text-black hover:bg-black hover:text-white rounded px-3">GitHub</a>
        <a href="#" className="block py-2 font-medium text-black hover:bg-black hover:text-white rounded px-3">Career</a>
        <a href="/contact" className="block w-full text-center mt-2 bg-black text-white px-4 py-2 rounded hover:bg-sky-600">Contact</a>
      </div>
    </header>
  );
}

export default Navbar;
