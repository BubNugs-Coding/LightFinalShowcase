import { motion } from 'framer-motion'
import { FogLayer } from '../ambient/FogLayer'
import { ParticleField } from '../ambient/ParticleField'
import { Section } from '../layout/Section'

export function FinaleSection() {
  return (
    <Section id="finale" className="min-h-screen overflow-hidden" fullHeight>
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0a0812 0%, #1a1528 30%, #2d2438 50%, #4a3f5c 70%, #6b5a7a 85%, #8b7a9a 100%)',
        }}
      />
      <FogLayer color="rgba(232, 197, 71, 0.08)" />
      <ParticleField count={30} color="rgba(232, 197, 71, 0.35)" />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(232,197,71,0.15) 0%, transparent 60%)',
        }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center text-center">
        <motion.span
          className="font-mono text-[11px] uppercase tracking-[0.45em] text-gold/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The End of Chapter 1
        </motion.span>

        <motion.h2
          className="font-display mt-6 text-4xl tracking-wide text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Rest, At Last
        </motion.h2>

        <motion.div
          className="mt-12 space-y-6 text-lg font-light leading-relaxed text-white/60 md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>The realms collapse together — boundaries dissolving like mist at dawn.</p>
          <p>Reality changes permanently. Nothing will ever be the same shape again.</p>
          <p>But the crew survives. Scarred. Changed. Alive.</p>
          <p>The fight is not truly over. It never was.</p>
          <p className="text-white/80">
            For the first time in a long time, people can rest.
          </p>
        </motion.div>

        <motion.blockquote
          className="font-display mt-20 text-2xl italic tracking-wide text-gold text-glow-gold md:text-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          &ldquo;Reality broke. Humanity endured.&rdquo;
        </motion.blockquote>

        <motion.div
          className="mt-16 font-mono text-[10px] uppercase tracking-[0.4em] text-white/25"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          LIGHT — Chapter 1 Complete
        </motion.div>
      </div>
    </Section>
  )
}
