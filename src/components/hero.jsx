import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { WiCloudDown } from "react-icons/wi";

const Hero = () => {
  const fullName = {
    first: "SUNAMI SWAYAMPRAVA",
    last: "MOHANTY",
  };

  const socialLinks = [
    {
      href: "https://github.com/S28S12Mohanty",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/sunami-swayamprava-mohanty-791019252",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "mailto:sunamiswayamprava2812@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
  ];

  return (
    <header
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-10 bg-[#181c23]"
      id="Home"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-snug sm:leading-tight">
        <span className="text-[#4fd1ff] tracking-wide text-4xl sm:text-5xl md:text-6xl block">
          {fullName.first}
        </span>
        <span className="text-white font-extrabold tracking-wide text-4xl sm:text-5xl md:text-6xl block">
          {fullName.last}
        </span>
      </h1>

      <h2 className="text-[#b0b8c1] text-lg sm:text-xl font-medium mb-3">
        Full Stack Developer
      </h2>

      <p className="text-[#b0b8c1] text-sm sm:text-base md:text-lg mb-8 max-w-md sm:max-w-[43rem] px-2">
        Building responsive web applications with modern technologies.
        <br />
        Experienced in React, PHP, and creating user-focused solutions that
        bridge frontend elegance with backend efficiency.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 w-full sm:w-auto">
        <a
          href="#projects"
          className="w-full sm:w-auto text-center bg-[#40b5df] text-[#181c23] font-semibold py-3 px-6 rounded-lg text-sm hover:bg-[#38bdf8] transition"
        >
          View My Work
        </a>
        <a
          href="/SUNAMI_RESUME.pdf"
          className="w-full sm:w-auto text-center border border-[#4fd1ff] text-white font-semibold py-3 px-6 rounded-lg text-sm hover:bg-[#4fd1ff] hover:text-[#181c23] transition"
        >
          Download CV
        </a>
      </div>

      <div className="flex gap-6 justify-center">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-[#b0b8c1] text-2xl hover:text-[#4fd1ff] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Hero;
