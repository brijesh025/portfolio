"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

// Hardcoded top info as requested (do not source from JSON)
const CONTACT = {
  name: "Brijesh Singh",
  college: "IIIT Gwalior",
  location: "Lucknow, UP",
  phone: "+91 7984920911",
  email: "coderrrx@gmail.com",
  links: [
    { label: "Portfolio", href: "https://brijeshstack.vercel.app" },
    { label: "GitHub", href: "https://github.com/coderrrx-Brijesh" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/brijesh-singh-785a02213/",
    },
  ],
};

// Skills grouped without levels (as-is from PDF)
const SKILL_GROUPS: { category: string; items: string[] }[] = [
  {
    category: "Full-Stack Development",
    items: ["Next.js", "React", "Node.js"],
  },
  { category: "Real-Time Communication", items: ["WebSocket", "WebRTC"] },
  { category: "Databases", items: ["MongoDB", "SQL"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "Jenkins"] },
  { category: "Architectures", items: ["Monolithic", "Microservices"] },
  {
    category: "Programming Languages",
    items: ["C++", "Java", "JavaScript", "Python"],
  },
  { category: "Styling", items: ["HTML", "CSS", "Tailwind CSS"] },
  { category: "Version Control", items: ["Git", "GitHub", "Gitlab"] },
];

// Types for JSON-backed sections
type ResumeData = {
  summary?: string;
  experience?: {
    role: string;
    company: string;
    period: string;
    bullets: string[];
  }[];
  education?: {
    degree: string;
    institution: string;
    period: string;
    description?: string;
  }[];
  projects?: {
    name: string;
    tech: string[];
    description: string;
    link?: string;
  }[];
  achievements?: { title: string; details?: string }[];
};

export default function ResumePage() {
  const [data, setData] = useState<ResumeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/assets/resume.json")
      .then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch(() => setError("Failed to load resume data"))
      .finally(() => setLoading(false));
  }, []);

  const experiences = data?.experience ?? [];
  const education = data?.education ?? [];
  const projects = data?.projects ?? [];
  const achievements = data?.achievements ?? [];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-[#ff3333]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff3333]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ff3333]/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
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
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {CONTACT.name} — <span className="text-[#ff3333]">Resume</span>
          </motion.h1>

          <motion.p
            className="opacity-80 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {CONTACT.college} • {CONTACT.location}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 text-sm opacity-90 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a
              className="underline underline-offset-4"
              href={`mailto:${CONTACT.email}`}
            >
              {CONTACT.email}
            </a>
            <span className="opacity-50">|</span>
            <a
              className="underline underline-offset-4"
              href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
            >
              {CONTACT.phone}
            </a>
            {CONTACT.links.map((l, i) => (
              <span key={l.label} className="inline-flex items-center gap-3">
                <span className="opacity-50">|</span>
                <a
                  className="underline underline-offset-4 hover:text-[#ff4444]"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              </span>
            ))}
          </motion.div>

          <motion.p
            className="text-lg opacity-80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {data?.summary ??
              "My professional journey and qualifications. Download my full resume or browse through my experience below."}
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

          {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
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
              animate="visible"
            >
              {loading && (
                <>
                  {[0, 1].map((i) => (
                    <div
                      key={`skeleton-${i}`}
                      className="grid md:grid-cols-[1fr_3fr] gap-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg animate-pulse"
                    >
                      <div>
                        <div className="h-4 w-24 bg-white/10 rounded mb-2" />
                        <div className="h-6 w-40 bg-white/10 rounded mb-2" />
                        <div className="h-4 w-32 bg-white/10 rounded" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-white/10 rounded" />
                        <div className="h-3 w-11/12 bg-white/10 rounded" />
                        <div className="h-3 w-10/12 bg-white/10 rounded" />
                      </div>
                    </div>
                  ))}
                </>
              )}

              {!loading && experiences.length === 0 && (
                <p className="opacity-70">
                  No experience data found in /assets/resume.json.
                </p>
              )}

              {!loading &&
                experiences.map((exp, idx) => (
                  <motion.div
                    key={`${exp.company}-${idx}`}
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
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-sm opacity-70">{exp.company}</p>
                    </div>
                    <div className="relative">
                      {Array.isArray(exp.bullets) && exp.bullets.length > 0 ? (
                        <ul className="list-disc list-inside space-y-2 opacity-80">
                          {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="opacity-80">No details provided.</p>
                      )}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        whileHover={{
                          opacity: [0, 1, 0],
                          x: ["-100%", "100%"],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.section>

          {/* Technical Skills Section (after Experience, no levels) */}
          {SKILL_GROUPS.length > 0 && (
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
                Technical Skills
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"></span>
              </motion.h2>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {SKILL_GROUPS.map((group) => (
                  <motion.div
                    key={group.category}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg hover:border-[#ff3333]/30 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                      borderColor: "rgba(255, 51, 51, 0.3)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-[#ff3333]">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-[#ff3333]/10 text-[#ff3333] text-sm rounded-full border border-[#ff3333]/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
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
                {education.map((edu, idx) => (
                  <motion.div
                    key={`${edu.institution}-${idx}`}
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
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        whileHover={{
                          opacity: [0, 1, 0],
                          x: ["-100%", "100%"],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* Projects Section */}
          {projects.length > 0 && (
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
                Projects
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"></span>
              </motion.h2>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {projects.map((p, idx) => (
                  <motion.div
                    key={`${p.name}-${idx}`}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg hover:border-[#ff3333]/30 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                      borderColor: "rgba(255, 51, 51, 0.3)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                    <p className="opacity-80 mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-[#ff3333]/10 text-[#ff3333] text-sm rounded-full border border-[#ff3333]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        className="text-[#ff3333] underline underline-offset-4 hover:text-[#ff4444]"
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* Achievements Section */}
          {achievements.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-8 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Achievements
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff3333] to-transparent"></span>
              </motion.h2>

              <motion.div
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ul className="list-disc list-inside space-y-2 opacity-90">
                  {achievements.map((a, idx) => (
                    <li key={`${a.title}-${idx}`}>
                      <span className="font-medium">{a.title}</span>
                      {a.details ? (
                        <span className="opacity-80"> — {a.details}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
}
