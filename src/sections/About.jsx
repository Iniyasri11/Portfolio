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
      <motion.div variants={fadeUp} className="space-y-4">
        <center>
        <h2 className="text-4xl font-bold text-[#2b1727] md:text-5xl">
            About Me
        </h2>
        <br></br>
        <p className="text-sm uppercase tracking-[0.4em] text-[#b15675]">
          Getting to know me better
        </p>
        </center>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="space-y-6 text-[#5c3f52]"
      >
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

        <div className="pt-2">
          <p className="font-medium text-[#4f2f44]">
            Based in {personalInfo.location}
          </p>
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
        <motion.div
          key={item.title}
          whileHover={{
            y: -6,
            transition: { duration: 0.25 },
          }}
          className="
            rounded-[28px]
            border
            border-[#f8a1b4]/20
            bg-[rgba(255,246,248,0.08)]
            backdrop-blur-sm
            p-6
            transition-all
            duration-300
            hover:border-[#f8a1b4]/40
            hover:bg-[rgba(255,246,248,0.12)]
          "
        >
          <div
            className="
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#f8a1b4]/20
              bg-[rgba(249,197,209,0.12)]
              text-[#b15675]
            "
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-xl"
            />
          </div>

          <h3 className="mb-3 text-xl font-semibold text-[#2b1727]">
            {item.title}
          </h3>

          <p className="leading-7 text-[#5c3f52]">
            {item.description}
          </p>
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