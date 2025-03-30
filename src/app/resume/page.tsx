import Link from "next/link";

export default function ResumePage() {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead developer for client projects, specializing in React and Node.js applications with a focus on performance optimization.",
      responsibilities: [
        "Architected and developed full-stack web applications using React, Next.js, and Node.js",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Optimized application performance, resulting in 40% faster load times",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      id: 2,
      title: "Front-End Developer Intern",
      company: "Web Design Studio",
      period: "Summer 2021",
      description:
        "Collaborated with the design team to implement responsive user interfaces and improve site accessibility.",
      responsibilities: [
        "Developed responsive UI components using React and Tailwind CSS",
        "Improved website accessibility to meet WCAG 2.1 AA standards",
        "Participated in UI/UX design sessions and implemented feedback",
        "Conducted browser compatibility testing and bug fixes",
      ],
    },
    {
      id: 3,
      title: "Freelance Web Developer",
      company: "E-commerce Startup",
      period: "2020 - 2021",
      description:
        "Developed custom e-commerce solutions for small businesses, including payment processing and inventory management.",
      responsibilities: [
        "Created custom e-commerce websites for small business clients",
        "Integrated payment gateways and implemented secure checkout processes",
        "Built inventory management systems and order processing workflows",
        "Provided ongoing support and maintenance for client websites",
      ],
    },
    {
      id: 4,
      title: "Teaching Assistant",
      company: "Tech Academy",
      period: "2019 - 2020",
      description:
        "Assisted in teaching web development fundamentals to students and provided one-on-one mentoring.",
      responsibilities: [
        "Assisted instructor in teaching HTML, CSS, and JavaScript fundamentals",
        "Conducted weekly workshops and tutorial sessions for students",
        "Provided one-on-one mentoring to students struggling with concepts",
        "Graded assignments and provided constructive feedback",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2017 - 2021",
      description:
        "Graduated with honors, specialized in web technologies and software engineering.",
    },
    {
      id: 2,
      degree: "Advanced React & NextJS Certification",
      institution: "Frontend Masters",
      period: "2022",
      description:
        "Completed intensive training on advanced React patterns, state management, and server-side rendering.",
    },
    {
      id: 3,
      degree: "Full Stack Development Bootcamp",
      institution: "Code Academy",
      period: "2021",
      description:
        "Intensive 12-week program covering modern web development stack, from database design to frontend frameworks.",
    },
  ];

  const skills = [
    { id: 1, name: "HTML5 & CSS3", level: 95 },
    { id: 2, name: "JavaScript (ES6+)", level: 90 },
    { id: 3, name: "React.js", level: 92 },
    { id: 4, name: "Next.js", level: 88 },
    { id: 5, name: "Node.js", level: 85 },
    { id: 6, name: "TypeScript", level: 82 },
    { id: 7, name: "Tailwind CSS", level: 90 },
    { id: 8, name: "MongoDB", level: 78 },
    { id: 9, name: "PostgreSQL", level: 75 },
    { id: 10, name: "GraphQL", level: 70 },
  ];

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Resume</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            My professional journey and qualifications. Download my full resume
            or browse through my experience below.
          </p>
          <div className="mt-8">
            <Link
              href="/assets/resume.pdf"
              className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300 inline-flex items-center gap-2"
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
              Download Full Resume
            </Link>
          </div>
        </div>

        <div className="space-y-16">
          {/* Work Experience Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              Work Experience
            </h2>
            <div className="space-y-10">
              {experiences.map((exp) => (
                <div key={exp.id} className="grid md:grid-cols-[1fr_3fr] gap-6">
                  <div>
                    <span className="text-primary block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-sm opacity-70">{exp.company}</p>
                  </div>
                  <div>
                    <p className="mb-4 opacity-80">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-2 opacity-80">
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              Education
            </h2>
            <div className="space-y-10">
              {education.map((edu) => (
                <div key={edu.id} className="grid md:grid-cols-[1fr_3fr] gap-6">
                  <div>
                    <span className="text-primary block mb-1">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-sm opacity-70">{edu.institution}</p>
                  </div>
                  <div>
                    <p className="opacity-80">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm opacity-70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 text-center">
            <p className="text-lg mb-8">
              Interested in working together? Let's discuss how I can help your
              team.
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
    </div>
  );
}
