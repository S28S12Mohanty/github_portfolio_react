import React from "react";

const experiences = [
  {
    title: "Full-Stack Developer (Intern)",
    company: "Wooble Software Pvt. Ltd.",
    date: "May 2025 – Present",
    location: "Bhubaneswar, Odisha",
    description:
      "Developed a real-time chat web application utilizing HTML, CSS, Tailwind CSS, Bootstrap and PHP. Designing and implementing applications using REST APIs.",
    tags: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "PHP", "REST API"],
    current: true,
  },
  {
    title: "Front-end Developer (Intern)",
    company: "IIIT, Bhubaneswar",
    date: "January 2025 – March 2025",
    location: "Bhubaneswar, Odisha",
    description:
      "Project Intern Position in MeitY sponsored research project entitled 'Information Security Education and Awareness III' project.",
    tags: ["HTML5", "CSS3", "JavaScript", "Security"],
    current: false,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center bg-[#181c23] py-20 px-2 scroll-mt-24"
    >
      <h2 className="text-5xl font-bold text-[#4fd1ff] mb-2 text-center">
        Experience
      </h2>
      <p className="text-gray-400 mb-12 text-lg text-center max-w-2xl">
        My professional journey in software development
      </p>
      <div className="relative flex flex-col items-center w-full max-w-3xl mx-auto">
        {/* Timeline vertical line on the left */}
        <div className="hidden sm:block absolute left-8 top-0 h-full w-px bg-[#4fd1ff]/30 z-0" />
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative w-full mb-10 z-10 flex flex-col md:flex-row items-start"
          >
            {/* Timeline dot on the left */}
            <div className="hidden sm:block absolute left-6 top-3 w-4 h-4 bg-[#4fd1ff] rounded-full border-2 border-[#23272f] z-10" />
            <div
              className={`ml-0 md:ml-20 w-full bg-[#181c23] ${exp.current ? 'border-2 border-[#4fd1ff]/30' : 'border border-gray-700'} rounded-lg shadow-md p-6 md:p-8`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                {exp.current && (
                  <span className="bg-[#009dff] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-2">
                <span className="flex items-center gap-1">
                  <i className="fas fa-building" /> {exp.company}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-calendar-alt" /> {exp.date}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-map-marker-alt" /> {exp.location}
                </span>
              </div>
              <p className="text-gray-300 mb-4 text-base">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#23272f] text-white text-xs px-3 py-1 rounded-full border border-[#23272f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
