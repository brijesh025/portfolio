"use client";

import Image from "next/image";
import { useState } from "react";

const AboutPage = () => {
  const [profileImageError, setProfileImageError] = useState(false);

  return (
    <main className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <div className="space-y-4">
              <p>
                Hello! I'm Brijesh Singh, a passionate Full Stack Developer
                currently pursuing my B.Tech in Computer Science from IIIT
                Gwalior. My journey in technology began with a fascination for
                problem-solving, which led me to excel in competitive
                programming and algorithms.
              </p>
              <p>
                With expertise in modern web technologies including React,
                Next.js, Node.js, and MongoDB, I specialize in creating robust
                and scalable applications. My recent focus has been on real-time
                collaborative systems, where I've developed solutions that
                enable seamless team interactions.
              </p>
              <p>
                As a Computer Science instructor at EXPGRADE ACADEMY, I've had
                the privilege of sharing my knowledge with others, helping them
                build a strong foundation in programming concepts and practical
                development skills.
              </p>
              <p>
                Beyond coding, I enjoy participating in hackathons, contributing
                to open-source projects, and continuously expanding my technical
                expertise through learning new technologies and frameworks.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 overflow-hidden rounded-xl border-4 border-primary/20">
              {profileImageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-500">
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
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/5 rounded-xl p-6 hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-medium mb-4 text-primary">
              Frontend Development
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>React.js & Next.js</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Redux & Context API</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Material UI & Chakra UI</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary/5 rounded-xl p-6 hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-medium mb-4 text-primary">
              Backend Development
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Node.js & Express</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>MongoDB & MySQL</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Firebase</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>REST API Design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Socket.io</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary/5 rounded-xl p-6 hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-medium mb-4 text-primary">
              Tools & Others
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Git & GitHub</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Docker</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>AWS Basic Services</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Vercel & Netlify</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Data Structures & Algorithms</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Personal Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary/5 rounded-xl p-6">
            <h3 className="text-xl font-medium mb-4 text-primary">
              Beyond Coding
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>Competitive Programming:</strong> I regularly
                  participate in coding contests on platforms like Codeforces,
                  LeetCode, and HackerRank to sharpen my problem-solving skills.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>Open Source:</strong> I contribute to open-source
                  projects and enjoy collaborating with developers worldwide.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>Teaching:</strong> I find joy in mentoring aspiring
                  developers and helping them navigate their coding journey.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary/5 rounded-xl p-6">
            <h3 className="text-xl font-medium mb-4 text-primary">
              Hobbies & Activities
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>Reading:</strong> I enjoy reading tech blogs, research
                  papers, and books on software architecture and design
                  patterns.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>Hackathons:</strong> Participating in hackathons
                  provides me with opportunities to collaborate, innovate, and
                  build solutions under time constraints.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>Learning:</strong> I'm constantly learning new
                  technologies and frameworks to stay updated with the
                  ever-evolving tech landscape.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
        <div className="bg-secondary/5 rounded-xl p-8">
          <p className="mb-6">
            I'm always open to discussing new projects, opportunities, or
            partnerships. Whether you want to discuss a project, ask a question,
            or just say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:coderrx@gmail.com" className="btn-primary">
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/brijesh-singh-7859a2213/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
