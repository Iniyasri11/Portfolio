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
    <div className="min-h-screen bg-transparent text-[#311b2f]">
      <div className="page-botanical-bg" aria-hidden="true">
        <span className="page-orbit page-orbit-one" />
        <span className="page-orbit page-orbit-two" />
        <span className="page-petal page-petal-one" />
        <span className="page-petal page-petal-two" />
        <span className="page-petal page-petal-three" />
        <span className="page-petal page-petal-four" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
