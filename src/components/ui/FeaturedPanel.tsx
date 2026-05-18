import { motion } from 'framer-motion'
import type { ImageOrientation } from '../../data/seasons'
import { ArtFrame } from './ArtFrame'
import { GlitchText } from '../effects/GlitchText'

type FeaturedPanelProps = {
  title: string
  subtitle: string
  description: string
  image: string
  orientation?: ImageOrientation
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
  orientation = 'landscape',
  fit,
  accent,
  glitch = false,
  size = 'large',
}: FeaturedPanelProps) {
  const isMassive = size === 'massive'
  const isPortrait = orientation === 'portrait'
  const imageFit = fit ?? (isPortrait ? 'contain' : 'cover')

  const copy = (
    <motion.div
      className={`flex flex-col justify-center p-8 md:p-10 lg:p-12 ${
        isMassive && !isPortrait
          ? 'relative z-20 bg-gradient-to-t from-void-deep via-void-deep/95 to-transparent lg:bg-transparent'
          : 'bg-void-deep/80 lg:bg-void-deep/50'
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
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
    </motion.div>
  )

  const imageBlock = (
    <ArtFrame
      src={image}
      alt={title}
      label={title}
      aspect="auto"
      fit={imageFit}
      accent={accent}
      showLabel={false}
      className={
        isPortrait
          ? 'min-h-[clamp(320px,45vh,560px)] lg:min-h-full'
          : 'min-h-[clamp(280px,38vh,480px)] w-full'
      }
    />
  )

  return (
    <motion.article
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

      {isPortrait ? (
        <motion.div
          className={`grid gap-0 ${
            isMassive
              ? 'lg:grid-cols-[minmax(280px,44%)_1fr]'
              : 'lg:grid-cols-[minmax(260px,42%)_1fr]'
          }`}
        >
          {imageBlock}
          {copy}
        </motion.div>
      ) : (
        <motion.div className="flex flex-col">
          <motion.div className={isMassive ? 'relative' : ''}>{imageBlock}</motion.div>
          {isMassive ? (
            <div className="lg:absolute lg:inset-x-0 lg:bottom-0 lg:z-20">{copy}</div>
          ) : (
            copy
          )}
        </motion.div>
      )}
    </motion.article>
  )
}
