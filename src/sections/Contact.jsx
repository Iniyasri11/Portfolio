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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(form)

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
        {/* Heading */}

        <div className="text-center space-y-3">
          <center>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2b1727]">
              Contact
            </h2>

            <br />

            <p className="text-sm uppercase tracking-[0.35em] text-[#b15675]">
              Let's Connect
            </p>

            <br />

            <p className="max-w-2xl mx-auto text-[#5c3f52] leading-8">
              Open to internships, collaborations, research opportunities,
              and exciting projects. Feel free to reach out.
            </p>
          </center>
        </div>

        {/* Layout */}

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.2fr]">
          {/* Left Side */}

          <motion.div
            variants={fadeUp}
            className="space-y-5"
          >
            {/* Email */}

            <div
              className="
              rounded-[28px]
              border
              border-[#f8a1b4]/20
              bg-[rgba(255,246,248,0.05)]
              p-6
            "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                  h-14
                  w-14
                  rounded-full
                  border
                  border-[#f8a1b4]/20
                  flex
                  items-center
                  justify-center
                "
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#b15675]"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#b15675]">
                    Email
                  </p>

                  <p className="text-[#2b1727] font-semibold mt-1">
                    {personalInfo.email}
                  </p>

                  <p className="text-[#5c3f52] text-sm mt-1">
                    Best for project discussions
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}

            <div
              className="
              rounded-[28px]
              border
              border-[#f8a1b4]/20
              bg-[rgba(255,246,248,0.05)]
              p-6
            "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                  h-14
                  w-14
                  rounded-full
                  border
                  border-[#f8a1b4]/20
                  flex
                  items-center
                  justify-center
                "
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[#b15675]"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#b15675]">
                    Phone
                  </p>

                  <p className="text-[#2b1727] font-semibold mt-1">
                    {personalInfo.phone}
                  </p>

                  <p className="text-[#5c3f52] text-sm mt-1">
                    Available for communication
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}

            <div
              className="
              rounded-[28px]
              border
              border-[#f8a1b4]/20
              bg-[rgba(255,246,248,0.05)]
              p-6
            "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                  h-14
                  w-14
                  rounded-full
                  border
                  border-[#f8a1b4]/20
                  flex
                  items-center
                  justify-center
                "
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[#b15675]"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#b15675]">
                    Location
                  </p>

                  <p className="text-[#2b1727] font-semibold mt-1">
                    {personalInfo.location}
                  </p>

                  <p className="text-[#5c3f52] text-sm mt-1">
                    Open to remote opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}

            <div
              className="
              rounded-[28px]
              border
              border-[#f8a1b4]/20
              bg-[rgba(255,246,248,0.05)]
              p-6
            "
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#b15675] mb-4">
                Connect
              </p>

              <div className="flex gap-4">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    h-12
                    w-12
                    rounded-full
                    border
                    border-[#f8a1b4]/20
                    flex
                    items-center
                    justify-center
                    text-[#5c3f52]
                    hover:text-[#b15675]
                  "
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    h-12
                    w-12
                    rounded-full
                    border
                    border-[#f8a1b4]/20
                    flex
                    items-center
                    justify-center
                    text-[#5c3f52]
                    hover:text-[#b15675]
                  "
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>

              <button
                onClick={copyEmail}
                className="
                  mt-5
                  w-full
                  rounded-xl
                  border
                  border-[#f8a1b4]/20
                  px-4
                  py-3
                  text-[#5c3f52]
                  flex
                  justify-between
                  items-center
                "
              >
                Copy Email

                <FontAwesomeIcon
                  icon={copied ? faCheck : faCopy}
                />
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="
              rounded-[32px]
              border
              border-[#f8a1b4]/20
              bg-[rgba(255,246,248,0.05)]
              p-8
              lg:p-10
            "
          >
            <h3 className="text-3xl font-bold text-[#2b1727] mb-8">
              Send Me a Message
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#f8a1b4]/20
                  bg-transparent
                  px-4
                  py-3
                  text-[#5c3f52]
                  outline-none
                "
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#f8a1b4]/20
                  bg-transparent
                  px-4
                  py-3
                  text-[#5c3f52]
                  outline-none
                "
              />

              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#f8a1b4]/20
                  bg-transparent
                  px-4
                  py-3
                  text-[#5c3f52]
                  outline-none
                  resize-none
                "
              />

              <button
  type="submit"
  className="
    inline-flex
    items-center
    gap-3
    rounded-xl
    px-6
    py-3
    font-medium
  "
  style={{
    background: '#2b1727',
    color: '#fff',
    opacity: 1,
    filter: 'none',
  }}
>
  <FontAwesomeIcon
    icon={faPaperPlane}
    style={{
      color: '#fff',
      opacity: 1,
    }}
  />

  <span
    style={{
      color: '#fff',
      opacity: 1,
    }}
  >
    Send Message
  </span>
</button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Contact