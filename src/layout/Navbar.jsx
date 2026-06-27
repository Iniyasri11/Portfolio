
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
    <header className="fixed top-4 left-1/2 z-50 w-auto max-w-[calc(100vw-1rem)] -translate-x-1/2 px-2 sm:top-5">
      <nav
        className="
          relative
          mx-auto inline-flex w-max max-w-full items-center gap-2
          px-2.5 py-2
          sm:px-4 sm:py-2.5
          rounded-full

          bg-[rgba(255,246,248,0.55)]
          backdrop-blur-2xl

          border border-white/40

          shadow-[0_20px_60px_rgba(248,161,180,0.25)]

          overflow-hidden
        "
      >
        <div className="nav-liquid pointer-events-none absolute inset-0" />
        {/* Logo */}
        <a
          href="#hero"
          className="
            relative
            flex items-center justify-center
            h-10 w-10
            rounded-full

            bg-[rgba(255,255,255,0.25)]
            backdrop-blur-md

            border border-white/50

            text-[#b15675]
            font-semibold

            shadow-[0_6px_20px_rgba(248,161,180,0.3)]
          "
        >
          IN
        </a>

        {/* Links */}
        <div className="flex min-w-0 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace('#', '')

            return (
              <a
                key={link.href}
                href={link.href}
                title={link.label}
                className={`
                  relative
                  flex items-center gap-2
                  px-2.5 py-2
                  sm:px-3
                  lg:px-4
                  rounded-full

                  text-sm
                  whitespace-nowrap

                  backdrop-blur-md

                  transition-all duration-300

                  ${
                    isActive
                      ? `
                        bg-[rgba(255,255,255,0.35)]
                        border border-white/50
                        text-[#3f1724]

                        shadow-[0_8px_25px_rgba(248,161,180,0.35)]
                      `
                      : `
                        text-[#5a3545]
                        border border-transparent

                        hover:bg-[rgba(255,255,255,0.2)]
                        hover:border-white/30
                      `
                  }
                `}
              >
                {isActive && <span className="nav-shine" />}
              <FontAwesomeIcon
                icon={link.icon}
                className="text-xs opacity-80"
              />

                <span className="hidden lg:inline">
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
