import { useScroll, useTransform, type MotionValue } from 'framer-motion'
import { type RefObject } from 'react'

export function useSectionParallax(
  ref: RefObject<HTMLElement | null>,
  offset: ['start end', 'end start'] = ['start end', 'end start'],
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  return {
    scrollYProgress,
    y: useTransform(scrollYProgress, [0, 1], [80, -80]),
    opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]),
    scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]),
  }
}

export function useHeroParallax(scrollYProgress: MotionValue<number>) {
  return {
    titleY: useTransform(scrollYProgress, [0, 1], [0, 200]),
    fogY: useTransform(scrollYProgress, [0, 1], [0, 150]),
    opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]),
  }
}
