import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Initialize Particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 0.8,
              outModes: "out",
            },
            links: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.3,
            },
            opacity: { value: 0.6, random: true },
            color: {
              value: ["#646cff", "#ffb700", "#42d392"], // Vite-like colors
            },
          },
        }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        {/* Floating Logo */}
        <motion.img
          src="/logos/hero.webp" // Replace with your own logo
          alt="Technomania Labs"
          className="w-40 md:w-56 drop-shadow-[0px_0px_25px_rgba(100,108,255,0.8)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Title Animation */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-[#646cff] via-[#ffb700] to-[#42d392] drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Build Tool
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-[#646cff]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          for the Web
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-300 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Next-generation frontend tooling
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#explore"
          className="mt-8 px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-[#646cff] to-[#ffb700] text-white shadow-md hover:scale-105 transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Get Started
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
