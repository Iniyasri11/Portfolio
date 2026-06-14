function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`w-full py-20 md:py-24 scroll-mt-24 ${className}`} style={{ scrollMarginTop: '5.5rem' }}>
      <div className="container">
        <div className="transparent-panel">
          {children}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper
