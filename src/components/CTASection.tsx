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

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-gradient-to-br from-[#ff3333]/10 to-transparent rounded-full blur-3xl opacity-70 -z-10" />
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-tl from-[#ff3333]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ff3333]/20 to-transparent -z-10" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
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

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Build Something{" "}
            <span className="text-[#ff3333]">Amazing</span> Together
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have a project in mind? I'm available for freelance work and open to
            discussing new opportunities. Let's turn your ideas into reality.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 text-lg rounded-full bg-[#ff3333] text-white hover:shadow-lg hover:shadow-[#ff3333]/20 transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/work"
                className="inline-block px-8 py-3 text-lg rounded-full border border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333]/10 hover:shadow-lg hover:shadow-[#ff3333]/10 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mt-24 pt-12 border-t border-white/10 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">Quick Contact Info</h3>
              <p className="opacity-80">
                Feel free to reach out through any of these channels
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 justify-center md:justify-end"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-[#ff3333]/30 hover:shadow-lg hover:shadow-[#ff3333]/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, x: 0 }}
              >
                <svg
                  className="w-5 h-5 text-[#ff3333]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:coderrx@gmail.com"
                  className="hover:text-[#ff3333] transition-colors"
                >
                  coderrx@gmail.com
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-[#ff3333]/30 hover:shadow-lg hover:shadow-[#ff3333]/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, x: 0 }}
              >
                <svg
                  className="w-5 h-5 text-[#ff3333]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+917984929911"
                  className="hover:text-[#ff3333] transition-colors"
                >
                  (+91) 7984929911
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-[#ff3333]/30 hover:shadow-lg hover:shadow-[#ff3333]/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, x: 0 }}
              >
                <svg
                  className="w-5 h-5 text-[#ff3333]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <a
                  href="https://www.linkedin.com/in/brijesh-singh-7859a2213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff3333] transition-colors"
                >
                  LinkedIn
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-[#ff3333]/30 hover:shadow-lg hover:shadow-[#ff3333]/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, x: 0 }}
              >
                <svg
                  className="w-5 h-5 text-[#ff3333]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <a
                  href="https://github.com/coderrx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff3333] transition-colors"
                >
                  GitHub
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
