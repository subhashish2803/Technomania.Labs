import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100); // Trigger when scrolling down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: "-50%" }}
        animate={isVisible ? { opacity: 1, x: 0, y: -20 } : {}}
        transition={{ duration: 1 }}
        className="w-1/2 text-center bg-blue-500 p-8 rounded-xl text-white"
      >
        <h2 className="text-2xl font-bold">Left Content</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "50%" }}
        animate={isVisible ? { opacity: 1, x: 0, y: -20 } : {}}
        transition={{ duration: 1 }}
        className="w-1/2 text-center bg-green-500 p-8 rounded-xl text-white ml-4"
      >
        <h2 className="text-2xl font-bold">Right Content</h2>
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
