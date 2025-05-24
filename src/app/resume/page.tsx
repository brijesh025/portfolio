"use client";

import Link from "next/link";
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

export default function ResumePage() {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead developer for client projects, specializing in React and Node.js applications with a focus on performance optimization.",
      responsibilities: [
        "Architected and developed full-stack web applications using React, Next.js, and Node.js",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Optimized application performance, resulting in 40% faster load times",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      id: 2,
      title: "Front-End Developer Intern",
      company: "Web Design Studio",
      period: "Summer 2021",
      description:
        "Collaborated with the design team to implement responsive user interfaces and improve site accessibility.",
      responsibilities: [
        "Developed responsive UI components using React and Tailwind CSS",
        "Improved website accessibility to meet WCAG 2.1 AA standards",
        "Participated in UI/UX design sessions and implemented feedback",
        "Conducted browser compatibility testing and bug fixes",
      ],
    },
    {
      id: 3,
      title: "Freelance Web Developer",
      company: "E-commerce Startup",
      period: "2020 - 2021",
      description:
        "Developed custom e-commerce solutions for small businesses, including payment processing and inventory management.",
      responsibilities: [
        "Created custom e-commerce websites for small business clients",
        "Integrated payment gateways and implemented secure checkout processes",
        "Built inventory management systems and order processing workflows",
        "Provided ongoing support and maintenance for client websites",
      ],
    },
    {
      id: 4,
      title: "Teaching Assistant",
      company: "Tech Academy",
      period: "2019 - 2020",
      description:
        "Assisted in teaching web development fundamentals to students and provided one-on-one mentoring.",
      responsibilities: [
        "Assisted instructor in teaching HTML, CSS, and JavaScript fundamentals",
        "Conducted weekly workshops and tutorial sessions for students",
        "Provided one-on-one mentoring to students struggling with concepts",
        "Graded assignments and provided constructive feedback",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2017 - 2021",
      description:
        "Graduated with honors, specialized in web technologies and software engineering.",
    },
    {
      id: 2,
      degree: "Advanced React & NextJS Certification",
      institution: "Frontend Masters",
      period: "2022",
      description:
        "Completed intensive training on advanced React patterns, state management, and server-side rendering.",
    },
    {
      id: 3,
      degree: "Full Stack Development Bootcamp",
      institution: "Code Academy",
      period: "2021",
      description:
        "Intensive 12-week program covering modern web development stack, from database design to frontend frameworks.",
    },
  ];

  const skills = [
    { id: 1, name: "HTML5 & CSS3", level: 95 },
    { id: 2, name: "JavaScript (ES6+)", level: 90 },
    { id: 3, name: "React.js", level: 92 },
    { id: 4, name: "Next.js", level: 88 },
    { id: 5, name: "Node.js", level: 85 },
    { id: 6, name: "TypeScript", level: 82 },
    { id: 7, name: "Tailwind CSS", level: 90 },
    { id: 8, name: "MongoDB", level: 78 },
    { id: 9, name: "PostgreSQL", level: 75 },
    { id: 10, name: "GraphQL", level: 70 },
  ];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-[#ff3333]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff3333]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ff3333]/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
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
            My <span className="text-[#ff3333]">Resume</span>
          </motion.h1>

          <motion.p
            className="text-lg opacity-80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My professional journey and qualifications. Download my full resume
            or browse through my experience below.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/assets/resume.pdf"
              className="px-8 py-3 rounded-full bg-[#ff3333] text-white hover:shadow-lg hover:shadow-[#ff3333]/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
              download
            >
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Full Resume
            </Link>
          </motion.div>
        </motion.div>

        <div className="space-y-16">
          {/* Work Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-8 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Work Experience
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"></span>
            </motion.h2>

            <motion.div
              className="space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="grid md:grid-cols-[1fr_3fr] gap-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg hover:border-[#ff3333]/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div>
                    <span className="text-[#ff3333] block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-sm opacity-70">{exp.company}</p>
                  </div>
                  <div className="relative">
                    {/* Light orb effect */}
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <p className="mb-4 opacity-80">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-2 opacity-80">
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>

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
          </motion.section>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-8 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Education
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"></span>
            </motion.h2>

            <motion.div
              className="space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  className="grid md:grid-cols-[1fr_3fr] gap-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg hover:border-[#ff3333]/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                    borderColor: "rgba(255, 51, 51, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div>
                    <span className="text-[#ff3333] block mb-1">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-sm opacity-70">{edu.institution}</p>
                  </div>
                  <div className="relative">
                    <p className="opacity-80">{edu.description}</p>

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
          </motion.section>

          {/* Skills Section */}
          <motion.section
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
              Technical Skills
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"></span>
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                borderColor: "rgba(255, 51, 51, 0.3)",
                transition: { duration: 0.2 },
              }}
            >
              {skills.map((skill, index) => (
                <motion.div key={skill.id} variants={itemVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm opacity-70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 mb-4">
                    <motion.div
                      className="bg-[#ff3333] h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

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
              Interested in working together? Let's discuss how I can help your
              team.
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
    </div>
  );
}
