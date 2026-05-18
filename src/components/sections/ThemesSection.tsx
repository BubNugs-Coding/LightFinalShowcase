import { motion } from 'framer-motion'
import { themeConcepts } from '../../data/themes'
import { Section } from '../layout/Section'
import { SectionHeader } from '../layout/SectionHeader'

export function ThemesSection() {
  return (
    <Section id="themes" className="bg-void border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          label="Thematic Analysis"
          title="What It Means"
          subtitle="The story beneath the battles — the ideas that echo after the screen goes dark."
          accent="#a78bfa"
          align="center"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {themeConcepts.map((theme, i) => (
            <motion.article
              key={theme.title}
              className="group relative overflow-hidden rounded-sm border border-white/8 bg-void-deep/50 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-purple/30"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100"
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-purple-300/60">
                Theme {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display mt-4 text-2xl text-white">{theme.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/50">{theme.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
