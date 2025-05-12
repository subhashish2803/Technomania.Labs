import React, { useState, useEffect } from "react";

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
    document.documentElement.classList.contains("dark")
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkTheme);
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  const releaseDate = new Date("2025-03-01");
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const updateDaysLeft = () => {
      const today = new Date();
      const timeDiff = releaseDate - today;
      setDaysLeft(Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24))));
    };
    updateDaysLeft();
    const interval = setInterval(updateDaysLeft, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full bg-[#AF9A57] shadow ${isSticky ? "shadow-md" : ""} transition duration-300`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <svg className="h-10 w-10" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
            <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5" />
            <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3" />
            <circle cx="207.5" cy="135" r="125" fill="white" />
            <circle cx="207.5" cy="135" r="56" fill="#007BFF" />
            <line x1="182.5" y1="115" x2="232.5" y2="115" stroke="white" strokeWidth="10" />
            <line x1="207.5" y1="115" x2="207.5" y2="165" stroke="white" strokeWidth="10" />
          </svg>
          <div className="flex flex-col items-center text-center ml-2">
            <span className="text-lg font-bold text-black tracking-wide">TECHNOMANIA LABS</span>
            <span className="text-[10px] text-slate-700 font-sans">Build Beyond Limits</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-md font-semibold tracking-wide">
          <a href="/" className="text-black hover:text-white hover:bg-black px-3 py-1 rounded transition">Home</a>
          <a href="/" className="text-black hover:text-white hover:bg-black px-3 py-1 rounded transition">About Us</a>
          
          <div className="relative group">
            <span className="text-black font-semibold cursor-pointer hover:text-blue-600">Products</span>
            <ul className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <li><a className="block px-4 py-2 hover:bg-gray-100">VISTOFY</a></li>
            </ul>
          </div>

          <a href="/All Companies" className="text-black hover:text-white hover:bg-black px-3 py-1 rounded transition">All Companies</a>
          <a href="https://github.com/TechnoManiaLabs" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white hover:bg-black px-3 py-1 rounded transition">GitHub</a>
          <a href="#" className="text-black hover:text-white hover:bg-black px-3 py-1 rounded transition">Career</a>
          <a href="/contact" className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-sky-600">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none text-black" aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} md:hidden overflow-hidden transition-all duration-300 bg-[#AF9A57] px-4 pb-4`}>
        <a href="/" className="block py-2 text-black font-medium hover:bg-black hover:text-white rounded px-3">Home</a>
        <a href="/" className="block py-2 text-black font-medium hover:bg-black hover:text-white rounded px-3">About Us</a>

        {/* Mobile Products Dropdown */}
        <div className="py-2">
          <button
            onClick={toggleProductDropdown}
            className="w-full text-left py-2 text-black font-medium hover:bg-black hover:text-white rounded px-3 flex justify-between items-center"
          >
            Products
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={productDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </button>
          {productDropdownOpen && (
            <ul className="pl-4">
              <li><a className="block px-4 py-2 text-black hover:bg-gray-100 rounded">VISTOFY</a></li>
            </ul>
          )}
        </div>

        <a href="/All Companies" className="block py-2 text-black font-medium hover:bg-black hover:text-white rounded px-3">All Companies</a>
        <a href="https://github.com/TechnoManiaLabs" className="block py-2 text-black font-medium hover:bg-black hover:text-white rounded px-3">GitHub</a>
        <a href="#" className="block py-2 text-black font-medium hover:bg-black hover:text-white rounded px-3">Career</a>
        <a href="/contact" className="block w-full text-center mt-2 bg-black text-white px-4 py-2 rounded hover:bg-sky-600 transition">Contact</a>
      </div>
    </header>
  );
}

export default Navbar;
