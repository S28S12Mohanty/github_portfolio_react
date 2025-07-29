import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="h-5 w-5 text-cyan-400" />, label: "Email", value: "sunamiswayamprava2812@gmail.com", href: "mailto:sunamiswayamprava2812@gmail.com"
    },
    {
      icon: <FaPhone className="h-5 w-5 text-cyan-400" />, label: "Phone", value: "+91-707746****", href: "tel:+917077461297"
    },
    {
      icon: <FaMapMarkerAlt className="h-5 w-5 text-cyan-400" />, label: "Location", value: "Acharya Vihar, Bhubaneswar-751022", href: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="h-5 w-5 text-cyan-400" />, label: "GitHub", href: "https://github.com/S28S12Mohanty", username: "S28S12Mohanty"
    },
    {
      icon: <FaLinkedin className="h-5 w-5 text-cyan-400" />, label: "LinkedIn", href: "https://linkedin.com/in/sunami-swayamprava-mohanty-791019252", username: "sunami-swayamprava-mohanty"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#181c23] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4fd1ff]">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's connect and discuss opportunities for collaboration
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="p-4 bg-[#23272f] rounded-lg border border-[#23272f] hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                    <div className="p-2 bg-[#1e293b] rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-white hover:text-cyan-400 transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#23272f] rounded-lg border border-[#23272f] hover:shadow-lg transition-all duration-300 hover:bg-[#181c23]"
                  >
                    {link.icon}
                    <div>
                      <p className="text-sm text-gray-400">{link.label}</p>
                      <p className="text-sm text-white">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* Call to Action */}
            <div className="flex flex-col justify-center">
              <div className="p-8 md:p-8 mt-[3.2rem] bg-[#23272f] rounded-lg border border-[#23272f] text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Ready to Work Together?
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  I'm always interested in discussing new opportunities, interesting projects, and potential collaborations. Let's create something amazing together!
                </p>
                <form className="space-y-4 flex flex-col items-center" onSubmit={e => { e.preventDefault(); }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full md:w-96 px-4 py-2 rounded-lg border border-[#23272f] bg-[#181c23] text-white focus:outline-none focus:border-[#4fd1ff] mb-2"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full md:w-96 px-4 py-2 rounded-lg border border-[#23272f] bg-[#181c23] text-white focus:outline-none focus:border-[#4fd1ff] mb-2"
                    required
                  />
                  <button
                    type="submit"
                    className="block w-full md:w-96 bg-[#09b3fa] hover:bg-[#38bdf8] text-white font-semibold px-5 py-3 rounded-lg text-base transition flex items-center justify-center gap-2"
                  >
                    <FaEnvelope className="h-5 w-5 mr-2" />
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;