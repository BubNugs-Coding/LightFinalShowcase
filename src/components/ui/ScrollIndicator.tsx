import { motion } from 'framer-motion'

export function ScrollIndicator() {
  return (
    <motion.button
      type="button"
      className="group flex cursor-pointer flex-col items-center gap-4 border-0 bg-transparent p-0"
      onClick={() => {
        document.getElementById('world')?.scrollIntoView({ behavior: 'smooth' })
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      aria-label="Begin scroll"
    >
      <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold/70 transition-colors group-hover:text-gold">
        Begin Scroll
      </span>
      <motion.div
        className="flex h-14 w-8 items-start justify-center rounded-full border border-gold/30 p-2"
        animate={{ borderColor: ['rgba(232,197,71,0.3)', 'rgba(232,197,71,0.6)', 'rgba(232,197,71,0.3)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="h-2 w-1 rounded-full bg-gold"
          animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.button>
  )
}
