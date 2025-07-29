import React from "react";
import { FaAward } from "react-icons/fa";

const education = [
  {
    title: "B.Sc. Computer Science",
    institution: "Lakshya Institute Of Technology, BBSR",
    department: "Computer Science Department",
    duration: "2022 – 2025",
    cgpa: "8.16",
  },
  {
    title: "Higher Secondary",
    institution: "Prananath Higher Secondary School, Khordha",
    department: "Science Department, CHSE Board",
    duration: "2020 – 2022",
    percentage: "70.84%",
  },
];

const certifications = [
  {
    title: "HTML5, CSS and JavaScript",
    org: "SoloLearn",
    tags: ["Online Certification"],
  },
  {
    title: "Ethical Hacking Bootcamp",
    org: "ISEA Project",
    tags: ["One Week Bootcamp", "Organizer"],
  },
];

function Certifications() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center bg-[#181c23] py-20 px-2 scroll-mt-24"
    >
      <h2 className="text-5xl font-bold text-[#4fd1ff] mb-2 text-center">
        Education & Certifications
      </h2>
      <p className="text-gray-400 mb-12 text-lg text-center max-w-2xl">
        My academic background and professional certifications
      </p>
      {/* Education */}
      <div className="w-full max-w-5xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-graduation-cap text-[#4fd1ff] text-2xl" />
          <span className="text-xl font-bold text-white">Education</span>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="flex-1 bg-[#181c23] rounded-xl border border-gray-700 p-4 md:p-6 shadow-md flex flex-col gap-2 min-w-[220px] max-w-xl relative"
            >
              <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                {edu.title}
              </h3>
              <div className="text-gray-300 text-sm mb-1">
                {edu.institution}
              </div>
              <div className="text-gray-400 text-xs mb-2">{edu.department}</div>
              <div className="flex items-center gap-4 text-gray-400 text-xs">
                <span className="flex items-center gap-1">
                  <i className="far fa-calendar-alt" /> {edu.duration}
                </span>
                {edu.cgpa && (
                  <span className="text-[#4fd1ff] font-semibold">
                    CGPA: {edu.cgpa}
                  </span>
                )}
                {edu.percentage && (
                  <span className="text-[#4fd1ff] font-semibold">
                    Percentage: {edu.percentage}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div className="w-full max-w-5xl mx-auto"> 
        <div className="flex items-center gap-3 mb-4">
          <FaAward className="text-[#4fd1ff] text-2xl" />
          <span className="text-xl font-bold text-white">Certifications</span>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex-1 bg-[#181c23] rounded-xl border border-gray-700 p-4 md:p-6 shadow-md flex flex-col gap-2 min-w-[220px] max-w-xl"
            >
              <h3 className="text-lg font-bold text-white mb-1">
                {cert.title}
              </h3>
              <div className="text-gray-300 text-sm mb-2">{cert.org}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#23272f] text-[#4fd1ff] text-xs px-3 py-1 rounded-full border border-[#23272f]"
                  >
                    {tag}
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

export default Certifications;
