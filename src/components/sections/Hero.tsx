import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { AudioReactiveGlow } from '../ambient/AudioReactiveGlow'
import { FogLayer } from '../ambient/FogLayer'
import { ParticleField } from '../ambient/ParticleField'
import { ScrollIndicator } from '../ui/ScrollIndicator'
import { useHeroParallax } from '../../hooks/useParallax'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const { titleY, fogY, opacity } = useHeroParallax(scrollYProgress)

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-void-deep">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(45,212,191,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(107,45,138,0.12) 0%, transparent 45%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(232,197,71,0.06) 0%, transparent 40%)',
          }}
        />
        <motion.div style={{ y: fogY }} className="absolute inset-0">
          <FogLayer color="rgba(45, 212, 191, 0.12)" />
          <FogLayer color="rgba(107, 45, 138, 0.1)" opacity={0.7} />
        </motion.div>
        <ParticleField count={50} color="rgba(232, 197, 71, 0.5)" />
        <ParticleField count={25} color="rgba(45, 212, 191, 0.35)" />
        <AudioReactiveGlow
          color="rgba(232, 197, 71, 0.15)"
          className="left-1/2 top-1/3 -translate-x-1/2"
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'linear-gradient(105deg, transparent 40%, rgba(232,197,71,0.04) 50%, transparent 60%)',
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <motion.div
        className="grain scanlines absolute inset-0 z-10"
        style={{ opacity }}
      />

      <motion.div
        className="relative z-20 flex max-w-5xl flex-col items-center px-6 text-center"
        style={{ y: titleY, opacity }}
      >
        <motion.span
          className="font-mono text-[11px] uppercase tracking-[0.5em] text-teal/70"
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          An Original Fantasy / Sci-Fi Saga
        </motion.span>

        <motion.h1
          className="font-display mt-6 text-[clamp(4rem,12vw,9rem)] font-semibold leading-none tracking-[0.15em] text-white text-glow-gold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          LIGHT
        </motion.h1>

        <motion.p
          className="font-display mt-6 text-lg tracking-[0.2em] text-gold/80 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Chapter 1 — Awakening, Darkness Rises, The Fall
        </motion.p>

        <motion.p
          className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          A world rebuilt from the ashes of Earth. Ancient powers. Broken realms.
          A war against the heavens itself.
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <ScrollIndicator />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-deep to-transparent"
        style={{ opacity }}
      />
    </section>
  )
}
