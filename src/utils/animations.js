export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
}

export const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

export const tag = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] } },
}

export const hoverScale = { whileHover: { scale: 1.035 }, transition: { type: 'spring', stiffness: 320, damping: 28 } }

export const reducedMotion = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
}
