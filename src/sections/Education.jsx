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
        className="space-y-16"
      >
        <div className="section-header">
          <span className="section-eyebrow">Education</span>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-description">
            My academic foundation and certifications that have shaped my technical and professional growth.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-7">
          {education.map((edu, index) => (
            <motion.div key={index} variants={fadeUp} className="glass-card p-6 md:p-7">
              <div className="glass-card-content">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="glass-icon h-12 w-12 rounded-2xl">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-[#2b1727]">
                        {edu.institution}
                      </h3>

                      <p className="mt-2 font-semibold text-[#b15675]">
                        {edu.degree}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#7a6170]">
                        <span>{edu.duration}</span>
                        <span aria-hidden="true">|</span>
                        <span>{edu.score}</span>
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-sm text-[#7a6170]">
                        <FontAwesomeIcon icon={faLocationDot} className="text-[#b15675]" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="glass-pill shrink-0">
                    {edu.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto max-w-5xl">
          <hr className="soft-divider" />
        </div>

        <motion.div variants={fadeUp} className="mx-auto max-w-5xl space-y-9">
          <div className="section-header">
            <span className="section-eyebrow">Certifications</span>
            <h3 className="section-title text-[clamp(2rem,4vw,3.2rem)]">
              Professional Certifications
            </h3>
            <p className="section-description">
              Courses, certifications, and achievements that complement
              my academic journey and strengthen my technical foundation.
            </p>
          </div>

          <motion.div variants={stagger} className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={tag} className="glass-pill">
                <FontAwesomeIcon icon={faCertificate} className="text-xs text-[#b15675]" />
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
