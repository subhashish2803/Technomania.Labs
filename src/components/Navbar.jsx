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
      setDaysLeft(Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24))));
    };

    updateDaysLeft(); // Initial calculation
    const interval = setInterval(updateDaysLeft, 1000 * 60 * 60 * 24); // Update daily

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <nav
      className={`${
        isSticky ? "bg-slate-800 shadow-lg" : "bg-slate-900"
      } dark:bg-slate-900 dark:bg-gradient-to-l from-gray-200 via-fuchsia-100 to-stone-300 text-base-content sticky top-0 flex h-16 z-30 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logos/mylogo.jpg"
            alt="Technomania Labs Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-white font-sans dark:text-black ml-2">
            Technomania Labs
          </span>
        </a>
        <div className="flex justify-center items-center w-full max-w-40 max-w-xs sm:max-w-sm">
      <a
        className="tooltip tooltip-accent relative flex flex-col w-full"
        href="https://github.com/saadeghi/daisyui/discussions/3246"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="Technomania Labs - Try the beta version"
      >
        {/* Progress percentage label */}
        <div
          className="text-[0.6rem] hidden sm:block absolute font-sans text-white dark:text-black -top-4 -translate-x-1/2 rtl:translate-x-1/2"
          style={{ insetInlineStart: "92%" }}
        >
          92%
        </div>

        {/* Progress bar */}
        <progress
          className="hidden sm:block progress w-full rounded-lg"
          max="100"
          value="92"
          style={{
            backgroundColor: "#d1fae5", // Tailwind green-100 (background)
            border: "1px solid #86efac", // Tailwind green-300 (border)
            color: "#4ade80", // Tailwind green-400 (progress bar color)
          }}
        ></progress>

        {/* Progress description with dynamic days */}
        <div className="text-white font-sans dark:text-black text-[0.6rem] tracking-wide absolute -bottom-4 text-center">
           V1.0.28 will be available in {daysLeft} days
        </div>
      </a>
    </div>
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white dark:text-black"
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
            className="text-white dark:text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            Home
          </a>
          <a
            href="/Documentation"
            className="text-white dark:text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-white dark:text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
          >
            AI Mentor
          </a>
          <a
            href="#"
            className="text-white dark:text-black dark:hover:text-sky-400 hover:text-sky-400 text-sm"
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

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-300 hover:bg-slate-500"
            aria-label="Toggle Theme"
          >
            {isDarkTheme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  className="fill-yellow-400 stroke-yellow-500"
                />
                <line x1="12" y1="1" x2="12" y2="3" className="stroke-yellow-500" />
                <line x1="12" y1="21" x2="12" y2="23" className="stroke-yellow-500" />
                <line
                  x1="4.22"
                  y1="4.22"
                  x2="5.64"
                  y2="5.64"
                  className="stroke-yellow-500"
                />
                <line
                  x1="18.36"
                  y1="18.36"
                  x2="19.78"
                  y2="19.78"
                  className="stroke-yellow-500"
                />
                <line x1="1" y1="12" x2="3" y2="12" className="stroke-yellow-500" />
                <line x1="21" y1="12" x2="23" y2="12" className="stroke-yellow-500" />
                <line
                  x1="4.22"
                  y1="19.78"
                  x2="5.64"
                  y2="18.36"
                  className="stroke-yellow-500"
                />
                <line
                  x1="18.36"
                  y1="5.64"
                  x2="19.78"
                  y2="4.22"
                  className="stroke-yellow-500"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  className="fill-sky-500"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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
          <div className="space-y-2 mt-4">
            <button
              className="w-full text-left text-sky-400"
              onClick={toggleTheme}
            >
              Toggle Theme
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
