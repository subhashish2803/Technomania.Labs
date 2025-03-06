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
        <div className="hidden md:flex items-center space-x-6 font-sans">
          <a
            href="/"
            className="text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            Home
          </a>
          <a
            href="/Documentation"
            className="text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            AI Mentor
          </a>
          <a
            href="#"
            className="text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            Community
          </a>

          <span className="h-6 text-slate-400 dark:text-black">|</span>

          {/* GitHub Link */}
          <a
            href="https://github.com/TechnoManiaLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-300 hover:bg-slate-500 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.37 7.87 10.88.57.1.76-.25.76-.54 0-.27-.01-1.16-.01-2.1-3.21.7-3.89-1.55-3.89-1.55-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.75 2.71 1.25 3.37.95.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.44-2.28 1.16-3.08-.12-.28-.5-1.42.1-2.95 0 0 .97-.31 3.17 1.18.92-.26 1.92-.4 2.91-.4s1.99.14 2.91.4c2.2-1.49 3.17-1.18 3.17-1.18.6 1.53.22 2.67.1 2.95.72.8 1.16 1.82 1.16 3.08 0 4.43-2.7 5.41-5.27 5.69.41.35.78 1.03.78 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.19.65.77.54C20.71 21.37 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } md:hidden absolute top-16 left-0 w-full bg-slate-900 text-white py-4 space-y-4 transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <a href="/" className="block px-4 py-2 hover:bg-sky-400">
            Home
          </a>
          <a href="/Documentation" className="block px-4 py-2 hover:bg-sky-400">
            Documentation
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-sky-400">
            AI Mentor
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
