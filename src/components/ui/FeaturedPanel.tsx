import { motion } from 'framer-motion'
import { ArtPlaceholder } from './ArtPlaceholder'
import { GlitchText } from '../effects/GlitchText'

type FeaturedPanelProps = {
  title: string
  subtitle: string
  description: string
  image: string
  fit?: 'cover' | 'contain'
  accent: string
  glitch?: boolean
  size?: 'large' | 'massive'
}

export function FeaturedPanel({
  title,
  subtitle,
  description,
  image,
  fit = 'contain',
  accent,
  glitch = false,
  size = 'large',
}: FeaturedPanelProps) {
  const isMassive = size === 'massive'

  return (
    <motion.div
      className={`relative my-20 overflow-hidden rounded-sm border border-white/10 ${isMassive ? 'my-28' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(ellipse at center, ${accent}15 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className={`grid ${isMassive ? 'lg:grid-cols-1' : 'lg:grid-cols-5'} gap-0`}>
        <div className={`relative ${isMassive ? 'lg:col-span-1' : 'lg:col-span-3'}`}>
          <ArtPlaceholder
            src={image}
            alt={title}
            label={title}
            aspect={isMassive ? 'cinematic' : 'wide'}
            fit={fit}
            accent={accent}
            className="rounded-none border-0 min-h-[280px] md:min-h-[360px]"
          />
        </div>

        <div
          className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 ${
            isMassive ? 'absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-void-deep via-void-deep/95 to-transparent lg:relative lg:bg-transparent' : 'lg:col-span-2 bg-void-deep/80'
          }`}
        >
          <span
            className="font-mono text-[10px] uppercase tracking-[0.4em]"
            style={{ color: accent }}
          >
            {subtitle}
          </span>
          <h3
            className={`font-display mt-4 tracking-wide text-white ${
              isMassive ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-3xl md:text-4xl'
            }`}
          >
            {glitch ? <GlitchText active>{title}</GlitchText> : title}
          </h3>
          <p
            className={`mt-6 font-light leading-relaxed text-white/55 ${
              isMassive ? 'max-w-2xl text-lg md:text-xl' : 'text-sm md:text-base'
            }`}
          >
            {description}
          </p>
          <motion.div
            className="mt-8 h-px max-w-xs"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </div>
      </div>
    </motion.div>
  )
}
