import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EEEEEE] border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold ">Sunami Swayamprava Mohanty</h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating innovative web
              solutions and contributing to meaningful projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Skills", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(
                        `#${item.replace(/\s+/g, "").toLowerCase()}`
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:sunamiswayamprava2812@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FaEnvelope className="h-4 w-4" />
                sunamiswayamprava2812@gmail.com
              </a>
              <p className="text-muted-foreground">
                Acharya Vihar, Bhubaneswar-751022
              </p>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <section className="flex justify-center items-center gap-4 mb-4 md:mb-0">
            {/* GitHub */}
            <a
              className="group flex justify-center p-[0.3rem] rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              href="https://github.com/S28S12Mohanty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 15"
                className="w-5"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  fill="currentColor"
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                ></path>
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              className="group flex justify-center p-[0.3rem] rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#0a66c2] hover:to-[#004182]"
              href="https://linkedin.com/in/sunami-swayamprava-mohanty-791019252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                LinkedIn
              </span>
            </a>

            {/* Facebook */}
            <a
              className="group flex justify-center p-[0.3rem] rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#1877f2] hover:to-[#0d4ba0]"
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current stroke-current"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.28 0 268.5 0c-73.36 0-121.41 44.38-121.41 124.72v70.62H86.4V288h60.69v224h92.66V288z"></path>
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                Facebook
              </span>
            </a>

            {/* Twitter */}
            <a
              className="group flex justify-center p-[0.3rem] rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#1da1f2] hover:to-[#0d8ddb]"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M459.4 151.7c.3 4.5.3 9.1.3 13.6 0 138.7-105.6 298.9-298.9 298.9-59.5 0-114.8-17.4-161.5-47.4 8.4 1 16.8 1.3 25.5 1.3 49.4 0 94.8-16.8 130.8-45.7-46.1-1-84.8-31.2-98.1-72.8 6.4 1 12.8 1.9 19.5 1.9 9.4 0 18.7-1.3 27.6-3.6-48.4-9.7-84.7-52.4-84.7-103.5v-1.3c14.3 8 30.6 12.8 48.1 13.3-28.4-19-47.2-51.1-47.2-87.7 0-19.4 5.2-37.7 14.3-53.4 52.1 63.9 130.4 105.6 218.6 110.1-1.9-7.7-2.9-15.8-2.9-24.1 0-57.8 46.7-104.5 104.5-104.5 30 0 57.1 12.8 76.1 33.4 23.6-4.5 45.8-13.3 65.5-25.5-7.7 24.1-24.1 44.4-45.8 57.4 21-2.3 41.6-8.1 60.4-16.4-14.3 20.5-32.2 38.6-52.6 53.1z"></path>
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                Twitter
              </span>
            </a>

            {/* Instagram */}
            <a
              className="group flex justify-center p-[0.3rem] rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#e1306c] hover:to-[#c13584]"
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.35-30.35C293.26,124.71,256,124,224,124s-69.26.71-94.36,6.33a54,54,0,0,0-30.35,30.35C93.29,181.26,92.58,218.52,92.58,250.52s.71,69.26,6.33,94.36a54,54,0,0,0,30.35,30.35c25.1,5.62,62.36,6.33,94.36,6.33s69.26-.71,94.36-6.33a54,54,0,0,0,30.35-30.35c5.62-25.1,6.33-62.36,6.33-94.36S354.33,181.26,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.33-148a19.2,19.2,0,1,1,19.2-19.2A19.2,19.2,0,0,1,309.33,190Z"/>
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                Instagram
              </span>
            </a>
          </section>

          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>© {currentYear} Built with</span>
            <span className="h-4 w-4 text-red-500">♥</span>
            <span>by Sunami Swayamprava Mohanty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
