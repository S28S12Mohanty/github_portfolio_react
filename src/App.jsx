import { useState } from 'react'
import './App.css'
import Navbar from './components/nav.jsx';
import Hero from './components/hero.jsx';
import Skill from './components/skill.jsx';
import Experience from './components/experience.jsx';
import Project from './components/projects.jsx';
import Certifications from './components/certifications.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';


function App() {
  const [count, setCount] = useState(0)
  
  return (
   <>
   <Navbar/>
   <Hero />
   <Skill />
   <Experience />
   <Project />
   <Certifications />
   <Contact />
   <Footer />
   </>
  )
}

export default App
