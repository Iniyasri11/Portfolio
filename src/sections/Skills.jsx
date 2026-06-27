import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { stagger, fadeUp } from '../utils/animations.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faLaptopCode,
  faLayerGroup,
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
      title: 'Web Development',
      description: 'Responsive interfaces and application foundations',
      icon: faLaptopCode,
      items: skills.webDevelopment || [],
    },
    {
      title: 'Frameworks & Libraries',
      description: 'AI, data science, and backend frameworks',
      icon: faLayerGroup,
      items: skills.frameworks || [],
    },
    {
      title: 'Tools & Databases',
      description: 'Development tools and data storage',
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
        className="space-y-14"
      >
        <div className="section-header">
          <span className="section-eyebrow">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            Technologies, tools, and frameworks that I use to build
            modern applications and intelligent systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <motion.div key={category.title} variants={fadeUp} className="glass-card p-6">
              <div className="glass-card-content">
                <div className="mb-5 flex items-center gap-4">
                  <div className="glass-icon h-12 w-12 rounded-2xl">
                    <FontAwesomeIcon icon={category.icon} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#2b1727]">
                      {category.title}
                    </h3>

                    <p className="text-sm text-[#7a6170]">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill) => (
                    <span key={skill} className="glass-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="glass-card p-7 md:p-10">
          <div className="glass-card-content">
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-eyebrow">Growth Map</span>
                <h3 className="mt-4 text-3xl font-semibold text-[#2b1727]">
                  Proficiency Overview
                </h3>
              </div>
              <p className="max-w-lg text-[#5c3f52]">
                A practical snapshot of current strengths across data, AI, frontend, and backend development.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {proficiency.map((item) => (
                <div key={item.name} className="space-y-3">
                  <div className="flex justify-between gap-4">
                    <span className="font-medium text-[#4f2f44]">
                      {item.name}
                    </span>

                    <span className="font-semibold text-[#b15675]">
                      {item.value}%
                    </span>
                  </div>

                  <div className="proficiency-track">
                    <div
                      className="proficiency-fill"
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
      </motion.div>
    </SectionWrapper>
  )
}

export default Skills
