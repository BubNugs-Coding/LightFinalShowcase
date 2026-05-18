import { motion } from 'framer-motion'

type SectionDividerProps = {
  from?: string
  to?: string
}

export function SectionDivider({
  from = 'transparent',
  to = 'rgba(232, 197, 71, 0.4)',
}: SectionDividerProps) {
  return (
    <motion.div
      className="relative h-24 w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      aria-hidden
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-full max-w-4xl -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `linear-gradient(90deg, ${from}, ${to}, ${from})`,
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/20 bg-void-deep"
        style={{ boxShadow: `0 0 20px ${to}` }}
      />
    </motion.div>
  )
}
