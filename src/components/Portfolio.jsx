import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const milestones = [
  { title: "🎓 Education", description: "MCA at Trident Academy of Technology", position: "right", imageUrl: "data:image/jpeg;base64,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" },
  { title: "💻 Expertise", description: "React, Express, MongoDB, Tailwind CSS", position: "left" },
  { title: "🚀 Projects", description: "College Attendance System, Tech Learning Hub", position: "right" },
  { title: "⚡ Skills", description: "JavaScript, Power BI, Node.js, OOPs", position: "left" },
  { title: "🎮 Hobbies", description: "Gaming, Reading Tech Blogs, Coding Challenges", position: "right" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center px-6 py-20 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-black-200 opacity-20 z-0"
        style={{
          backgroundImage: `url('https://wallpaperaccess.com/full/3441988.png')`,
        }} />



      {/* Header Section */}
      <section className="text-center mb-16 relative z-10 flex flex-col items-center">
  <img
    src="/logos/Myimage1.png" // Replace with your image path
    alt="Subhashish Nayak"
    className="h-80 w-80 object-cover shadow-2xl"
  />
  <h1 className="text-6xl font-extrabold mt-4">
    <span className="text-green-400">Hi,</span> I’m Subhashish Nayak
  </h1>
  <p className="text-xl mt-4 text-gray-400">
    A Full-Stack Developer crafting seamless experiences with modern technologies.
  </p>
</section>

      {/* Timeline Section */}
      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <motion.div
          className="absolute left-1/2 w-1 bg-gray-700 h-full -translate-x-1/2"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Glowing Dot - Correctly Aligned with Card Position */}
            <motion.div
              className={`absolute w-4 h-4 bg-green-500 rounded-full shadow-lg ${milestone.position === "right" ? "-right-3" : "-left-3"}`}
              animate={{ scale: [1, 1.3, 1], boxShadow: ["0 0 10px #4ade80", "0 0 20px #4ade80", "0 0 10px #4ade80"] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />

            {/* Timeline Card - Positioned according to the left/right side */}
            <motion.div
              className={`card bg-gray  shadow-xl border-2 border-green-200 rounded-lg p-4 bg-gray-900 p-6 rounded-lg shadow-lg w-[80%] md:w-[40%] transition-transform transform hover:scale-105 ${milestone.position === "right" ? "ml-auto text-right mr-6" : "mr-auto text-left ml-6"}`}
              
            >
              <h3 className="text-lg font-semibold text-green-400">{milestone.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{milestone.description}</p>

              {/* Hover Effect for Education - Show College Picture */}
              {milestone.title === "🎓 Education" && (
                <motion.div
                  className="mt-4 w-full h-64 bg-gray-800 rounded-lg overflow-hidden"
                  initial={{ opacity: 5 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={milestone.imageUrl}
                    alt="College"
                    className="w-full h-full object-cover transition-opacity"
                  />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <section className="mt-16 text-center relative z-10">
        <h2 className="text-3xl font-bold text-green-400">Connect With Me</h2>
        <div className="flex justify-center gap-10 mt-6 text-4xl">
          <a href="https://github.com/subhashish2803" target="_blank" rel="noopener noreferrer">
            <FaGithub className="cursor-pointer hover:text-gray-500 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/subhashish-nayak-422775310" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="cursor-pointer hover:text-blue-500 transition-all" />
          </a>
          <a href="https://www.instagram.com/_.a.s.h.u.0.3._" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition-all" />
          </a>
          <a href="mailto:nayaksubhashish456@gmail.com">
  <FaEnvelope className="cursor-pointer hover:text-gray-500 transition-all" />
</a>


        </div>
      </section>
    </div>
  );
}
