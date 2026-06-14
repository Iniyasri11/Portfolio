import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { fadeUp, stagger } from '../utils/animations.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  const { personalInfo, summary } = portfolioData

  const socialIcons = [
    {
      type: 'fa',
      icon: faGithub,
      url: personalInfo.socialLinks.github,
    },
    {
      type: 'fa',
      icon: faLinkedin,
      url: personalInfo.socialLinks.linkedin,
    },
    {
      type: 'custom',
      name: 'leetcode',
      url: personalInfo.socialLinks.leetcode,
    },
  ]

  const renderIcon = (social) => {
    if (social.type === 'fa') {
      return <FontAwesomeIcon icon={social.icon} className="text-lg" />
    }

    if (social.type === 'custom') {
      return (
        <img
          src="/leetcode.svg"
          alt="LeetCode"
          className="w-5 h-5"
        />
      )
    }

    return null
  }

  return (
    <SectionWrapper
      id="hero"
      className="relative overflow-hidden !py-12 md:!py-20"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-[rgba(249,197,209,0.12)] blur-3xl" />

      <div className="absolute bottom-0 right-20 h-72 w-72 rounded-full bg-[rgba(248,161,180,0.08)] blur-3xl" />

      <div className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2"
        >
          {/* LEFT SIDE */}

          <div className="relative z-10">
            <motion.div
              variants={fadeUp}
              className="space-y-8"
            >
              <span className="inline-flex rounded-full border border-[#f8a1b4]/20 bg-[rgba(249,197,209,0.12)] px-5 py-2 text-sm font-medium text-[#b15675]">
                AI Developer & Full Stack Builder
              </span>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] text-[#2b1727]">
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

              <div className="flex items-center gap-2 text-[#5c3f52]">
                <span>📍</span>
                <span>{personalInfo.location}</span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="btn-base inline-flex items-center justify-center rounded-full bg-[rgba(248,161,180,0.22)] px-8 py-4 text-[#3f1724] transition-all duration-300 hover:scale-105 hover:bg-[rgba(248,161,180,0.3)]"
                >
                  Contact Me
                </a>

                <a
                  href="#projects"
                  className="btn-base inline-flex items-center justify-center rounded-full border border-[#f8a1b4]/30 px-8 py-4 text-[#5a3545] transition-all duration-300 hover:border-[#f8a1b4]/50"
                >
                  View Projects
                </a>
                <a
                href="/Iniya-Resume.pdf"
                download="Iniyasri-Resume.pdf"
                className="btn-base inline-flex items-center justify-center gap-2 rounded-full border border-[#f8a1b4]/30 px-8 py-4 text-[#5a3545] transition-all duration-300 hover:border-[#f8a1b4]/50"
                >
                <FontAwesomeIcon icon={faDownload} />
                Download Resume
                </a>
              </div>

              <div className="flex gap-5 pt-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f8a1b4]/20 bg-[rgba(249,197,209,0.08)] text-[#b15675] transition-all duration-300 hover:scale-110 hover:bg-[rgba(249,197,209,0.18)]"
                  >
                    {renderIcon(social)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}

          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-center"
          >
            {/* Main Circle */}

            <div className="absolute h-[300px] w-[300px] rounded-full bg-[rgba(248,161,180,0.18)] md:h-[380px] md:w-[380px]" />

            {/* Decorative Elements */}

            <div className="absolute -right-10 top-10 h-24 w-24 rounded-full bg-[rgba(249,197,209,0.22)] blur-xl" />

            <div className="absolute -left-8 bottom-16 h-20 w-20 rounded-full bg-[rgba(248,161,180,0.18)] blur-xl" />

            <div className="absolute top-20 left-0 h-3 w-3 rounded-full bg-[#b15675]" />

            <div className="absolute right-8 bottom-32 h-4 w-4 rounded-full bg-[#f8a1b4]" />

            {/* Image */}

            <div className="relative z-10 h-[280px] w-[280px] overflow-hidden rounded-full md:h-[360px] md:w-[360px]">
              <img
                src="/profile.jpeg"
                alt={personalInfo.firstName}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Name Accent */}

            <div className="absolute -bottom-2 left-0 text-[#b15675]/20 text-6xl font-bold select-none">
              AI
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Hero
