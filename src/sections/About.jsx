import { motion } from 'framer-motion'
import SplitSection from '../components/SplitSection.jsx'
import portfolioData from '../data/portfolioData.js'
import { fadeUp, stagger } from '../utils/animations.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBrain,
  faCode,
  faMicrochip,
  faChartLine,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

function About() {
  const { personalInfo } = portfolioData

  const expertise = [
    {
      title: 'Machine Learning',
      description:
        'Building intelligent solutions using machine learning, deep learning, and data-driven approaches.',
      icon: faBrain,
    },
    {
      title: 'Web Development',
      description:
        'Developing responsive and scalable web applications using modern frontend and backend technologies.',
      icon: faCode,
    },
    {
      title: 'IoT Systems',
      description:
        'Creating smart systems by integrating sensors, hardware, and software for practical applications.',
      icon: faMicrochip,
    },
    {
      title: 'Data Science',
      description:
        'Analyzing data, extracting insights, and applying predictive models to support decision making.',
      icon: faChartLine,
    },
  ]

  const left = (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8"
    >
      <motion.div variants={fadeUp} className="section-header mx-0 justify-items-start text-left">
        <span className="section-eyebrow">Getting to know me better</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-description">
          A curious builder blending AI, data science, web development, and IoT into practical digital products.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="space-y-6 text-[#5c3f52]">
        <p className="text-lg leading-9">
          I'm an {personalInfo.title.toLowerCase()} with a strong interest
          in building practical software solutions that solve real-world
          problems and create meaningful impact.
        </p>

        <p className="text-lg leading-9">
          My experience includes machine learning, web development,
          data science, and IoT applications, where I enjoy combining
          different technologies to build complete and scalable systems.
        </p>

        <p className="text-lg leading-9">
          I continuously explore new technologies, work on hands-on
          projects, and strengthen my problem-solving skills through
          practical implementation and collaborative learning.
        </p>

        <div className="glass-pill w-fit">
          <FontAwesomeIcon icon={faLocationDot} className="text-[#b15675]" />
          <span>Based in {personalInfo.location}</span>
        </div>
      </motion.div>
    </motion.div>
  )

  const right = (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      {expertise.map((item) => (
        <motion.div key={item.title} className="glass-card p-6">
          <div className="glass-card-content">
            <div className="glass-icon mb-5 h-14 w-14 rounded-2xl">
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#2b1727]">
              {item.title}
            </h3>

            <p className="leading-7 text-[#5c3f52]">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <SplitSection
      id="about"
      left={left}
      right={right}
      reverse={false}
      sticky={null}
    />
  )
}

export default About
