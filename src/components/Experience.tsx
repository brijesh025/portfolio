"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer & Team Manager",
    company: "Rishishwar Industries",
    period: "May 2025 - Present",
    description: [
      "Contributed to multiple projects, developing interactive 3D components with Three.js and building a face authentication system.",
      "Promoted to Team Lead for the Learn2Pay project, where I implemented role-based authentication and authorization.",
    ],
    technologies: [
      "Three.js",
      "Authentication",
      "Team Leadership",
      "Full Stack Development",
    ],
    current: true,
  },
  {
    id: 2,
    title: "Computer Science Instructor",
    company: "Expograde Academy",
    period: "May 2024 - July 2024",
    description: [
      "Taught fundamentals of computer science and programming to students.",
      "Guided students through C++, Java, Python, and JavaScript basics.",
      "Encouraged coding mindset and problem-solving techniques.",
    ],
    technologies: ["C++", "Java", "Python", "JavaScript", "Teaching"],
    current: false,
  },
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

const Experience = () => {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden">
      {/* Enhanced background effects matching home page */}
      <div className="absolute -inset-0 -z-10">
        {/* Main glowing orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#ff3333]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tr from-[#ff3333]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="h-1 bg-[#ff3333] mx-auto mb-6"
          />
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My <span className="text-[#ff3333]">Experience</span>
          </motion.h2>
          <motion.p
            className="text-lg opacity-80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A journey through my professional experiences in software development and education
          </motion.p>
        </motion.div>

        {/* Experience Cards - Styled like WhyHireMe */}
        <motion.div
          className="flex flex-col items-center gap-15 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="bg-white/5 max-w-xl backdrop-blur-md border border-white/15 p-6 md:p-15 rounded-lg relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                borderColor: "rgba(255, 51, 51, 0.3)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Current badge */}
              {experience.current && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff3333]/20 text-[#ff3333] text-sm font-medium rounded-full mb-4">
                  <div className="w-2 h-2 bg-[#ff3333] rounded-full animate-pulse" />
                  Current Role
                </div>
              )}

              {/* Period */}
              <span className="text-[#ff3333] font-semibold block mb-2">
                {experience.period}
              </span>

              {/* Title and Company */}
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {experience.title}
              </h3>
              <p className="text-sm mb-4 opacity-70"> {experience.company}</p>

              {/* Description */}
              <div className="space-y-3 mb-6">
                {experience.description.map((desc, idx) => (
                  <p key={idx} className="opacity-80 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#ff3333]/10 text-[#ff3333] text-sm rounded-full border border-[#ff3333]/20 hover:bg-[#ff3333]/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Light reflection effect - Same as WhyHireMe */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Top light reflection */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff3333]/30 to-transparent opacity-0"
                whileHover={{ opacity: 1, x: ["100%", "-100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg opacity-80 mb-6">
            Ready to discuss your next project?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff3333] text-white hover:bg-[#ff4444] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff3333]/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
