import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper.jsx'

/**
 * SplitSection
 * Props:
 * - id: section id
 * - left: JSX for the text side
 * - right: JSX for the visual side
 * - reverse: swap columns on desktop
 * - sticky: 'left' | 'right' | 'none' -> which side should be sticky
 */
function SplitSection({ id, left, right, reverse = false, sticky = 'right', className = '' }) {
  const leftOrder = reverse ? 'lg:order-2' : 'lg:order-1'
  const rightOrder = reverse ? 'lg:order-1' : 'lg:order-2'

  const leftSticky = sticky === 'left' ? 'lg:sticky lg:top-[5.5rem] lg:h-[calc(100vh-5.5rem)]' : ''
  const rightSticky = sticky === 'right' ? 'lg:sticky lg:top-[5.5rem] lg:h-[calc(100vh-5.5rem)]' : ''

  return (
    <SectionWrapper id={id} className={`min-h-screen flex items-center ${className}`}>
      <div className="grid w-full items-center gap-8 lg:grid-cols-2">
        <div className={`px-2 ${leftOrder}`}>
          <div className={`flex h-full items-center ${leftSticky}`}>
            <div className="w-full max-w-2xl mx-auto">
              {left}
            </div>
          </div>
        </div>

        <div className={`px-2 ${rightOrder}`}>
          <div className={`flex h-full items-center justify-center ${rightSticky}`}>
            <div className="w-full max-w-[520px] mx-auto">
              {right}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default SplitSection
