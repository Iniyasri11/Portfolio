import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { stagger, fadeUp } from '../utils/animations.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faStar,
  faArrowRight,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'

function Projects() {
  const { projects } = portfolioData

  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)
  const hasDemo = (demo) => Boolean(demo && !demo.includes('your-project-demo'))

  return (
    <SectionWrapper id="projects">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-14"
      >
        <div className="section-header">
          <span className="section-eyebrow">Selected Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A collection of projects focused on Artificial Intelligence,
            IoT, Machine Learning, and practical real-world solutions.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.45fr_0.95fr]">
          <motion.article variants={fadeUp} className="glass-card p-7 lg:p-10">
            <div className="glass-card-content">
              <div className="space-y-5">
                <span className="glass-pill w-fit text-[#b15675]">
                  <FontAwesomeIcon icon={faStar} />
                  Featured Project
                </span>

                <h3 className="text-4xl font-bold leading-tight text-[#2b1727]">
                  {featuredProject.title}
                </h3>

                <p className="font-medium text-[#865164]">
                  {featuredProject.type} <span aria-hidden="true">|</span> {featuredProject.duration}
                </p>

                <p className="text-lg leading-9 text-[#5c3f52]">
                  {featuredProject.highlight}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {featuredProject.description.map((point, index) => (
                  <li key={index} className="flex gap-3 text-[#5c3f52]">
                    <FontAwesomeIcon icon={faArrowRight} className="mt-1 text-[#b15675]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#b15675]">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-3">
                  {featuredProject.techStack.map((tech) => (
                    <span key={tech} className="glass-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button primary"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    View Repository
                  </a>
                )}

                {hasDemo(featuredProject.demo) && (
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>

          <div className="space-y-6">
            {otherProjects.map((project) => (
              <motion.article key={project.title} variants={fadeUp} className="glass-card p-6">
                <div className="glass-card-content space-y-5">
                  <div>
                    <h4 className="text-2xl font-semibold leading-tight text-[#2b1727]">
                      {project.title}
                    </h4>

                    <p className="mt-2 text-sm font-medium text-[#865164]">
                      {project.type} <span aria-hidden="true">|</span> {project.duration}
                    </p>

                    <p className="mt-4 leading-8 text-[#5c3f52]">
                      {project.highlight}
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#b15675]">
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="glass-pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button px-4 py-2 text-sm"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        View Repository
                      </a>
                    )}

                    {hasDemo(project.demo) && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button px-4 py-2 text-sm"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Projects
