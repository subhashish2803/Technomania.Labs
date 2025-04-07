import React, { useState, useEffect } from "react";

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      document.documentElement.classList.contains("dark")
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle theme toggle
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

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Becomes sticky after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const releaseDate = new Date("2025-03-01"); // Set your target release date
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const updateDaysLeft = () => {
      const today = new Date();
      const timeDiff = releaseDate - today;
      setDaysLeft(Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)))); // Calculate days left
    };

    updateDaysLeft(); // Initial calculation
    const interval = setInterval(updateDaysLeft, 1000 * 60 * 60 * 24); // Update daily

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <nav
      className={`${isSticky ? " bg-amber-100 shadow-lg" : ""} bg-amber-100 text-base-content sticky top-0 flex h-14 z-30 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100`}
    >
      <div className="w-full flex items-center justify-between px-4">
        {/* Logo and Company Name with "Ready247Academy" underneath */}
        <a href="/" className="flex items-center  py-2 group">
          {/* Logo */}
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

          <div className="flex flex-col">
            {/* Company Name */}
            <span className="text-md md:text-md font-sans text-black font-semibold tracking-wide">
              technomaniaLabs
            </span>

            {/* Ready247Academy with 247 in red */}
            <div className="text-xs font-mono text-black">
              Ready
               <span className="text-indigo-500 rounded-sm border-2 font-mono text-sm ml-1 mr-1 ">24x7</span>

              Academy
            </div>
          </div>
        </a>

        {/* Hamburger Icon for Mobile */}
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

        {/* Main Menu (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 font-sans">
          {/* Home */}
  <a
    href="/"
    className="flex items-center gap-1 text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
    Home
  </a>

  {/* Documentation */}
  <a
    href="/All Companies"
    className="flex items-center gap-1 text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook">
      <path d="M2 6h4"></path>
      <path d="M2 10h4"></path>
      <path d="M2 14h4"></path>
      <path d="M2 18h4"></path>
      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
      <path d="M16 2v20"></path>
    </svg>
    All Companies
  </a>
          <a
            href="Github"
            className="flex items-center gap-1 text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            {<img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="GitHub" />}
            Github
          </a>
          <a
            href="#"
            className="text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            Community
          </a>

          {/* Vertical Line */}
      <div className="shrink-0 bg-gray-400 w-[1px] h-6 mx-2 "></div>

        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } md:hidden absolute top-16 left-0 w-full bg-green-300 text-black py-4 space-y-4 transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <a
    href="/"
    className="flex items-center gap-1 text-black ml-3 dark:hover:text-sky-400 hover:text-sky-400 text-sm"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
    Home
  </a>
  {/* Documentation */}
  <a
    href="/All Companies"
    className="flex items-center gap-1 text-black ml-3 dark:hover:text-sky-400 hover:text-sky-400 text-sm"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook">
      <path d="M2 6h4"></path>
      <path d="M2 10h4"></path>
      <path d="M2 14h4"></path>
      <path d="M2 18h4"></path>
      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
      <path d="M16 2v20"></path>
    </svg>
    All Companies
  </a>
  <a
            href="Github"
            className="flex items-center gap-1 text-black ml-3 dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            {<img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="GitHub" />}
            Github
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-sky-400">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
