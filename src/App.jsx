import Navbar from './layout/Navbar.jsx'
import Footer from './layout/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-[#311b2f] pt-28">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
