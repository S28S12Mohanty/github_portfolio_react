import React, { useState, useEffect } from "react";

function Navbar({ items }) {
  const listGroup = ["Home", "Skills", "Experience", "Projects", "Education", "Contact"];
  const menuItems = items && items.length > 0 ? items : listGroup;
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle click with smooth scroll + offset
  const handleClick = (item) => {
    setActive(item);
    setMenuOpen(false); // close menu on mobile
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(menuItems[i].toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = menuItems[i];
            break;
          }
        }
      }
      setActive(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <nav className="bg-[#181c23] bg-opacity-95 backdrop-blur-sm border-b border-gray-700 flex justify-around items-center px-6 py-4 fixed top-0 left-0 w-full z-50">
      <h1 className="text-[#4fd1ff] text-2xl font-bold">My Portfolio</h1>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`block w-7 h-0.5 bg-[#4fd1ff] mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-[#4fd1ff] mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-[#4fd1ff] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-8">
        {menuItems.map((item, idx) => (
          <li key={`${item}-${idx}`}>
            <button
              onClick={() => handleClick(item)}
              className={`relative text-white font-semibold hover:text-[#4fd1ff] transition-all duration-500 ease-in-out after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#4fd1ff] after:rounded-full after:transition-all after:duration-500 after:ease-in-out ${
                active === item
                  ? "after:w-full text-[#4fd1ff]"
                  : "after:w-0 hover:after:w-full"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      {/* Mobile menu */}
      <ul
        className={`md:hidden absolute top-full left-0 w-full bg-[#181c23] border-b border-gray-700 flex flex-col items-center gap-4 py-4 z-40 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {menuItems.map((item, idx) => (
          <li key={`${item}-mobile-${idx}`} className="w-full flex justify-center">
            <button
              onClick={() => handleClick(item)}
              className={`w-full py-2 text-lg text-white font-semibold hover:text-[#4fd1ff] transition-all duration-300 ${
                active === item ? 'text-[#4fd1ff]' : ''
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
