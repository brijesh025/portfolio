import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  const projects = [
    {
      id: 1,
      title: "FurniShop E-commerce",
      category: "Web Development",
      technologies: ["HTML 5", "CSS 3", "JavaScript"],
      description:
        "An online furniture store with a modern design, featuring product filtering, cart functionality, and secure checkout.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "A full-stack task management application with user authentication, task creation, and real-time updates.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      category: "Mobile App",
      technologies: ["React Native", "Firebase"],
      description:
        "A cross-platform mobile app for tracking workouts, setting goals, and monitoring fitness progress.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "Web Application",
      technologies: ["JavaScript", "API Integration"],
      description:
        "A weather dashboard that fetches real-time data from a weather API and displays it with a clean, intuitive interface.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Web Development",
      technologies: ["Next.js", "Tailwind CSS"],
      description:
        "A personal portfolio website showcasing skills, experience, and projects with a modern, responsive design.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 6,
      title: "Recipe Finder",
      category: "Web Application",
      technologies: ["React", "Redux", "API Integration"],
      description:
        "A recipe search application that allows users to find recipes based on ingredients, dietary restrictions, and cuisine type.",
      imageUrl: "/project-placeholder.jpg",
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Work</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            A selection of my recent projects. Each project represents a unique
            challenge and showcases different skills and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-secondary/5 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  {/* Replace with actual project images */}
                  <svg
                    className="w-16 h-16 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="bg-background text-white px-4 py-2 rounded border border-white hover:bg-white/10 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="opacity-80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/10 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-8">
            Want to see more of my work or discuss a potential project?
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
