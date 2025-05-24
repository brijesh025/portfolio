"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Define skill categories and their corresponding skills
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "/icons/express.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "REST API",
        icon: "https://img.icons8.com/nolan/64/api-settings.png",
      },
      {
        name: "Socket.io",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "/icons/github.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        icon: "/icons/aws.svg",
      },
      {
        name: "Vercel",
        icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
      },
      {
        name: "Netlify",
        icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get all unique skills
  const allSkills = Array.from(
    new Set(
      skillCategories.flatMap((category) =>
        category.skills.map((skill) => skill)
      )
    )
  );

  // Filter skills based on active category
  const displayedSkills =
    activeCategory === "All"
      ? allSkills.slice(0, 16)
      : skillCategories.find((cat) => cat.name === activeCategory)?.skills ||
        [];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-[#ff3333]/10 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-tl from-[#ff3333]/5 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#ff3333]/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
        {/* Header section with animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="h-1 bg-[#ff3333] mb-6"
          />

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My <span className="text-[#ff3333]">Skills</span>
          </motion.h1>

          <motion.p
            className="text-lg opacity-80 max-w-2xl mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            With a foundation in competitive programming and web development,
            I've developed a diverse skill set that allows me to build robust,
            scalable applications from the ground up.
          </motion.p>
        </motion.div>

        {/* Category filtering with animated buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            variants={itemVariants}
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "All"
                ? "bg-[#ff3333] text-white shadow-lg shadow-[#ff3333]/20"
                : "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:border-[#ff3333]/30 hover:bg-[#ff3333]/10"
            }`}
            whileHover={{ y: -5, x: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>

          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              variants={itemVariants}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-[#ff3333] text-white shadow-lg shadow-[#ff3333]/20"
                  : "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:border-[#ff3333]/30 hover:bg-[#ff3333]/10"
              }`}
              whileHover={{ y: -5, x: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid with animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-20"
          >
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${skill.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                  borderColor: "rgba(255, 51, 51, 0.3)",
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg relative overflow-hidden group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mb-3 transition-all duration-300 relative">
                  {/* Light orb effect */}
                  <div className="absolute -right-2 -top-2 w-6 h-6 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full filter transition-all duration-300"
                  />
                </div>
                <p className="text-sm text-center">{skill.name}</p>

                {/* Light reflection effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r rom-transparent via-white/20 to-transparent"
                  whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Future skills section */}
        <motion.section
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Skills I'm Learning
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"></span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg relative overflow-hidden group"
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
              {/* Light beam effect */}
              <div className="absolute -right-20 top-1/2 w-40 h-40 bg-gradient-to-bl from-[#ff3333]/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#ff3333]/10 rounded-xl flex items-center justify-center text-[#ff3333]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">
                  Blockchain Development
                </h3>
              </div>
              <p className="opacity-80">
                Diving into blockchain technology, smart contracts, and building
                decentralized applications.
              </p>

              {/* Light reflection effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg relative overflow-hidden group"
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
              {/* Light beam effect */}
              <div className="absolute -left-20 top-1/2 w-40 h-40 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#ff3333]/10 rounded-xl flex items-center justify-center text-[#ff3333]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Machine Learning</h3>
              </div>
              <p className="opacity-80">
                Learning the fundamentals of machine learning to integrate AI
                capabilities into web applications.
              </p>

              {/* Light reflection effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default SkillsPage;
