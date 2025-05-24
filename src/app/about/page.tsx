"use client";

import Image from "next/image";
import { useState } from "react";
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

const AboutPage = () => {
  const [profileImageError, setProfileImageError] = useState(false);

  return (
    <main className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 right-[10%] w-96 h-96 bg-gradient-to-br from-[#ff3333]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-[5%] w-80 h-80 bg-gradient-to-tr from-[#ff3333]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#ff3333]/20 to-transparent" />
      </div>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-[#ff3333]">Me</span>
          <motion.span
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ff3333] to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-4 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My Journey
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"></span>
            </motion.h2>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={itemVariants}>
                Hello! I&aposm Brijesh Singh, a passionate Full Stack Developer
                currently pursuing my B.Tech in Computer Science from IIIT
                Gwalior. My journey in technology began with a fascination for
                problem-solving, which led me to excel in competitive
                programming and algorithms.
              </motion.p>
              <motion.p variants={itemVariants}>
                With expertise in modern web technologies including React,
                Next.js, Node.js, and MongoDB, I specialize in creating robust
                and scalable applications. My recent focus has been on real-time
                collaborative systems, where I&aposve developed solutions that
                enable seamless team interactions.
              </motion.p>
              <motion.p variants={itemVariants}>
                As a Computer Science instructor at EXPGRADE ACADEMY, I&aposve had
                the privilege of sharing my knowledge with others, helping them
                build a strong foundation in programming concepts and practical
                development skills.
              </motion.p>
              <motion.p variants={itemVariants}>
                Beyond coding, I enjoy participating in hackathons, contributing
                to open-source projects, and continuously expanding my technical
                expertise through learning new technologies and frameworks.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 overflow-hidden rounded-xl">
              {/* Animated circles around image */}
              <motion.div
                className="absolute inset-0 border-2 border-[#ff3333]/30 rounded-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 border border-white/20 rounded-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-3 overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl">
                {profileImageError ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100/10 text-gray-300">
                    <div className="text-center">
                      <span className="block text-4xl mb-2">👨‍💻</span>
                      <span className="text-sm">Brijesh Singh</span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src="/images/profile.jpg"
                    alt="Brijesh Singh - Full Stack Developer"
                    fill
                    className="object-cover"
                    onError={() => setProfileImageError(true)}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff3333]/20 to-transparent opacity-30 mix-blend-overlay" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#ff3333]/30 transition-all duration-300 relative group"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
              borderColor: "rgba(255, 51, 51, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-medium mb-4 text-[#ff3333]">
              Frontend Development
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>React.js & Next.js</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Redux & Context API</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Material UI & Chakra UI</span>
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
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#ff3333]/30 transition-all duration-300 relative group"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
              borderColor: "rgba(255, 51, 51, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-medium mb-4 text-[#ff3333]">
              Backend Development
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Node.js & Express</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>MongoDB & MySQL</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Firebase</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>REST API Design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Socket.io</span>
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
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#ff3333]/30 transition-all duration-300 relative group"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
              borderColor: "rgba(255, 51, 51, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-medium mb-4 text-[#ff3333]">
              Tools & Others
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Git & GitHub</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Docker</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>AWS Basic Services</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Vercel & Netlify</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ff3333]">•</span>
                <span>Data Structures & Algorithms</span>
              </li>
            </ul>
            {/* Light reflection effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Personal Interests
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#ff3333]/30 transition-all duration-300 relative group"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
              borderColor: "rgba(255, 51, 51, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-medium mb-4 text-[#ff3333]">
              Beyond Coding
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#ff3333] mt-1">•</span>
                <span>
                  <strong>Competitive Programming:</strong> I regularly
                  participate in coding contests on platforms like Codeforces,
                  LeetCode, and HackerRank to sharpen my problem-solving skills.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff3333] mt-1">•</span>
                <span>
                  <strong>Open Source:</strong> I contribute to open-source
                  projects and enjoy collaborating with developers worldwide.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff3333] mt-1">•</span>
                <span>
                  <strong>Teaching:</strong> I find joy in mentoring aspiring
                  developers and helping them navigate their coding journey.
                </span>
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
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#ff3333]/30 transition-all duration-300 relative group"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
              borderColor: "rgba(255, 51, 51, 0.3)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-medium mb-4 text-[#ff3333]">
              Hobbies & Activities
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#ff3333] mt-1">•</span>
                <span>
                  <strong>Reading:</strong> I enjoy reading tech blogs, research
                  papers, and books on software architecture and design
                  patterns.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff3333] mt-1">•</span>
                <span>
                  <strong>Hackathons:</strong> Participating in hackathons
                  provides me with opportunities to collaborate, innovate, and
                  build solutions under time constraints.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff3333] mt-1">•</span>
                <span>
                  <strong>Learning:</strong> I&aposm constantly learning new
                  technologies and frameworks to stay updated with the
                  ever-evolving tech landscape.
                </span>
              </li>
            </ul>
            {/* Light reflection effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 relative inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.h2>
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-[#ff3333]/30 transition-all duration-300 relative"
          variants={itemVariants}
          whileHover={{
            boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
            borderColor: "rgba(255, 51, 51, 0.3)",
            transition: { duration: 0.2 },
          }}
        >
          <motion.p
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I&aposm always open to discussing new projects, opportunities, or
            partnerships. Whether you want to discuss a project, ask a question,
            or just say hi, feel free to reach out!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:coderrx@gmail.com"
              className="px-8 py-3 rounded-full bg-[#ff3333] text-white hover:shadow-lg hover:shadow-[#ff3333]/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/brijesh-singh-7859a2213/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ff3333]/30 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              Connect on LinkedIn
            </motion.a>
          </motion.div>
          {/* Light reflection effect */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
