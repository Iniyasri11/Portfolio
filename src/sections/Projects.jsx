import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { stagger, fadeUp } from '../utils/animations.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faStar,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

function Projects() {
  const { projects } = portfolioData

  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)

  return (
    <SectionWrapper id="projects">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-14"
      >
        {/* Section Header */}
        <div className="text-center space-y-4">
            <center>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2b1727]">
            Projects
          </h2>
          <br></br>
          <p className="text-sm uppercase tracking-[0.35em] text-[#b15675]">
            Selected Work
          </p>
            <br></br>
          <p className="max-w-3xl mx-auto text-[#5c3f52] leading-8">
            A collection of projects focused on Artificial Intelligence,
            IoT, Machine Learning, and practical real-world solutions.
          </p>
          </center>
        </div>

        {/* Projects Layout */}
        <div className="grid gap-8 xl:grid-cols-[1.6fr_0.9fr]">
          {/* Featured Project */}
          <motion.article
            variants={fadeUp}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#f8a1b4]/20
              bg-[rgba(255,246,248,0.08)]
              backdrop-blur-sm
              p-8
              lg:p-10
            "
          >
            {/* Decorative Glow */}
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[rgba(249,197,209,0.18)] blur-3xl" />

            <div className="relative z-10">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#b15675]">
                  <FontAwesomeIcon icon={faStar} />
                  Featured Project
                </span>

                <h3 className="text-4xl font-bold text-[#2b1727]">
                  {featuredProject.title}
                </h3>

                <p className="text-[#865164]">
                  {featuredProject.type} • {featuredProject.duration}
                </p>

                <p className="text-lg leading-9 text-[#5c3f52]">
                  {featuredProject.highlight}
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-8">
                <ul className="space-y-4">
                  {featuredProject.description.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-[#5c3f52]"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="mt-1 text-[#b15675]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-10">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#b15675]">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-3">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-[#f8a1b4]/20
                        bg-[rgba(249,197,209,0.08)]
                        px-4
                        py-2
                        text-sm
                        text-[#5c3f52]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repository Link */}
              {featuredProject.github && (
                <div className="mt-10">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-[#b15675]
                      px-5
                      py-3
                      text-white
                      transition-all
                      duration-300
                      hover:opacity-90
                    "
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    View Repository
                  </a>
                </div>
              )}
            </div>
          </motion.article>

          {/* Other Projects */}
          <div className="space-y-6">
            {otherProjects.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className="
                  rounded-[28px]
                  border
                  border-[#f8a1b4]/20
                  bg-[rgba(255,246,248,0.06)]
                  backdrop-blur-sm
                  p-6
                "
              >
                <div className="space-y-5">
                  <div>
                    <h4 className="text-2xl font-semibold text-[#2b1727]">
                      {project.title}
                    </h4>

                    <p className="mt-2 text-sm text-[#865164]">
                      {project.type} • {project.duration}
                    </p>

                    <p className="mt-4 leading-8 text-[#5c3f52]">
                      {project.highlight}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#b15675]">
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-[#f8a1b4]/20
                            px-3
                            py-1
                            text-xs
                            text-[#5c3f52]
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  {project.github && (
                    <div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          bg-[#b15675]
                          px-4
                          py-2
                          text-sm
                          text-white
                          transition-all
                          duration-300
                          hover:opacity-90
                        "
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        View Repository
                      </a>
                    </div>
                  )}
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