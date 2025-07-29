import React from "react";


const skillsData = [
  {
    icon: "fas fa-palette",

    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "React(Basic)",
      "Nextjs(Basic)",
    ],
  },
  {
    icon: "fas fa-cogs",
    title: "Backend",
    items: ["PHP", "REST API", "Server Integration"],
  },
  {
    icon: "fas fa-tools",
    title: "Tools & Technologies",

    items: [
      "Figma",
      "Photopea",
      "PHPStorm",
      "VS Code",
      "Postman",
      "Git",
      "GitHub",
      "Docker",
      "AI Tools"
    ],
  },
];

function Skill() {
  return (
    <section
      id="skills"
      className="bg-[#181c23] text-white py-16 px-4 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold  text-[#4fd1ff] mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {skillsData.map((skill) => (
            <div
              key={skill.icon} 
            //   keyprops
              className="bg-black rounded-xl shadow-lg p-6 hover:scale-105 transition duration-300 border border-transparent hover:border-[#4fd1ff]"
            >
              <div className="text-3xl mb-4">
                <i className={`${skill.icon} `}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-700 text-sm text-white px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
