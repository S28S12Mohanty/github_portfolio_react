import React from "react";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A comprehensive portfolio website showcasing projects, technical skills, and achievements in web development. Built with modern frontend technologies and responsive design principles.",
    features: [
        "Responsive design across all devices",
        "Interactive UI with smooth animations", 
        "Project showcase with detailed descriptions",
        "Contact form with validation"
      ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Responsive Design",
    ],
    liveDemo: "https://gregarious-pudding-d9c894.netlify.app/",
    code: "https://github.com/S28S12Mohanty/personal-portfolio-site",
  },
  {
    title: "Wooble - Social Networking Platform",
    description:
      "A comprehensive full-stack web platform combining social networking and user portfolio features. Implemented secure user authentication, email verification, and password recovery using PHP and PHPMaile",
    features: [
        "Secure user authentication system",
        "Email verification and password recovery",
        "Social networking feeds and interactions",
        "Portfolio showcase functionality",
        "Modern responsive UI with Tailwind CSS",
        "RESTful API architecture"
      ],
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "PHP",
      "REST API",
    ],
    liveDemo: null,
    code: "https://github.com/sunamiswayamprava2812/Wooble_repository-main-",
  },
];

function Project() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-[#181c23] py-20 px-2 scroll-mt-24"
    >
      <h2 className="text-5xl font-bold text-[#4fd1ff] mb-2 text-center">
        Featured Projects
      </h2>
      <p className="text-gray-400 mb-12 text-lg text-center max-w-2xl">
        A showcase of my development work and technical capabilities
      </p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex-1 bg-[#181c23] rounded-xl shadow-lg p-6 md:p-8 border border-[#23272f] flex flex-col justify-between min-w-[260px] max-w-xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(79,209,255,0.15)] hover:border-[#4fd1ff]"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 text-base">
                {project.description}
              </p>
                <div className="relative mb-3">
                  <h4 className="font-semibold mb-3 text-white">Key Features:</h4>
                  <ul className="space-y-2 text-gray-300">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-[#4fd1ff] mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              <div className="mb-6">
                <span className="font-semibold text-gray-200">
                  Technologies:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#181c23] text-[#4fd1ff] text-xs px-3 py-1 rounded-full border border-[#23272f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {project.liveDemo && idx === 0 && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#09b3fa] hover:bg-[#38bdf8] text-white font-semibold px-5 py-2 rounded-lg text-sm transition flex items-center gap-2"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              )}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#181c23] border border-[#23272f] hover:bg-[#23272f] text-white font-semibold px-5 py-2 rounded-lg text-sm transition flex items-center gap-2"
              >
                <i className="fas fa-code"></i> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
