"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Skills",
      path: "/skills",
    },
    {
      label: "Resume",
      path: "/resume",
    },
    {
      label: "Work",
      path: "/work",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full py-4 px-6 md:px-12 lg:px-20 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          <span>Brijesh</span>
          <span className="text-primary">.</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className="hover:text-primary transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="/skills"
          className="hover:text-primary transition-colors duration-300"
        >
          Skills
        </Link>
        <Link
          href="/resume"
          className="hover:text-primary transition-colors duration-300"
        >
          Resume
        </Link>
        <Link
          href="/work"
          className="hover:text-primary transition-colors duration-300"
        >
          Work
        </Link>
        <Link
          href="/contact"
          className="hover:text-primary transition-colors duration-300"
        >
          Contact
        </Link>
        <Link
          href="/contact"
          className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
        >
          Hire me
        </Link>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 p-5 bg-background border-b border-gray-200 dark:border-gray-800 flex flex-col space-y-4">
          <Link
            href="/"
            className="hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/skills"
            className="hover:text-primary transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="/resume"
            className="hover:text-primary transition-colors duration-300"
          >
            Resume
          </Link>
          <Link
            href="/work"
            className="hover:text-primary transition-colors duration-300"
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 text-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
          >
            Hire me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
