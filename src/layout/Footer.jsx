import portfolioData from '../data/portfolioData.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faDownload,
  faEnvelope,
  faLocationDot,
  faPhone,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const { personalInfo } = portfolioData

  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const socials = [
    {
      label: 'GitHub',
      href: personalInfo.socialLinks.github,
      icon: faGithub,
    },
    {
      label: 'LinkedIn',
      href: personalInfo.socialLinks.linkedin,
      icon: faLinkedin,
    },
    {
      label: 'LeetCode',
      href: personalInfo.socialLinks.leetcode,
      icon: faGlobe,
    },
  ]

  return (
    <footer className="section-shell relative overflow-hidden pb-8 pt-10">
      <div className="liquid-splash-bg" aria-hidden="true" />
      <div className="container">
        <div className="footer-glass p-6 md:p-8 lg:p-10">
          <div className="glass-card-content">
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.8fr_0.95fr]">
              <div className="glass-card p-6">
                <div className="glass-card-content space-y-5">
                  <div>
                    <span className="section-eyebrow">Portfolio</span>
                    <h2 className="mt-4 text-3xl font-bold leading-tight text-[#2b1727] md:text-4xl">
                      Iniyasri Sivasubramani
                    </h2>
                  </div>

                  <p className="leading-8 text-[#5c3f52]">
                    Artificial Intelligence and Data Science student building thoughtful work across AI,
                    Data Science, Web Development, and IoT.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a href="/Iniya-Resume.pdf" download="Iniyasri-Resume.pdf" className="glass-button primary">
                      <FontAwesomeIcon icon={faDownload} />
                      Download Resume
                    </a>

                    <a href="#hero" className="glass-button" aria-label="Back to top">
                      <FontAwesomeIcon icon={faArrowUp} />
                      Back to Top
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="glass-card-content">
                  <h3 className="mb-5 text-xl font-semibold text-[#2b1727]">
                    Quick Navigation
                  </h3>

                  <nav className="grid grid-cols-2 gap-3">
                    {navLinks.map((link) => (
                      <a key={link.href} href={link.href} className="glass-pill justify-start">
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="glass-card-content space-y-5">
                  <h3 className="text-xl font-semibold text-[#2b1727]">
                    Contact Details
                  </h3>

                  <div className="space-y-3 text-[#5c3f52]">
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 break-all">
                      <span className="glass-icon h-10 w-10 text-sm">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      {personalInfo.email}
                    </a>

                    <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3">
                      <span className="glass-icon h-10 w-10 text-sm">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      {personalInfo.phone}
                    </a>

                    <div className="flex items-center gap-3">
                      <span className="glass-icon h-10 w-10 text-sm">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      {personalInfo.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="glass-icon"
                      >
                        <FontAwesomeIcon icon={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <hr className="soft-divider my-8" />

            <div className="flex flex-col gap-3 text-sm text-[#5c3f52] md:flex-row md:items-center md:justify-between">
              <p>Copyright 2026 Iniyasri Sivasubramani. All rights reserved.</p>
              <p>Designed & Built with React, Tailwind CSS and Framer Motion.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
