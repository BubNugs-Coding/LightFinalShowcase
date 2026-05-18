import { motion } from 'framer-motion'

type FogLayerProps = {
  color?: string
  opacity?: number
}

export function FogLayer({
  color = 'rgba(107, 45, 138, 0.15)',
  opacity = 1,
}: FogLayerProps) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
      aria-hidden
    >
      <motion.div
        className="absolute -inset-[50%] h-[200%] w-[200%]"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${color} 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, ${color} 0%, transparent 45%)`,
        }}
        animate={{ x: ['-5%', '5%', '-5%'], y: ['-3%', '3%', '-3%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(5,4,10,0.8) 100%)',
        }}
      />
    </motion.div>
  )
}
