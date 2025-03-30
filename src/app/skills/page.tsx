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
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "Chakra UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chakraui/chakraui-original.svg",
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
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
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
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
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
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a]">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-[#ff3333]/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-t from-[#ff3333]/10 to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
        {/* Header section with glowing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-16"
        >
          <div className="absolute -top-10 left-0 w-40 h-40 bg-[#ff3333]/20 rounded-full blur-3xl" />

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white relative z-10">
            My <span className="text-[#ff3333]">Skills</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mb-12 relative z-10">
            With a foundation in competitive programming and web development,
            I've developed a diverse skill set that allows me to build robust,
            scalable applications from the ground up.
          </p>
        </motion.div>

        {/* Category filtering */}
        <div className="flex flex-wrap gap-4 mb-10">
          <motion.button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "All"
                ? "bg-[#ff3333] text-white shadow-lg shadow-[#ff3333]/20"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>

          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.name
                  ? "bg-[#ff3333] text-white shadow-lg shadow-[#ff3333]/20"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

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
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="relative group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center rounded-2xl overflow-hidden bg-gray-800 group-hover:bg-black mb-3 transition-all duration-300 border border-gray-700 group-hover:border-[#ff3333]/50">
                    {/* Glow effect on hover */}
                    <div
                      className={`absolute inset-0 bg-[#ff3333]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm`}
                    />

                    {/* Icon with glow effect */}
                    <div className="relative z-10 w-3/5 h-3/5">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain transition-all duration-300"
                        style={{
                          filter:
                            skill.name === "GitHub"
                              ? "invert(1) brightness(1.5)"
                              : "brightness(1.2)",
                        }}
                      />
                    </div>

                    {/* Animated corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ff3333]/0 group-hover:border-[#ff3333] transition-all duration-300" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#ff3333]/0 group-hover:border-[#ff3333] transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#ff3333]/0 group-hover:border-[#ff3333] transition-all duration-300" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ff3333]/0 group-hover:border-[#ff3333] transition-all duration-300" />
                  </div>

                  <span className="text-sm font-medium text-white/80 group-hover:text-white text-center transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Detailed skills sections */}
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-10 relative text-white">
                <span className="relative z-10">{category.name}</span>
                <span className="absolute bottom-0 left-0 h-3 bg-[#ff3333]/20 w-24 -z-10"></span>
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category.name}-${skill.name}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(255, 51, 51, 0.15)",
                    }}
                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-[#ff3333]/30 transition-all duration-300"
                  >
                    <div className="p-6 flex flex-col items-center relative">
                      {/* Radial gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-radial from-[#ff3333]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                      <div className="w-16 h-16 md:w-20 md:h-20 mb-4 relative flex items-center justify-center bg-black/30 rounded-xl p-3">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain p-2"
                          style={{
                            filter:
                              skill.name === "GitHub"
                                ? "invert(1) brightness(1.5)"
                                : "brightness(1.2)",
                          }}
                        />
                      </div>
                      <h3 className="font-medium text-center text-white relative z-10">
                        {skill.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Learning journey section with improved design */}
        <motion.section
          className="mt-20 bg-gradient-to-br from-black to-gray-900 border border-gray-800 rounded-2xl p-10 md:p-14 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Background glow effects */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white relative">
            My Learning <span className="text-[#ff3333]">Journey</span>
          </h2>
          <p className="mb-10 text-gray-300">
            Technology is constantly evolving, and so am I. Here are some
            technologies I'm currently exploring:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 overflow-hidden group"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 51, 51, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Animated accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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
                <h3 className="font-semibold text-white">GraphQL & Apollo</h3>
              </div>
              <p className="text-gray-400">
                Exploring efficient data fetching and real-time updates with
                GraphQL and Apollo Client.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 overflow-hidden group"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 51, 51, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Animated accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Machine Learning</h3>
              </div>
              <p className="text-gray-400">
                Learning the fundamentals of machine learning algorithms and how
                to implement them in real-world projects.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 overflow-hidden group"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 51, 51, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Animated accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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
              <p className="text-gray-400">
                Diving into blockchain technology, smart contracts, and building
                decentralized applications.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact CTA with improved animation and design */}
        <motion.div
          className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-black to-gray-900 border border-gray-800 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ boxShadow: "0 0 40px rgba(255, 51, 51, 0.2)" }}
        >
          {/* Background lighting effects */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#ff3333]/50 to-transparent" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#ff3333]/30 to-transparent" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Looking to collaborate?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto text-gray-300">
              I'm always excited to work on challenging projects and learn new
              technologies. If you're looking for a passionate developer, let's
              talk!
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#ff3333] text-white rounded-full hover:bg-[#cc0000] transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff3333] to-[#cc0000] group-hover:opacity-100 transition-opacity z-0"></span>
              <span className="absolute -inset-full bg-gradient-to-r from-[#ff3333] via-white/10 to-[#ff3333] z-0 animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100"></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom animated cursor effect for skill items */}
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
    </main>
  );
};

export default SkillsPage;
