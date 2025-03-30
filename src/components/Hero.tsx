"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [profileImageError, setProfileImageError] = useState(false);

  return (
    <section className="flex flex-col items-center lg:flex-row lg:justify-between w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-2xl">
        <h3 className="text-lg md:text-xl mb-2">Full Stack Developer</h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hello I'm
          <span className="block text-primary mt-2">Brijesh Singh</span>
        </h1>
        <p className="text-base md:text-lg mb-8 opacity-80 max-w-lg">
          I am a second-year B.Tech IT student at IIIT Gwalior with a strong
          foundation in web technologies, competitive programming, and real-time
          application development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/assets/resume.pdf"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
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
            DOWNLOAD CV
          </Link>

          <div className="flex gap-4">
            <Link
              href="https://github.com/coderrx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/brijesh-singh-7859a2213/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="mailto:coderrx@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:border-primary hover:text-primary transition-colors duration-300"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">300+</h2>
            <p className="text-sm opacity-70">
              Students
              <br />
              Competed with
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">3+</h2>
            <p className="text-sm opacity-70">
              Projects
              <br />
              completed
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">2nd</h2>
            <p className="text-sm opacity-70">
              At
              <br />
              TechAthalon
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">1st</h2>
            <p className="text-sm opacity-70">
              IIIT
              <br />
              Coding Contest
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-12 lg:mt-0">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary relative">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {profileImageError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <div className="text-center text-gray-500">
                  <span className="block text-5xl mb-2">👨‍💻</span>
                  <span className="text-lg font-semibold">Brijesh Singh</span>
                </div>
              </div>
            ) : (
              <Image
                src="/images/brijesh-profile.jpg"
                alt="Brijesh Singh - Full Stack Developer"
                width={384}
                height={384}
                className="object-cover w-full h-full"
                priority
                onError={() => setProfileImageError(true)}
              />
            )}
          </div>
        </div>
        <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary"></div>
      </div>
    </section>
  );
};

export default Hero;
