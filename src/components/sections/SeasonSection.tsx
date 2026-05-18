import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { SeasonData } from '../../data/seasons'
import { CrackOverlay } from '../effects/CrackOverlay'
import { FogLayer } from '../ambient/FogLayer'
import { ParticleField } from '../ambient/ParticleField'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { FeaturedPanel } from '../ui/FeaturedPanel'
import { SeasonTimeline } from '../ui/SeasonTimeline'
import { ArtPlaceholder } from '../ui/ArtPlaceholder'

const seasonVisuals = {
  awakening: {
    bg: 'from-emerald-950/40 via-void to-void-deep',
    accent: '#e8c547',
    fog: 'rgba(107, 158, 107, 0.12)',
    particles: 'rgba(232, 197, 71, 0.4)',
    label: 'Season I',
  },
  'darkness-rises': {
    bg: 'from-purple-deep/60 via-void to-void-deep',
    accent: '#9b7fd4',
    fog: 'rgba(107, 45, 138, 0.2)',
    particles: 'rgba(155, 127, 212, 0.35)',
    label: 'Season II',
  },
  'the-fall': {
    bg: 'from-crimson/20 via-void to-void-deep',
    accent: '#ff2d4a',
    fog: 'rgba(196, 30, 58, 0.15)',
    particles: 'rgba(255, 45, 74, 0.4)',
    label: 'Season III',
  },
}

type SeasonSectionProps = {
  season: SeasonData
}

export function SeasonSection({ season }: SeasonSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const visuals = seasonVisuals[season.id as keyof typeof seasonVisuals]
  const isFall = season.id === 'the-fall'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const redWash = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgba(196,30,58,0)', isFall ? 'rgba(196,30,58,0.08)' : 'rgba(0,0,0,0)', isFall ? 'rgba(196,30,58,0.12)' : 'rgba(0,0,0,0)'],
  )

  return (
    <div ref={ref} className={`relative bg-gradient-to-b ${visuals.bg}`}>
      <FogLayer color={visuals.fog} />
      <ParticleField count={isFall ? 35 : 20} color={visuals.particles} />
      {isFall && <CrackOverlay intensity={1.2} />}

      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{ backgroundColor: redWash }}
      />

      <motion.div className="relative z-20">
        <Section id={`season-${season.id}`}>
          <div className="relative z-10 mx-auto max-w-7xl">
            <SectionHeader
              label={visuals.label}
              title={season.title}
              subtitle={`${season.subtitle} — ${season.tone}`}
              accent={visuals.accent}
            />

            <motion.div
              className="mb-12 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {season.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-sm border border-white/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40"
                  style={{ borderColor: `${visuals.accent}30` }}
                >
                  {theme}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mb-16 grid gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {season.scenes.map((scene) => (
                <ArtPlaceholder
                  key={scene.label}
                  src={scene.src}
                  alt={scene.label}
                  label={scene.label}
                  aspect="wide"
                  fit={scene.fit ?? 'contain'}
                  accent={`${visuals.accent}40`}
                />
              ))}
            </motion.div>

            <SeasonTimeline events={season.events} accent={visuals.accent} />

            {season.featured.map((panel, i) => (
              <FeaturedPanel
                key={panel.id}
                title={panel.title}
                subtitle={panel.subtitle}
                description={panel.description}
                image={panel.image}
                fit={panel.fit}
                accent={visuals.accent}
                glitch={isFall && i === 0}
                size={isFall ? 'massive' : 'large'}
              />
            ))}
          </div>
        </Section>
      </motion.div>

      {isFall && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 mix-blend-overlay"
          animate={{ opacity: [0, 0.08, 0] }}
          transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2 }}
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,45,74,0.1) 2px, rgba(255,45,74,0.1) 4px)',
          }}
        />
      )}
    </div>
  )
}
