import React, { useState, useEffect } from "react";

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      document.documentElement.classList.contains("dark")
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleThemeToggle = () => {
      const newTheme = !isDarkTheme;
      setIsDarkTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) =>
      handleThemeToggle(e.matches ? true : false)
    );

    return () => mediaQuery.removeEventListener("change", handleThemeToggle);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkTheme);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`${isSticky ? "bg-amber-100 shadow-lg" : ""
        } bg-amber-100 text-base-content sticky top-0 flex h-14 z-30 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100`}
    >
      <div className="w-full flex items-center justify-between px-4">
        {/* Logo and Company Name */}
        <a href="/" className="flex items-center py-2 group">
          <svg
            className="h-8 w-8 md:h-10 md:w-10"
            width="32"
            height="32"
            viewBox="0 0 415 415"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
            <circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle>
            <circle cx="207.5" cy="135" r="125" fill="white"></circle>
            <circle cx="207.5" cy="135" r="56" fill="#007BFF"></circle>
            <line x1="182.5" y1="115" x2="232.5" y2="115" stroke="white" strokeWidth="10" />
            <line x1="207.5" y1="115" x2="207.5" y2="165" stroke="white" strokeWidth="10" />
          </svg>

          <div className="flex flex-col ml-2">
            <span className="text-md md:text-md font-sans text-black font-semibold tracking-wide">
              technomaniaLabs
            </span>
            <div className="flex items-center gap-1 text-xs font-mono text-black">
              Ready
              <span className="text-indigo-500 rounded-sm border-2 font-mono text-sm ml-1 mr-1">24x7</span>
              Academy
              {daysLeft > 0 && (
                <span className="ml-2 bg-red-500 text-white text-[10px] px-2 py-[1px] rounded-full animate-pulse">
                  {daysLeft} days left
                </span>
              )}
            </div>
          </div>
        </a>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-black"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 font-sans">
          <a href="/" className="text-black hover:text-sky-500 text-sm">Home</a>
          <a href="/All Companies" className="text-black hover:text-sky-500 text-sm">All Companies</a>
          <a href="https://github.com/TechnoManiaLabs" target="_blank" rel="noreferrer" className="text-black hover:text-sky-500 text-sm">GitHub</a>
          <a href="#" className="text-black hover:text-sky-500 text-sm">Community</a>

          <div className="shrink-0 bg-gray-400 w-[1px] h-6 mx-2 "></div>

          {/* Login/Signup */}
          <a href="/login" className="text-sm px-4 py-1 border border-indigo-500 text-indigo-600 rounded-full hover:bg-indigo-100">Login</a>
          <a href="/signup" className="text-sm px-4 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">Signup</a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } md:hidden absolute top-16 left-0 w-full bg-green-300 text-black py-4 space-y-4 transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <a href="/" className="block px-4 py-2 hover:bg-sky-400">Home</a>
          <a href="/All Companies" className="block px-4 py-2 hover:bg-sky-400">All Companies</a>
          <a href="https://github.com/TechnoManiaLabs" className="block px-4 py-2 hover:bg-sky-400">GitHub</a>
          <a href="#" className="block px-4 py-2 hover:bg-sky-400">Community</a>

          <div className="border-t border-gray-400 my-2"></div>

          {/* Login/Signup Mobile */}
          <a href="/login" className="block px-4 py-2 text-indigo-600 hover:bg-indigo-100">Login</a>
          <a href="/signup" className="block px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded mx-4 text-center">Signup</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
