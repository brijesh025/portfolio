"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const WhyHireMe = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About me" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden">
      {/* Enhanced background effects matching home page */}
      <div className="absolute -inset-0 -z-10">
        {/* Main glowing orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tr from-[#ff3333]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <motion.div
          className="lg:w-1/3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="h-1 bg-[#ff3333] mb-6"
          />
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Why hire <span className="text-[#ff3333]">me</span>?
          </motion.h2>
          <motion.p
            className="text-base opacity-80 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm a dedicated full-stack developer with a strong foundation in web
            technologies, competitive programming, and real-time application
            development. With experience in building collaborative tools and
            live tracking applications, I bring a blend of technical expertise
            and problem-solving skills to every project.
          </motion.p>

          {/* Glass effect tabs */}
          <div className="flex flex-col gap-2">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 text-left rounded-lg transition-all duration-300 relative overflow-hidden backdrop-blur-md ${
                  activeTab === tab.id
                    ? "bg-[#ff3333]/80 text-white shadow-lg shadow-[#ff3333]/30"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  scale: activeTab === tab.id ? 1 : 1.02,
                  boxShadow: "0 0 20px rgba(255, 51, 51, 0.3)",
                  borderColor: "rgba(255, 51, 51, 0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-[#ff3333]/80 to-[#ff5555]/80"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Light reflection effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 -z-5"
                  whileHover={{ opacity: 1, x: 100 }}
                  transition={{ duration: 0.5 }}
                />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {activeTab === "experience" && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 relative inline-block">
                My experience
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent"></span>
              </h3>
              <p className="opacity-80 mb-6">
                I have hands-on experience in developing real-time collaborative
                applications and platforms that solve real-world problems.
              </p>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-[#ff3333] block mb-1">
                    1 MAY 2024 - 2 JULY 2024
                  </span>
                  <h4 className="text-xl font-semibold mb-2">
                    Computer Science Instructor
                  </h4>
                  <p className="text-sm mb-2 opacity-70">• EXPGRADE ACADEMY</p>
                  <p className="opacity-80">
                    Developed the fundamentals of Computer Science among
                    students, teaching coding and problem-solving skills.
                  </p>
                  {/* Light reflection effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-[#ff3333] block mb-1">2023</span>
                  <h4 className="text-xl font-semibold mb-2">
                    Code Sync Developer
                  </h4>
                  <p className="text-sm mb-2 opacity-70">• Personal Project</p>
                  <p className="opacity-80">
                    Developed a real-time collaborative code editor using
                    Next.js, WebSocket, and WebRTC with features like multi-user
                    collaboration.
                  </p>
                  {/* Light reflection effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-[#ff3333] block mb-1">2023</span>
                  <h4 className="text-xl font-semibold mb-2">
                    CRPTED Developer
                  </h4>
                  <p className="text-sm mb-2 opacity-70">• Personal Project</p>
                  <p className="opacity-80">
                    Created a ReactJS app to dynamically display and track live
                    crypto currency prices and market performance.
                  </p>
                  {/* Light reflection effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-[#ff3333] block mb-1">2023</span>
                  <h4 className="text-xl font-semibold mb-2">
                    Developer Forum Creator
                  </h4>
                  <p className="text-sm mb-2 opacity-70">• Discus Project</p>
                  <p className="opacity-80">
                    Built a platform for discussing development problems where
                    users can list and discuss problems, share new project
                    ideas.
                  </p>
                  {/* Light reflection effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 relative inline-block">
                My education
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent"></span>
              </h3>
              <p className="opacity-80 mb-6">
                I'm currently pursuing my Bachelor's degree while continuing to
                build my skills through hands-on project development.
              </p>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-[#ff3333] block mb-1">Current</span>
                  <h4 className="text-xl font-semibold mb-2">
                    B.Tech (IT) - Second Year
                  </h4>
                  <p className="text-sm mb-2 opacity-70">• IIIT GWALIOR</p>
                  <p className="opacity-80">
                    Pursuing a Bachelor's degree in Information Technology with
                    focus on software development and algorithms.
                  </p>
                  {/* Light reflection effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-[#ff3333] block mb-1">
                    Competitive Programming
                  </span>
                  <h4 className="text-xl font-semibold mb-2">JEE MAINS</h4>
                  <p className="text-sm mb-2 opacity-70">• National Exam</p>
                  <p className="opacity-80">
                    Scored in the 98 percentile, demonstrating strong analytical
                    and problem-solving abilities.
                  </p>
                  {/* Light reflection effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-[#ff3333] block mb-1">
                    High School Education
                  </span>
                  <h4 className="text-xl font-semibold mb-2">CBSE Board</h4>
                  <p className="text-sm mb-2 opacity-70">
                    • ARMY PUBLIC SCHOOL
                  </p>
                  <p className="opacity-80">
                    Class 12th: 82% | Class 10th: 85%, with strong foundation in
                    mathematics and science.
                  </p>
                  {/* Light reflection effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 relative inline-block">
                Technical skills
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent"></span>
              </h3>
              <p className="opacity-80 mb-8">
                I've developed proficiency in a range of technologies, with a
                focus on JavaScript-based web development and real-time
                applications.
              </p>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* HTML/CSS */}
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML/CSS"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">HTML/CSS</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* JavaScript */}
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">JavaScript</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* React.js */}
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React.js"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">React.js</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* Next.js */}
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                      fill
                      className="object-contain"
                      style={{ filter: "brightness(1.5)" }}
                    />
                  </div>
                  <span className="text-center">Next.js</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* WebSocket */}
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
                      alt="WebSocket"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">WebSocket</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* Firebase */}
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                      alt="Firebase"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">Firebase</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* MongoDB */}
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                      alt="MongoDB"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">MongoDB</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* Tailwind */}
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      alt="Tailwind CSS"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">Tailwind</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 relative inline-block">
                About me
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent"></span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-[#ff3333]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Personal
                  </h4>
                  <p className="mb-4 opacity-80">
                    I'm Brijesh Singh, a passionate developer from IIIT Gwalior,
                    specializing in building innovative web applications. I have
                    a strong foundation in problem-solving and algorithm design.
                  </p>

                  <ul className="space-y-2 opacity-80">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-[#ff3333] mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Constantly learning and improving my skills
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-[#ff3333] mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Strong problem-solving abilities
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-[#ff3333] mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Attention to detail and clean code practices
                    </li>
                  </ul>
                  {/* Light reflection effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-[#ff3333]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    My Approach
                  </h4>
                  <p className="mb-4 opacity-80">
                    I approach development with a focus on creating intuitive,
                    efficient, and scalable solutions. I believe in writing
                    clean code that is maintainable and follows best practices.
                  </p>

                  <ul className="space-y-2 opacity-80">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-[#ff3333] mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      User-centered design principles
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-[#ff3333] mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Agile development methodologies
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-[#ff3333] mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Continuous learning and adaptation
                    </li>
                  </ul>
                  {/* Light reflection effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              <motion.div
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg transition-all duration-300 mt-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{
                  boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                  borderColor: "rgba(255, 51, 51, 0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Light beam effect */}
                <div className="absolute -right-20 top-1/2 w-40 h-40 bg-gradient-to-bl from-[#ff3333]/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />

                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#ff3333]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  What I Bring to the Table
                </h4>
                <p className="mb-6 opacity-80">
                  As a full-stack developer, I bring a combination of technical
                  skills and soft skills that enable me to work effectively in
                  teams and deliver high-quality solutions:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 opacity-80">
                    <li className="flex items-start">
                      <span className="text-[#ff3333] mr-2">•</span>
                      Strong problem-solving skills
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff3333] mr-2">•</span>
                      Ability to learn quickly and adapt
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff3333] mr-2">•</span>
                      Experience with modern development tools
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff3333] mr-2">•</span>
                      Strong communication and collaboration
                    </li>
                  </ul>

                  <ul className="space-y-3 opacity-80">
                    <li className="flex items-start">
                      <span className="text-[#ff3333] mr-2">•</span>
                      Passion for clean, maintainable code
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff3333] mr-2">•</span>
                      User-centered design thinking
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff3333] mr-2">•</span>
                      Attention to detail and quality
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff3333] mr-2">•</span>
                      Drive to continuously improve
                    </li>
                  </ul>
                </div>
                {/* Light reflection effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Custom animation for shimmer effect */}
      <style jsx global>{`
        @keyframes shimmer {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyHireMe;
