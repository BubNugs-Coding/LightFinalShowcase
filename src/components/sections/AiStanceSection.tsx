import { motion } from 'framer-motion'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'

const pillars = [
  {
    id: 'allowed',
    label: 'Where AI Belongs',
    title: 'Concept & Ideation',
    body: 'Thumbnails, mood boards, rough explorations, and “what if” passes — tools to think faster, not to replace the hand that finishes the work.',
    accent: '#2dd4bf',
    glow: 'rgba(45, 212, 191, 0.2)',
  },
  {
    id: 'never',
    label: 'Where It Stops',
    title: 'Never the Final Product',
    body: 'Finished pages, final character art, and anything meant to ship as the real thing are human-made. The story earns its soul in that last mile.',
    accent: '#e8c547',
    glow: 'rgba(232, 197, 71, 0.2)',
  },
]

export function AiStanceSection() {
  return (
    <Section id="ai-stance" className="border-y border-white/5 bg-void">
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(45,212,191,0.06) 0%, transparent 55%)',
        }}
      />

      <motion.div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeader
          label="Creator Statement"
          title="On AI & This Project"
          subtitle="Transparency matters. This is how LIGHT is made."
          accent="#a78bfa"
          align="center"
        />

        <motion.blockquote
          className="mx-auto mb-14 max-w-3xl text-center font-display text-xl italic leading-relaxed tracking-wide text-white/80 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          AI can help you <span className="text-teal">see</span> the world — it should
          never be the world you ship.
        </motion.blockquote>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.id}
              className="relative overflow-hidden rounded-sm border border-white/10 bg-void-deep/60 p-8 backdrop-blur-sm md:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                style={{ background: pillar.glow }}
              />
              <span
                className="font-mono text-[10px] uppercase tracking-[0.35em]"
                style={{ color: pillar.accent }}
              >
                {pillar.label}
              </span>
              <h3 className="font-display mt-4 text-2xl text-white md:text-3xl">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
                {pillar.body}
              </p>
              <motion.div
                className="mt-8 h-px w-full max-w-[120px]"
                style={{
                  background: `linear-gradient(90deg, ${pillar.accent}, transparent)`,
                }}
              />
            </motion.article>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-2xl text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.25em] text-white/35"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Concept art on this site may include AI-assisted exploration · Final work does not
        </motion.p>
      </motion.div>
    </Section>
  )
}
