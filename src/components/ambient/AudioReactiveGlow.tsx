import { motion } from 'framer-motion'

type AudioReactiveGlowProps = {
  color: string
  size?: string
  className?: string
}

export function AudioReactiveGlow({
  color,
  size = '400px',
  className = '',
}: AudioReactiveGlowProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.15, 1.05, 1.2, 1],
        opacity: [0.3, 0.55, 0.4, 0.6, 0.3],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden
    />
  )
}
