"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

const works: WorkItem[] = [
  {
    id: "code-sync",
    title: "Code Sync",
    category: "Web Application",
    description:
      "A real-time collaborative code editor that allows multiple users to edit code simultaneously. Features include syntax highlighting, code compilation, and instant messaging.",
    image: "/images/works/code-sync.jpg",
    link: "https://github.com/coderrx/code-sync",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    id: "crpted",
    title: "CRPTED Platform",
    category: "Decentralized Finance",
    description:
      "A decentralized cryptocurrency platform for trading and exchanging various digital assets. Implements secure blockchain technology for all transactions.",
    image: "/images/works/crpted.jpg",
    link: "https://github.com/coderrx/crpted",
    tech: ["Next.js", "TypeScript", "Web3.js", "Solidity"],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features clean design, dark mode support, and optimized performance.",
    image: "/images/works/portfolio.jpg",
    link: "https://github.com/coderrx/portfolio",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
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

const FeaturedWorks = () => {
  // Use state to track image loading errors
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-[#ff3333]/10 to-transparent rounded-full blur-3xl opacity-70 -z-10" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-gradient-to-tl from-[#ff3333]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#ff3333]/20 to-transparent -z-10" />

      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="h-1 bg-[#ff3333] mb-6"
            />
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Featured <span className="text-[#ff3333]">Projects</span>
            </motion.h2>
            <motion.p
              className="opacity-80 max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Here are some of my recent projects that showcase my skills and
              expertise in web development and application design.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/work"
              className="px-6 py-3 rounded-full border border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#ff3333]/20 whitespace-nowrap"
            >
              View All Work
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {works.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative group"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                borderColor: "rgba(255, 51, 51, 0.3)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Light orb effect */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-full h-52 overflow-hidden">
                {/* Conditionally render image or fallback */}
                {imageErrors[work.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                    <div className="text-center p-4">
                      <span className="block text-3xl mb-2">📷</span>
                      <span className="text-sm">{work.title}</span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={work.image}
                    alt={`${work.title} - ${work.category} project screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(work.id)}
                    // Add a placeholder blurred image or color
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                )}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6"
                  whileHover={{ opacity: 0.9 }}
                >
                  <Link
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ff3333] transition-colors duration-300 transform group-hover:translate-x-2"
                  >
                    View Project →
                  </Link>
                </motion.div>
              </div>

              <div className="p-6 relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-[#ff3333] bg-[#ff3333]/10 px-2 py-1 rounded-full">
                    {work.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 relative inline-block">
                  {work.title}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-[#ff3333] to-transparent transition-transform duration-300"></span>
                </h3>
                <p className="opacity-80 mb-4 line-clamp-3">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {work.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-md transition-all duration-300 hover:bg-[#ff3333]/10 hover:border-[#ff3333]/30"
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
      </div>
    </section>
  );
};

export default FeaturedWorks;
