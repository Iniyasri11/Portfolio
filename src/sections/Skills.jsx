import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { stagger } from '../utils/animations.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faLaptopCode,
  faServer,
  faDatabase,
  faBrain,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'

function Skills() {
  const { skills } = portfolioData

  const categories = [
    {
      title: 'Languages',
      description: 'Core programming languages',
      icon: faCode,
      items: skills.languages || [],
    },
    {
      title: 'Frontend',
      description: 'Web development & UI',
      icon: faLaptopCode,
      items: skills.webDevelopment || [],
    },
    {
      title: 'Backend',
      description: 'Frameworks & server-side technologies',
      icon: faServer,
      items: skills.frameworks || [],
    },
    {
      title: 'Databases',
      description: 'Data storage & management',
      icon: faDatabase,
      items: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'AI / ML',
      description: 'Machine learning & data science',
      icon: faBrain,
      items: [
        'TensorFlow',
        'Scikit-Learn',
        'Pandas',
        'NumPy',
        'OpenCV',
      ],
    },
    {
      title: 'Tools',
      description: 'Development tools & utilities',
      icon: faScrewdriverWrench,
      items: skills.tools || [],
    },
  ]

  const proficiency = [
    {
      name: 'Python & Data Science',
      value: 85,
    },
    {
      name: 'Machine Learning',
      value: 80,
    },
    {
      name: 'Frontend Development',
      value: 75,
    },
    {
      name: 'Backend Development',
      value: 78,
    },
  ]

  return (
    <SectionWrapper id="skills">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-16"
      >
        {/* Heading */}
        <div className="text-center space-y-3">
        <center>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2b1727]">
            Technical Skills
          </h2>          
            <br></br>
          <p className="text-sm uppercase tracking-[0.35em] text-[#b15675]">
            Expertise
          </p>
            <br></br>
          <p className="max-w-2xl mx-auto text-[#5c3f52] leading-8">
            Technologies, tools, and frameworks that I use to build
            modern applications and intelligent systems.
          </p>
          </center>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="
                rounded-[28px]
                border
                border-[#f8a1b4]/20
                bg-[rgba(255,246,248,0.05)]
                backdrop-blur-sm
                p-6
                transition-all
                duration-300
                hover:border-[#f8a1b4]/40
                hover:bg-[rgba(255,246,248,0.08)]
              "
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#f8a1b4]/20
                    bg-[rgba(249,197,209,0.12)]
                    text-[#b15675]
                  "
                >
                  <FontAwesomeIcon icon={category.icon} />
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-[#2b1727]">
                    {category.title}
                  </h3>

                  <p className="text-sm text-[#7a6170]">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-[#f8a1b4]/20
                      bg-[rgba(249,197,209,0.06)]
                      px-3
                      py-1.5
                      text-sm
                      text-[#5c3f52]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency */}
        <div
          className="
            rounded-[32px]
            border
            border-[#f8a1b4]/20
            bg-[rgba(255,246,248,0.05)]
            p-8
            md:p-10
          "
        >
          <h3 className="text-2xl font-semibold text-[#2b1727] mb-8">
            Proficiency Overview
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {proficiency.map((item) => (
              <div key={item.name} className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-[#4f2f44]">
                    {item.name}
                  </span>

                  <span className="text-[#b15675] font-semibold">
                    {item.value}%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-[rgba(249,197,209,0.12)] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#f8a1b4]"
                    style={{
                      width: `${item.value}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Skills