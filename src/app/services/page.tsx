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

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom websites built with modern technologies that are responsive, fast, and optimized for search engines.",
      icon: (
        <svg
          className="w-10 h-10 text-[#ff3333]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User-centered design that focuses on creating intuitive, accessible, and visually appealing interfaces.",
      icon: (
        <svg
          className="w-10 h-10 text-[#ff3333]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications that provide a native-like experience on both iOS and Android devices.",
      icon: (
        <svg
          className="w-10 h-10 text-[#ff3333]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description:
        "Custom online stores with secure payment processing, inventory management, and user-friendly interfaces.",
      icon: (
        <svg
          className="w-10 h-10 text-[#ff3333]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Performance Optimization",
      description:
        "Speed up your existing website or application with performance audits and optimizations.",
      icon: (
        <svg
          className="w-10 h-10 text-[#ff3333]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "SEO Optimization",
      description:
        "Improve your website's visibility in search engines with SEO audits and optimizations.",
      icon: (
        <svg
          className="w-10 h-10 text-[#ff3333]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
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
            My <span className="text-[#ff3333]">Services</span>
          </motion.h1>

          <motion.p
            className="text-lg opacity-80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I offer a range of services to help businesses and individuals
            establish a strong online presence. Here's what I can do for you:
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-lg hover:border-[#ff3333]/30 transition-all duration-300 relative group"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px rgba(255, 51, 51, 0.15)",
                borderColor: "rgba(255, 51, 51, 0.3)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Light orb effect */}
              <div className="absolute -right-10 -top-10 w-20 h-20 bg-gradient-to-bl from-[#ff3333]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="opacity-80 mb-6">{service.description}</p>

              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className="text-[#ff3333] hover:opacity-80 transition-all duration-300 flex items-center gap-2"
                >
                  Request Service
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>

              {/* Light reflection effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                whileHover={{ opacity: [0, 1, 0], x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
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
            Need a custom service not listed above? Let's discuss your project
            requirements.
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
