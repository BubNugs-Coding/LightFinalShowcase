import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type CrackOverlayProps = {
  intensity?: number
}

export function CrackOverlay({ intensity = 1 }: CrackOverlayProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4 * intensity, 0.7 * intensity])

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-20"
      style={{ opacity }}
      aria-hidden
    >
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <motion.path
          d="M0,20 L30,25 L45,80 L60,30 L100,40 L150,15 L200,90 L280,50 L350,70 L420,20 L500,60 L600,35 L700,80 L800,40 L900,55 L100%,30"
          fill="none"
          stroke="rgba(196,30,58,0.4)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M0,60 L80,55 L120,120 L200,70 L300,100 L400,65 L500,110 L650,75 L750,95 L850,60 L100%,80"
          fill="none"
          stroke="rgba(255,45,74,0.25)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2.5, delay: 0.3 }}
        />
      </svg>
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(196,30,58,0.02) 3px, rgba(196,30,58,0.02) 4px)',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 0.15, repeat: Infinity, repeatType: 'reverse' }}
      />
    </motion.div>
  )
}
