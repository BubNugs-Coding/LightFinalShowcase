import { motion } from 'framer-motion'
import type { TimelineEvent } from '../../data/seasons'

type SeasonTimelineProps = {
  events: TimelineEvent[]
  accent: string
}

export function SeasonTimeline({ events, accent }: SeasonTimelineProps) {
  return (
    <div className="relative mt-16">
      <motion.div
        className="absolute left-4 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px"
        style={{ background: `linear-gradient(180deg, ${accent}, transparent)` }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="space-y-12">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0
          return (
            <motion.div
              key={event.title}
              className={`relative flex flex-col md:flex-row ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="hidden w-1/2 md:block" />
              <motion.div
                className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 md:left-1/2"
                style={{
                  borderColor: accent,
                  background: 'var(--color-void-deep)',
                  boxShadow: `0 0 20px ${accent}`,
                }}
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
              />
              <div
                className={`ml-12 w-full md:ml-0 md:w-1/2 ${
                  isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="font-display mt-2 text-2xl text-white">{event.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{event.blurb}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
