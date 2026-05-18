import { motion } from 'framer-motion'
import type { SeasonScene } from '../../data/seasons'
import { ArtFrame } from './ArtFrame'

type SceneCollageProps = {
  scenes: SeasonScene[]
  accent: string
}

type CollageVariant =
  | 'portraits-left'
  | 'landscapes-left'
  | 'three-portrait'
  | 'uniform'

function resolveVariant(scenes: SeasonScene[]): CollageVariant {
  const portraits = scenes.filter((s) => s.orientation === 'portrait')
  const landscapes = scenes.filter((s) => s.orientation === 'landscape')

  if (portraits.length === 2 && landscapes.length === 1) return 'portraits-left'
  if (landscapes.length === 2 && portraits.length === 1) return 'landscapes-left'
  if (portraits.length === 3) return 'three-portrait'
  return 'uniform'
}

const variantGrid: Record<CollageVariant, string> = {
  'portraits-left':
    'grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-3 md:grid-cols-2 md:grid-rows-2 lg:h-[clamp(440px,58vh,760px)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] lg:auto-rows-fr',
  'landscapes-left':
    'grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-3 md:grid-cols-2 md:grid-rows-2 lg:h-[clamp(440px,58vh,760px)] lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.95fr)] lg:auto-rows-fr',
  'three-portrait':
    'grid auto-rows-[minmax(240px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:h-[clamp(480px,62vh,800px)] lg:grid-rows-[minmax(0,1.1fr)_minmax(0,0.9fr)]',
  uniform:
    'grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:h-[clamp(400px,52vh,680px)] lg:auto-rows-fr',
}

function areaClass(
  variant: CollageVariant,
  scene: SeasonScene,
  index: number,
  scenes: SeasonScene[],
): string {
  const lgOnly = 'lg:[grid-area:unset]'

  if (variant === 'portraits-left') {
    const isWide = scene.orientation === 'landscape'
    if (isWide) return `${lgOnly} lg:col-start-2 lg:row-span-2 lg:row-start-1 md:col-span-2`
    return index === 0
      ? `${lgOnly} lg:col-start-1 lg:row-start-1`
      : `${lgOnly} lg:col-start-1 lg:row-start-2`
  }

  if (variant === 'landscapes-left') {
    const isWide = scene.orientation === 'landscape'
    if (isWide) return `${lgOnly} lg:col-start-1 lg:row-span-2 lg:row-start-1 md:col-span-2`
    return scenes.filter((s) => s.orientation === 'portrait').indexOf(scene) === 0
      ? `${lgOnly} lg:col-start-2 lg:row-start-1`
      : `${lgOnly} lg:col-start-2 lg:row-start-2`
  }

  if (variant === 'three-portrait') {
    if (index < 2) return ''
    return 'sm:col-span-2 lg:col-span-2 lg:row-start-2'
  }

  return ''
}

export function SceneCollage({ scenes, accent }: SceneCollageProps) {
  const variant = resolveVariant(scenes)

  return (
    <motion.div
      className={variantGrid[variant]}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {scenes.map((scene, index) => (
        <ArtFrame
          key={scene.label}
          src={scene.src}
          alt={scene.label}
          label={scene.label}
          aspect="auto"
          fit={scene.fit ?? (scene.orientation === 'landscape' ? 'cover' : 'contain')}
          accent={`${accent}55`}
          className={areaClass(variant, scene, index, scenes)}
          showLabel
          minimal
        />
      ))}
    </motion.div>
  )
}
