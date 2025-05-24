"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function WorkPage() {
  const projects = [
    {
      id: 1,
      title: "FurniShop E-commerce",
      category: "Web Development",
      technologies: ["HTML 5", "CSS 3", "JavaScript"],
      description:
        "An online furniture store with a modern design, featuring product filtering, cart functionality, and secure checkout.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "A full-stack task management application with user authentication, task creation, and real-time updates.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      category: "Mobile App",
      technologies: ["React Native", "Firebase"],
      description:
        "A cross-platform mobile app for tracking workouts, setting goals, and monitoring fitness progress.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "Web Application",
      technologies: ["JavaScript", "API Integration"],
      description:
        "A weather dashboard that fetches real-time data from a weather API and displays it with a clean, intuitive interface.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Web Development",
      technologies: ["Next.js", "Tailwind CSS"],
      description:
        "A personal portfolio website showcasing skills, experience, and projects with a modern, responsive design.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 6,
      title: "Recipe Finder",
      category: "Web Application",
      technologies: ["React", "Redux", "API Integration"],
      description:
        "A recipe search application that allows users to find recipes based on ingredients, dietary restrictions, and cuisine type.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-[#ff3333]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff3333]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ff3333]/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="h-1 bg-[#ff3333] mb-6 mx-auto"
          />

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My <span className="text-[#ff3333]">Work</span>
          </motion.h1>

          <motion.p
            className="text-lg opacity-80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A selection of my recent projects. Each project represents a unique
            challenge and showcases different skills and technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#ff3333]/30 transition-all duration-300 relative"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                borderColor: "rgba(255, 51, 51, 0.3)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Light orb effect */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
                  {/* Replace with actual project images */}
                  <svg
                    className="w-16 h-16 text-gray-300 group-hover:text-[#ff3333] transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff3333]/80 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demoUrl}
                      className="bg-white text-[#ff3333] px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 border border-white"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      className="bg-transparent text-white px-4 py-2 rounded-full border border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                    >
                      View Code
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="mb-2">
                  <span className="text-sm text-[#ff3333]">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="opacity-80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm hover:border-[#ff3333]/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Light reflection effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p
            className="text-lg mb-8 opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Want to see more of my work or discuss a potential project?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-[#ff3333] text-white hover:shadow-lg hover:shadow-[#ff3333]/20 transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
