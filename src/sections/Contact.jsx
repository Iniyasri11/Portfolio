import { useState } from 'react'
import { motion } from 'framer-motion'

import SectionWrapper from '../components/SectionWrapper.jsx'
import portfolioData from '../data/portfolioData.js'
import { stagger, fadeUp } from '../utils/animations.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faCopy,
  faCheck,
  faPaperPlane,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function Contact() {
  const { personalInfo } = portfolioData

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const contactItems = [
    {
      label: 'Email',
      value: personalInfo.email,
      note: 'Best for project discussions',
      icon: faEnvelope,
    },
    {
      label: 'Phone',
      value: personalInfo.phone,
      note: 'Available for communication',
      icon: faPhone,
    },
    {
      label: 'Location',
      value: personalInfo.location,
      note: 'Open to remote opportunities',
      icon: faLocationDot,
    },
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

  const handleChange = (e) => {
    setSubmitted(false)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <SectionWrapper id="contact">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-12"
      >
        <div className="section-header">
          <span className="section-eyebrow">Let's Connect</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-description">
            Open to internships, collaborations, research opportunities,
            and exciting projects. Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.2fr]">
          <motion.div variants={fadeUp} className="space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="glass-card p-6">
                <div className="glass-card-content flex items-center gap-4">
                  <div className="glass-icon h-14 w-14">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b15675]">
                      {item.label}
                    </p>

                    <p className="mt-1 break-words font-semibold text-[#2b1727]">
                      {item.value}
                    </p>

                    <p className="mt-1 text-sm text-[#5c3f52]">
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass-card p-6">
              <div className="glass-card-content">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#b15675]">
                  Connect
                </p>

                <div className="flex flex-wrap gap-4">
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

                <button
                  type="button"
                  onClick={copyEmail}
                  className="glass-button mt-5 w-full justify-between"
                >
                  <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="glass-card p-7 lg:p-10">
            <div className="glass-card-content">
              <h3 className="mb-3 text-3xl font-bold text-[#2b1727]">
                Send Me a Message
              </h3>
              <p className="mb-8 text-[#5c3f52]">
                The form opens your email app with the message filled in, so your note stays ready to send.
              </p>

              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="glass-input"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="glass-input"
                />

                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="glass-input resize-none"
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button type="submit" className="glass-button primary">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                  </button>

                  {submitted && (
                    <p className="text-sm font-medium text-[#b15675]" role="status">
                      Your email draft is ready to send.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Contact
