import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { stagger, fadeUp, tag } from '../utils/animations.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faLocationDot,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons'

function Education() {
  const { education, certifications } = portfolioData

  return (
    <SectionWrapper id="education">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-20"
      >
        {/* Main Header */}
        <div className="text-center space-y-3"> 
            <center> 
                <h2 className="text-4xl md:text-5xl font-bold text-[#2b1727]"> Academic Journey </h2> 
                <br></br>
                 <p className="text-sm uppercase tracking-[0.35em] text-[#b15675]"> 
                    Education 
                </p> 
                <br></br> 
                <p className="max-w-2xl mx-auto text-[#5c3f52] leading-8"> 
                    My academic foundation and certifications that have shaped my technical and professional growth. 
                </p> 
            </center>
        </div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
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
              <div className="flex flex-col md:flex-row md:justify-between gap-6">
                {/* Left Side */}
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#f8a1b4]/20
                      bg-[rgba(249,197,209,0.08)]
                      text-[#b15675]
                    "
                  >
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#2b1727]">
                      {edu.institution}
                    </h3>

                    <p className="mt-2 text-[#b15675] font-medium">
                      {edu.degree}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#7a6170]">
                      <span>{edu.duration}</span>
                      <span>•</span>
                      <span>{edu.score}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-[#7a6170]">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div>
                  <span
                    className={`
                      inline-flex
                      items-center
                      rounded-full
                      px-4
                      py-2
                      text-xs
                      font-medium
                      border
                      ${
                        edu.status === 'ongoing'
                          ? 'bg-[rgba(248,161,180,0.12)] text-[#b15675] border-[#f8a1b4]/20'
                          : 'bg-[rgba(249,197,209,0.08)] text-[#5c3f52] border-[#f8a1b4]/15'
                      }
                    `}
                  >
                    {edu.status === 'ongoing'
                      ? 'Ongoing'
                      : 'Completed'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto">
          <div className="h-px bg-[rgba(248,161,180,0.15)]" />
        </div>

        {/* Certifications Subsection */}
        <motion.div
          variants={fadeUp}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center space-y-4 mb-10">
            <center>

            <h3 className="text-4xl font-bold text-[#2b1727]">
              Professional Certifications
            </h3>

            <p className="max-w-2xl mx-auto text-[#5c3f52] leading-8">
              Courses, certifications, and achievements that complement
              my academic journey and strengthen my technical foundation.
            </p>
            </center>
          </div>

          <motion.div
            variants={stagger}
            className="flex flex-wrap justify-center gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={tag}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#f8a1b4]/20
                  bg-[rgba(249,197,209,0.08)]
                  px-5
                  py-3
                  text-[#5c3f52]
                "
              >
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="text-[#b15675]"
                />

                <span>{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Education