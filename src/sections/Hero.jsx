import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { fadeUp, stagger } from '../utils/animations.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  const { personalInfo, summary } = portfolioData

  const socialIcons = [
    {
      icon: faGithub,
      url: personalInfo.socialLinks.github,
      label: 'GitHub',
    },
    {
      icon: faLinkedin,
      url: personalInfo.socialLinks.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: faGlobe,
      url: personalInfo.socialLinks.leetcode,
      label: 'LeetCode',
    },
  ]

  return (
    <SectionWrapper id="hero" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-[rgba(249,197,209,0.12)] blur-3xl" />
      <div className="absolute bottom-0 right-20 h-72 w-72 rounded-full bg-[rgba(248,161,180,0.08)] blur-3xl" />

      <div className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid min-h-[85vh] items-center gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] xl:gap-16"
        >
          <div className="relative z-20 min-w-0">
            <motion.div variants={fadeUp} className="space-y-8">
              <span className="section-eyebrow">
                AI Developer & Full Stack Builder
              </span>

              <div className="space-y-4">
                <h1 className="max-w-full text-5xl font-bold leading-[1] text-[#2b1727] md:text-6xl lg:text-7xl">
                  {personalInfo.firstName}
                  <span className="text-gradient block">
                    {personalInfo.lastName}
                  </span>
                </h1>

                <p className="text-xl font-semibold text-[#4f2f44] md:text-2xl">
                  {personalInfo.title}
                </p>
              </div>

              <p className="max-w-xl text-base leading-8 text-[#5c3f52] md:text-lg">
                {summary.shortBio}
              </p>

              <div className="glass-pill w-fit text-[#b15675]">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{personalInfo.location}</span>
              </div>

              <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row sm:flex-wrap">
                <a href="#contact" className="glass-button primary">
                  Contact Me
                </a>

                <a href="#projects" className="glass-button">
                  View Projects
                </a>

                <a
                  href="/Iniya-Resume.pdf"
                  download="Iniyasri-Resume.pdf"
                  className="glass-button whitespace-nowrap"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  Download Resume
                </a>
              </div>

              <div className="flex gap-5 pt-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="glass-icon"
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative isolate flex items-center justify-center md:-translate-y-6"
          >
            <div className="liquid-blob-1 absolute -left-10 top-10 h-[420px] w-[420px] rounded-full opacity-80" />
            <div className="liquid-blob-2 absolute bottom-[-40px] right-[-60px] h-[460px] w-[460px] rounded-full opacity-70" />
            <div className="liquid-glow-1 absolute -right-10 top-10 h-24 w-24 rounded-full" />
            <div className="liquid-glow-2 absolute -left-8 bottom-16 h-20 w-20 rounded-full" />
            <div className="absolute left-0 top-20 h-3 w-3 animate-pulse rounded-full bg-[#b15675]" />
            <div className="absolute bottom-32 right-8 h-4 w-4 animate-pulse rounded-full bg-[#f8a1b4]" />

            <div className="portrait-stage" aria-hidden="true">
              <span className="portrait-orbit" />
              <span className="portrait-petal portrait-petal-one" />
              <span className="portrait-petal portrait-petal-two" />
              <span className="portrait-petal portrait-petal-three" />
            </div>

            <div className="glass-wrapper portrait-frame">
              <div className="glass-ring">
                <div className="glass-inner">
                  <img
                    src="/profile.jpeg"
                    alt={personalInfo.firstName}
                    className="glass-img"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 left-0 select-none text-6xl font-bold text-[#b15675]/20">
              AI
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Hero
