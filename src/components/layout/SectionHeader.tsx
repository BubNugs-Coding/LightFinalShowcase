import { motion } from 'framer-motion'

type SectionHeaderProps = {
  label: string
  title: string
  subtitle?: string
  accent?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  label,
  title,
  subtitle,
  accent = '#e8c547',
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.header
      className={`mb-16 max-w-3xl md:mb-20 ${alignClass}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7 }}
    >
      <span
        className="font-mono text-[11px] uppercase tracking-[0.45em]"
        style={{ color: accent }}
      >
        {label}
      </span>
      <h2 className="font-display mt-4 text-4xl font-medium tracking-wide text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg font-light leading-relaxed text-white/55 md:text-xl">
          {subtitle}
        </p>
      )}
      <motion.div
        className="mt-8 h-px max-w-xs"
        style={{
          background: `linear-gradient(90deg, ${accent}, transparent)`,
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.header>
  )
}
