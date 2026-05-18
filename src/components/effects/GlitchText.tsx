import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

type GlitchTextProps = {
  children: ReactNode
  className?: string
  active?: boolean
}

export function GlitchText({ children, className = '', active = true }: GlitchTextProps) {
  if (!active) {
    return <span className={className}>{children}</span>
  }

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        x: [0, -2, 2, 0, 0],
        skewX: [0, -0.5, 0.5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay: 3,
        times: [0, 0.1, 0.2, 0.3, 1],
      }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 text-crimson-bright/40"
        style={{ clipPath: 'inset(40% 0 30% 0)' }}
        animate={{ x: [0, 3, -3, 0] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }}
        aria-hidden
      >
        {children}
      </motion.span>
    </motion.span>
  )
}
