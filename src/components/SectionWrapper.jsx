function SectionWrapper({ id, children, className = '', splash = true }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      {splash && <div className="liquid-splash-bg" aria-hidden="true" />}
      <div className="container section-inner">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
