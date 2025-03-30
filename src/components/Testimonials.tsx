"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Kumar",
    role: "Project Manager",
    company: "TechSolutions Inc.",
    image: "/images/testimonials/testimonial-1.jpg",
    content:
      "Working with Brijesh was a great experience. His technical expertise in React and Node.js helped us deliver our project ahead of schedule. He has a keen eye for detail and is excellent at problem-solving.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Lead Developer",
    company: "InnovateTech",
    image: "/images/testimonials/testimonial-2.jpg",
    content:
      "Brijesh is one of the most dedicated developers I've worked with. His approach to real-time applications is innovative, and he consistently delivers high-quality code. His commitment to best practices elevates the entire team's performance.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Co-founder",
    company: "CodeCraft",
    image: "/images/testimonials/testimonial-3.jpg",
    content:
      "We hired Brijesh for a complex web application project, and he exceeded our expectations. His full-stack skills allowed him to tackle both frontend and backend challenges efficiently. I particularly appreciated his clear communication throughout the development process.",
  },
  {
    id: 4,
    name: "Neha Patel",
    role: "UX Designer",
    company: "DesignHub",
    image: "/images/testimonials/testimonial-4.jpg",
    content:
      "As a designer, I've worked with many developers, but Brijesh stands out for his attention to design details and ability to translate mock-ups into pixel-perfect interfaces. He also suggested valuable improvements that enhanced the user experience.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handleImageError = (id: number) => {
    setImageError((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            What people say about working with me and the results of our
            collaboration.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl opacity-20 rounded-3xl -z-10" />

          <div className="relative overflow-hidden rounded-2xl bg-secondary/5 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                <div className="absolute inset-1 rounded-full bg-secondary/5 overflow-hidden">
                  {imageError[testimonials[activeIndex].id] ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                      <span className="text-2xl">👤</span>
                    </div>
                  ) : (
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={`${testimonials[activeIndex].name}, ${testimonials[activeIndex].role} at ${testimonials[activeIndex].company}`}
                      fill
                      className="object-cover"
                      onError={() =>
                        handleImageError(testimonials[activeIndex].id)
                      }
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                  )}
                </div>
              </div>

              <div className="flex-1">
                <blockquote className="text-lg md:text-xl italic mb-6">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                <div>
                  <p className="font-semibold">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm opacity-80">
                    {testimonials[activeIndex].role},{" "}
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-5">
              <button
                onClick={handlePrevClick}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-primary hover:bg-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-5">
              <button
                onClick={handleNextClick}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-primary hover:bg-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 5L12.5 10L7.5 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
