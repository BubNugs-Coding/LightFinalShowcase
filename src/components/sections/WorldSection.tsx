import { motion } from 'framer-motion'
import { worldCards } from '../../data/world'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { FogLayer } from '../ambient/FogLayer'
import { ParticleField } from '../ambient/ParticleField'

const accentStyles = {
  teal: {
    border: 'hover:border-teal/40',
    glow: 'rgba(45, 212, 191, 0.25)',
    text: 'text-teal',
    bg: 'from-teal/10 to-transparent',
  },
  gold: {
    border: 'hover:border-gold/40',
    glow: 'rgba(232, 197, 71, 0.25)',
    text: 'text-gold',
    bg: 'from-gold/10 to-transparent',
  },
  purple: {
    border: 'hover:border-purple/50',
    glow: 'rgba(107, 45, 138, 0.35)',
    text: 'text-purple-300',
    bg: 'from-purple/15 to-transparent',
  },
  crimson: {
    border: 'hover:border-crimson/40',
    glow: 'rgba(196, 30, 58, 0.3)',
    text: 'text-crimson-bright',
    bg: 'from-crimson/10 to-transparent',
  },
}

export function WorldSection() {
  return (
    <Section id="world" className="bg-void">
      <FogLayer color="rgba(45, 212, 191, 0.08)" />
      <ParticleField count={20} color="rgba(45, 212, 191, 0.3)" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          label="Section I"
          title="The World"
          subtitle="Earth fell. Zero remade the ruins into realms. These are the pillars everything else rests upon."
          accent="#2dd4bf"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {worldCards.map((card, i) => {
            const style = accentStyles[card.accent]
            return (
              <motion.article
                key={card.id}
                className={`group relative overflow-hidden rounded-sm border border-white/8 bg-void-deep/60 p-6 backdrop-blur-sm transition-all duration-500 ${style.border}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${style.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <motion.div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: style.glow }}
                />

                <motion.div
                  className={`font-display mb-6 flex h-16 w-16 items-center justify-center rounded-sm border border-white/10 text-3xl ${style.text}`}
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {card.icon}
                </motion.div>

                <h3 className="font-display text-xl tracking-wide text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {card.description}
                </p>

                <div
                  className="mt-6 h-px w-0 bg-gradient-to-r from-white/20 to-transparent transition-all duration-500 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${style.glow}, transparent)` }}
                />
              </motion.article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
