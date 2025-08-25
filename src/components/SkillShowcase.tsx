"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// Import skills data from skills page
const skillIcons = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React Native",
    icon: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg",
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
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "/icons/express.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

interface Skill {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
{
  id: "fullstack",
  title: "Full Stack Developer",
  description:
    "Building responsive, interactive user interfaces with React, Next.js, and TypeScript, and crafting beautiful, modern UI components using Tailwind CSS. Developing robust server-side applications with Node.js, Express, and MongoDB, creating secure, scalable APIs and efficient database architectures for high-performance solutions.",
  icon: (
    <svg
      className="w-12 h-12 text-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Layered stack inside browser window */}
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" strokeWidth={1.5} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8h16M8 12h8M10 16h4"
      />
    </svg>
  ),
},
{
  id: "devops",
  title: "DevOps Engineering",
  description:
    "Implementing modern DevOps practices to streamline development and deployment workflows. Experienced with CI/CD pipelines, Docker, containerized applications, and cloud deployments to ensure scalable, reliable, and production-ready environments.",
  icon: (
    <svg
      className="w-12 h-12 text-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* infinity loop */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 7.5
           C4.2 7.5 3 9.8 3 12c0 2.2 1.2 4.5 3.5 4.5
           C8.8 16.5 10 14.2 12 12
           C14 14.2 15.2 16.5 17.5 16.5
           C19.8 16.5 21 14.2 21 12
           C21 9.8 19.8 7.5 17.5 7.5
           C15.2 7.5 14 9.8 12 12
           C10 9.8 8.8 7.5 6.5 7.5z"
      />
      {/* left arrow tip */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.6 9.6 L5.1 8.1 M3.6 9.6 L5.1 11.1"
      />
      {/* right arrow tip */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.4 14.4 L18.9 15.9 M20.4 14.4 L18.9 12.9"
      />
    </svg>
  ),
},

  {
    id: "real-time",
    title: "Real-Time Applications",
    description:
      "Developing collaborative and interactive applications with WebSockets and Socket.io. Specializing in real-time code editors, chat platforms, and live collaboration tools that enhance user engagement.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "database-design",
    title: "Database Design",
    description:
      "Creating efficient, scalable database structures using MongoDB, MySQL, and Firebase. Implementing proper data models, relationships, and optimization techniques to ensure high performance.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    id: "ui-development",
    title: "UI/UX Development",
    description:
      "Transforming designs into responsive, accessible, and performant user interfaces. Using modern CSS frameworks like Tailwind CSS to create beautiful and functional user experiences.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    description:
      "Automating deployment workflows with Docker, AWS, and Vercel. Setting up CI/CD pipelines, managing cloud infrastructure, and ensuring reliable application hosting for seamless user experience.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -10 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3 },
  },
};

const SkillShowcase = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-gradient-to-br from-[#ff3333]/10 to-transparent rounded-full blur-3xl opacity-70 -z-10" />
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-tl from-[#ff3333]/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container mx-auto">
        {/* Header with slide-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="h-1 bg-[#ff3333] mb-6"
            />
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My <span className="text-[#ff3333]">Skills</span>
            </motion.h2>
            <motion.p
              className="opacity-80 max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              As a full-stack developer, I specialize in building responsive web
              applications and real-time collaboration tools with modern
              technologies.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/skills"
              className="px-6 py-3 rounded-full border border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#ff3333]/20 whitespace-nowrap"
            >
              View All Skills
            </Link>
          </motion.div>
        </motion.div>

        {/* Skills Icons */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillIcons.slice(0, 10).map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center group"
              variants={iconVariants}
              whileHover="hover"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-md rounded-full p-4 flex items-center justify-center mb-3 border border-white/10 group-hover:border-[#ff3333]/30 group-hover:shadow-lg group-hover:shadow-[#ff3333]/10 transition-all duration-300">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full filter transition-all duration-300"
                />
              </div>
              <span className="text-sm text-center">{skill.name}</span>
              {/* Light reflection effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff3333]/20 to-transparent"
                initial={{ opacity: 0, x: "-100%" }}
                whileHover={{ opacity: 1, x: "100%" }}
                transition={{ duration: 1.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.slice(0, 3).map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg relative overflow-hidden"
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
              {/* Light orb effect */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-2xl" />

              <div className="relative">{skill.icon}</div>
              <h3 className="text-xl font-semibold my-4 relative">
                {skill.title}
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"></span>
              </h3>
              <p className="opacity-80">{skill.description}</p>

              {/* Light reflection effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillShowcase;
