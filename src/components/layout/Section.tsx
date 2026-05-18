import { motion, useInView } from 'framer-motion'
import { type ReactNode, useRef } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  fullHeight?: boolean
}

export function Section({ id, children, className = '', fullHeight }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative w-full px-6 py-28 md:px-12 lg:px-20 lg:py-36 ${fullHeight ? 'min-h-screen' : ''} ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  )
}
