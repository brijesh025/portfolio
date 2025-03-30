"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-secondary/5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff3333]/5 to-transparent rounded-full blur-3xl" />
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

          {/* Tabs Navigation */}
          <div className="flex flex-col gap-2">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 text-left rounded transition-all duration-300 relative overflow-hidden ${
                  activeTab === tab.id
                    ? "bg-[#ff3333] text-white shadow-lg shadow-[#ff3333]/20"
                    : "bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/5"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  scale: activeTab === tab.id ? 1 : 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 -z-10 bg-[#ff3333]"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
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
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff3333]/50"></span>
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
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff3333]/50"></span>
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
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <span className="text-[#ff3333] block mb-1">Current</span>
                  <h4 className="text-xl font-semibold mb-2">
                    Bachelor of Technology in Information Technology
                  </h4>
                  <p className="text-sm mb-2 opacity-70">• IIIT Gwalior</p>
                  <p className="opacity-80">
                    Second-year student with CGPA of 7.9/10, focusing on web
                    technologies and software development.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                My skills
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff3333]/50"></span>
              </h3>
              <p className="opacity-80 mb-6">
                I've developed expertise in a range of technologies with a focus
                on full-stack development and real-time applications.
              </p>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* HTML/CSS */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300 flex flex-col items-center justify-center"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML/CSS"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">HTML/CSS</span>
                </motion.div>

                {/* JavaScript */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300 flex flex-col items-center justify-center"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">JavaScript</span>
                </motion.div>

                {/* React.js */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300 flex flex-col items-center justify-center"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React.js"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">React.js</span>
                </motion.div>

                {/* Next.js */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300 flex flex-col items-center justify-center"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                      fill
                      className="object-contain"
                      style={{ filter: "brightness(1.5)" }}
                    />
                  </div>
                  <span className="text-center">Next.js</span>
                </motion.div>

                {/* WebSocket */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300 flex flex-col items-center justify-center"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
                      alt="WebSocket"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">WebSocket</span>
                </motion.div>

                {/* Firebase */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300 flex flex-col items-center justify-center"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                      alt="Firebase"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">Firebase</span>
                </motion.div>

                {/* MongoDB */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300 flex flex-col items-center justify-center"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                      alt="MongoDB"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">MongoDB</span>
                </motion.div>

                {/* Tailwind */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-lg hover:shadow-lg hover:shadow-[#ff3333]/5 hover:border-[#ff3333]/20 transition-all duration-300 flex flex-col items-center justify-center"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      alt="Tailwind CSS"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-center">Tailwind</span>
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
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff3333]/50"></span>
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.p className="opacity-80" variants={itemVariants}>
                  I am a second-year B.Tech IT student at IIIT Gwalior with a
                  strong foundation in web technologies, competitive
                  programming, and real-time application development.
                </motion.p>
                <motion.p className="opacity-80" variants={itemVariants}>
                  I'm passionate about creating collaborative tools and
                  applications that solve real-world problems. My experience
                  includes developing a real-time code editor, a cryptocurrency
                  tracking platform, and a developer discussion forum.
                </motion.p>
                <motion.p className="opacity-80" variants={itemVariants}>
                  I excel in competitive environments, having ranked 1st at IIIT
                  Gwalior's Programming Contest and 2nd place in TechAthalon.
                  I'm constantly learning and improving my skills to keep up
                  with the latest technologies and best practices.
                </motion.p>

                <motion.div variants={itemVariants}>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 rounded-full bg-[#ff3333] text-white hover:bg-[#cc0000] transition-colors duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get in touch</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#ff3333] to-[#cc0000] group-hover:opacity-100 transition-opacity z-0"></span>
                    <span className="absolute -inset-full bg-gradient-to-r from-[#ff3333] via-white/10 to-[#ff3333] z-0 animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100"></span>
                  </Link>
                </motion.div>
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
