import { motion } from 'framer-motion'

export type ArtFrameProps = {
  label?: string
  src?: string
  alt?: string
  aspect?: 'auto' | 'wide' | 'tall' | 'square' | 'cinematic'
  fit?: 'cover' | 'contain'
  accent?: string
  className?: string
  showLabel?: boolean
  minimal?: boolean
}

const aspectMap = {
  auto: 'min-h-[200px] h-full',
  wide: 'aspect-[16/10]',
  tall: 'aspect-[3/4] max-h-[560px]',
  square: 'aspect-square',
  cinematic: 'aspect-[2.35/1]',
}

export function ArtFrame({
  label = 'Artwork',
  src,
  alt,
  aspect = 'auto',
  fit = 'contain',
  accent = 'rgba(232, 197, 71, 0.3)',
  className = '',
  showLabel = true,
  minimal = false,
}: ArtFrameProps) {
  const fitClass =
    fit === 'cover' ? 'object-cover object-center' : 'object-contain object-center'

  return (
    <motion.div
      className={`group relative flex overflow-hidden rounded-sm border border-white/10 bg-void-deep ${aspectMap[aspect]} ${className}`}
      whileHover={{ scale: src && !minimal ? 1.008 : 1 }}
      transition={{ duration: 0.35 }}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? label}
          className={`h-full w-full ${fitClass}`}
          loading="lazy"
          decoding="async"
        />
      ) : null}

      {!minimal && (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(ellipse at center, ${accent} 0%, transparent 65%)`,
            }}
          />
          {showLabel && (
            <motion.div
              className={`absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-void-deep via-void-deep/90 to-transparent px-4 pb-4 pt-10 ${
                src ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              } transition-opacity duration-300`}
            >
              {!src && (
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Insert Art
                </span>
              )}
              <span className="font-display text-sm tracking-widest text-white/75 md:text-base">
                {label}
              </span>
            </motion.div>
          )}
          <div
            className="pointer-events-none absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-white/15"
            style={{ boxShadow: `inset 0 0 40px ${accent}` }}
          />
        </>
      )}
    </motion.div>
  )
}
