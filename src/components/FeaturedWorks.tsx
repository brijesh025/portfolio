"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="opacity-80 max-w-2xl">
              Here are some of my recent projects that showcase my skills and
              expertise in web development and application design.
            </p>
          </div>
          <Link href="/work" className="btn-outline whitespace-nowrap">
            View All Work
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="group bg-secondary/5 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-52 overflow-hidden">
                {/* Conditionally render image or fallback */}
                {imageErrors[work.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                    <div className="text-center p-4">
                      <span className="block text-3xl mb-2">📷</span>
                      <span className="text-sm">{work.title}</span>
                      {/* This div shows when the image fails to load */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {work.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">{work.title}</h3>
                <p className="opacity-80 mb-4 line-clamp-3">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {work.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-secondary/20 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
