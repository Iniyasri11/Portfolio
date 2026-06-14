import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { stagger, fadeUp } from '../utils/animations.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faTrophy,
  faGraduationCap,
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
        className="space-y-16"
      >
        {/* Heading */}
        <div className="text-center space-y-3">
            <center>
                
          <h2 className="text-4xl md:text-5xl font-bold text-[#2b1727]">
            Experiences
          </h2>
          <br></br>
          <p className="text-sm uppercase tracking-[0.35em] text-[#b15675]">
            Journey & Achievements
          </p>
          <br></br>
           <p className="max-w-2xl mx-auto text-[#5c3f52] leading-8">
            A timeline of my professional experiences, internships, hackathons, that
            have contributed to my growth as a developer.
          </p>
        </center>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div
            className="
              absolute
              left-6
              top-0
              bottom-0
              w-[2px]
              bg-[rgba(248,161,180,0.25)]
              hidden
              md:block
            "
          />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="
                  relative
                  grid
                  md:grid-cols-[80px_1fr]
                  gap-6
                  items-start
                "
              >
                {/* Timeline Node */}
                <div className="hidden md:flex justify-center">
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#f8a1b4]/25
                      bg-[rgba(255,246,248,0.12)]
                      text-[#b15675]
                    "
                  >
                    <FontAwesomeIcon
                      icon={getIcon(item.type)}
                    />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.25 },
                  }}
                  className="
                    rounded-[28px]
                    border
                    border-[#f8a1b4]/20
                    bg-[rgba(255,246,248,0.05)]
                    backdrop-blur-sm
                    p-7
                  "
                >
                  {/* Position */}
                  <h3 className="text-2xl font-semibold text-[#2b1727]">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="mt-2 font-medium text-[#b15675]">
                    {item.organization}
                  </p>

                  {/* Date + Location */}
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#7a6170]">
                    <span>{item.duration}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-[rgba(248,161,180,0.15)]" />

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {item.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="
                          flex
                          gap-3
                          text-[#5c3f52]
                          leading-7
                        "
                      >
                        <span className="text-[#b15675]">
                          →
                        </span>

                        <p>{point}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  {item.skills?.length > 0 && (
                    <>
                      <div className="my-6 h-px bg-[rgba(248,161,180,0.15)]" />

                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
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
                    </>
                  )}
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