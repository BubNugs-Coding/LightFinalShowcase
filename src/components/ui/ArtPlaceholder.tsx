import { motion } from 'framer-motion'

type ArtPlaceholderProps = {
  label?: string
  src?: string
  alt?: string
  aspect?: 'wide' | 'tall' | 'square' | 'cinematic'
  fit?: 'cover' | 'contain'
  accent?: string
  className?: string
}

const aspectMap = {
  wide: 'aspect-[21/9]',
  tall: 'aspect-[3/4]',
  square: 'aspect-square',
  cinematic: 'aspect-[2.35/1]',
}

export function ArtPlaceholder({
  label = 'Artwork Placeholder',
  src,
  alt,
  aspect = 'cinematic',
  fit = 'contain',
  accent = 'rgba(232, 197, 71, 0.3)',
  className = '',
}: ArtPlaceholderProps) {
  const fitClass = fit === 'cover' ? 'object-cover object-center' : 'object-contain object-top'
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-sm border border-white/10 bg-void/80 ${aspectMap[aspect]} ${className}`}
      whileHover={{ scale: src ? 1 : 1.01 }}
      transition={{ duration: 0.4 }}
    >
      {src && (
        <img
          src={src}
          alt={alt ?? label}
          className={`absolute inset-0 h-full w-full bg-void-deep/90 ${fitClass}`}
          loading="lazy"
        />
      )}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(135deg, transparent 40%, ${accent} 50%, transparent 60%)`,
          backgroundSize: '200% 200%',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${accent} 0%, transparent 60%)`,
        }}
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 48px,
            rgba(255,255,255,0.03) 48px,
            rgba(255,255,255,0.03) 49px
          )`,
        }}
        animate={{ x: [0, 49] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 ${src ? 'pointer-events-none opacity-0 group-hover:opacity-100 bg-void-deep/70' : ''}`}
        initial={{ opacity: src ? 0 : 0.6 }}
        whileHover={{ opacity: src ? 1 : 1 }}
      >
        {!src && (
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
            Insert Art
          </span>
        )}
        <span className="font-display text-lg tracking-widest text-white/60 md:text-xl">
          {label}
        </span>
        <div
          className="mt-2 h-px w-24"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-white/20"
        style={{ boxShadow: `inset 0 0 60px ${accent}` }}
      />
    </motion.div>
  )
}
