import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { crew } from '../../data/crew'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'
import { ArtPlaceholder } from '../ui/ArtPlaceholder'

export function CrewSection() {
  const [active, setActive] = useState(crew[0].id)
  const selected = crew.find((c) => c.id === active) ?? crew[0]

  return (
    <Section id="crew" className="bg-void-deep">
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(107,45,138,0.12) 0%, transparent 50%)',
        }}
      />

      <motion.div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          label="Section II"
          title="The Crew"
          subtitle="Six souls bound by fate, fear, and the weight of a world tearing at the seams."
          accent="#e8c547"
          align="center"
        />

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {crew.map((character) => (
            <motion.button
              key={character.id}
              type="button"
              onClick={() => setActive(character.id)}
              className="cursor-pointer rounded-sm border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                borderColor:
                  active === character.id ? character.accent : 'rgba(255,255,255,0.1)',
                color: active === character.id ? character.accent : 'rgba(255,255,255,0.5)',
                background:
                  active === character.id
                    ? `${character.accent}15`
                    : 'transparent',
                boxShadow:
                  active === character.id
                    ? `0 0 30px ${character.glow}`
                    : 'none',
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {character.name}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ArtPlaceholder
              src={selected.image}
              alt={`${selected.name} character concept`}
              label={`${selected.name} — Concept Sheet`}
              aspect="auto"
              fit="contain"
              accent={selected.glow}
              showLabel={false}
              className="mx-auto h-[clamp(420px,55vh,640px)] w-full max-w-lg lg:mx-0"
            />

            <motion.div className="flex flex-col justify-center">
              <span
                className="font-mono text-[11px] uppercase tracking-[0.35em]"
                style={{ color: selected.accent }}
              >
                {selected.role}
              </span>
              <h3
                className="font-display mt-3 text-5xl tracking-wide text-white md:text-6xl"
                style={{ textShadow: `0 0 60px ${selected.glow}` }}
              >
                {selected.name}
              </h3>
              <p className="mt-6 text-xl font-light italic leading-relaxed text-white/70">
                {selected.tagline}
              </p>

              <motion.div
                className="mt-10 space-y-6 border-l-2 pl-6"
                style={{ borderColor: `${selected.accent}40` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                    Personality
                  </span>
                  <p className="mt-2 text-white/60">{selected.personality}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                    Core Fear / Motivation
                  </span>
                  <p className="mt-2 text-white/60">{selected.motivation}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                    Visual Style
                  </span>
                  <p className="mt-2 text-white/60">{selected.visualNotes}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
