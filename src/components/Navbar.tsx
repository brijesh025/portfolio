"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname()
  const [isSelected, setIsSelected] = useState("Home");
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
      label: "Project",
      path: "/work",
    },
  ];
  useEffect(() => {
    // Default to "Home" for the root path
    if (pathName === "/") {
      setIsSelected("Home");
      return;
    }
    
    // Find matching nav item for current path
    const matchingLink = navLinks.find(link => 
      pathName.startsWith(link.path) && link.path !== "/"
    );
    
    if (matchingLink) {
      setIsSelected(matchingLink.label);
    } else if (pathName === "/contact") {
      setIsSelected("Hire me");
    }
  }, [pathName]);
  return (
<nav className="flex justify-between items-center w-full py-4 px-6 md:px-12 sticky top-0 z-50 bg-background/80 backdrop-blur-md relative">
  <span className="absolute bottom-0 left-0 h-[2px] w-[50%] bg-gradient-to-r from-red-500 to-transparent"></span>
  <span className="absolute bottom-0 right-0 h-[2px] w-[50%] bg-gradient-to-r from-transparent to-red-500"></span>
      <div className="flex flex-row justify-between w-full">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          <span>Brijesh</span>
          <span className="text-primary">.</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.path}
            className="relative py-2 hover:!text-primary transition-all duration-300"
            onClick={() => setIsSelected(link.label)}
          >
            {link.label}
            {isSelected === link.label && (
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_var(--color-primary)]"
                layoutId="navbar-underline"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 20,
                }}
              />
            )}
          </Link>
        ))}
        <Link
          href="/contact"
          className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
          onClick={() => setIsSelected("Hire me")}
        >
          Contact Me
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
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden left-0 right-0 p-5 items-center flex flex-col space-y-4  backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="hover:text-primary z-500 transition-colors duration-300"
              onClick={() => {
                setIsSelected(link.label);
                setIsOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-15 py-2 text-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
            onClick={() => {
              setIsSelected("Hire me");
              setIsOpen(false);
            }}
          >
            Hire me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
