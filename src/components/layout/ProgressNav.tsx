import { motion, useScroll, useSpring } from 'framer-motion'

const navItems = [
  { id: 'ai-stance', label: 'AI' },
  { id: 'world', label: 'World' },
  { id: 'crew', label: 'Crew' },
  { id: 'season-awakening', label: 'S1' },
  { id: 'season-darkness-rises', label: 'S2' },
  { id: 'season-the-fall', label: 'S3' },
  { id: 'themes', label: 'Themes' },
  { id: 'finale', label: 'End' },
]

export function ProgressNav() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
  <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-0.5 origin-left bg-gradient-to-r from-gold via-teal to-crimson-bright"
        style={{ scaleX }}
      />
      <nav
        className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
        aria-label="Section navigation"
      >
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center justify-end gap-2"
            whileHover={{ x: -4 }}
          >
            <span className="rounded-sm bg-void-deep/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white/0 backdrop-blur transition-all group-hover:text-white/60">
              {item.label}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition-all group-hover:bg-gold group-hover:shadow-[0_0_12px_rgba(232,197,71,0.6)]" />
          </motion.a>
        ))}
      </nav>
    </>
  )
}
