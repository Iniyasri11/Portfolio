
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHouse,
  faUser,
  faGraduationCap,
  faCode,
  faFolderOpen,
  faBriefcase,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  { label: 'Home', href: '#hero', icon: faHouse },
  { label: 'About', href: '#about', icon: faUser },
  { label: 'Education', href: '#education', icon: faGraduationCap },
  { label: 'Skills', href: '#skills', icon: faCode },
  { label: 'Projects', href: '#projects', icon: faFolderOpen },
  { label: 'Experience', href: '#experience', icon: faBriefcase },
  { label: 'Contact', href: '#contact', icon: faEnvelope },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '-35% 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="
          flex
          items-center
          gap-2
          px-3
          py-2
          rounded-full
          border
          border-[#f8a1b4]/20
          bg-[rgba(255,246,248,0.78)]
          backdrop-blur-xl
          shadow-[0_12px_40px_rgba(177,86,117,0.08)]
        "
      >
        {/* Logo */}
        <a
          href="#hero"
          className="
            flex
            items-center
            justify-center
            h-10
            w-10
            rounded-full
            bg-[#f8a1b4]/15
            border
            border-[#f8a1b4]/15
            text-[#b15675]
            font-semibold
            shrink-0
          "
        >
          IN
        </a>

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace('#', '')

            return (
              <a
                key={link.href}
                href={link.href}
                title={link.label}
                className={`
                  flex
                  items-center
                  gap-2
                  px-3 md:px-4
                  py-2
                  rounded-full
                  text-sm
                  transition-all
                  duration-300
                  whitespace-nowrap
                  ${
                    isActive
                      ? 'bg-[#b15675] text-white shadow-sm'
                      : 'text-[#5a3545] hover:bg-[#f8a1b4]/10'
                  }
                `}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className="text-xs"
                />

                <span className="hidden md:inline">
                  {link.label}
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Navbar