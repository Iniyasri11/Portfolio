import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { stagger, fadeUp } from '../utils/animations.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faTrophy,
  faGraduationCap,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

function Experience() {
  const { experience } = portfolioData

  const getIcon = (type) => {
    switch (type) {
      case 'achievement':
        return faTrophy

      case 'education':
        return faGraduationCap

      default:
        return faBriefcase
    }
  }

  return (
    <SectionWrapper id="experience">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-14"
      >
        <div className="section-header">
          <span className="section-eyebrow">Journey & Achievements</span>
          <h2 className="section-title">Experiences</h2>
          <p className="section-description">
            A timeline of my professional experiences, internships, hackathons, that
            have contributed to my growth as a developer.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-transparent via-[#f8a1b4]/60 to-transparent shadow-[0_0_24px_rgba(248,161,180,0.75)] md:block" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative grid items-start gap-6 md:grid-cols-[80px_1fr]"
              >
                <div className="hidden justify-center md:flex">
                  <div className="glass-icon relative z-10 h-14 w-14">
                    <FontAwesomeIcon icon={getIcon(item.type)} />
                  </div>
                </div>

                <motion.div className="glass-card p-6 md:p-7">
                  <div className="glass-card-content">
                    <h3 className="text-2xl font-semibold text-[#2b1727]">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-medium text-[#b15675]">
                      {item.organization}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#7a6170]">
                      <span>{item.duration}</span>
                      <span aria-hidden="true">|</span>
                      <span>{item.location}</span>
                    </div>

                    <hr className="soft-divider my-6" />

                    <div className="space-y-3">
                      {item.points.map((point, idx) => (
                        <div key={idx} className="flex gap-3 leading-7 text-[#5c3f52]">
                          <FontAwesomeIcon icon={faArrowRight} className="mt-1 text-sm text-[#b15675]" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>

                    {item.skills?.length > 0 && (
                      <>
                        <hr className="soft-divider my-6" />

                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span key={skill} className="glass-pill">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Experience
