export type WorldCard = {
  id: string
  title: string
  description: string
  accent: 'teal' | 'gold' | 'purple' | 'crimson'
  icon: string
}

export const worldCards: WorldCard[] = [
  {
    id: 'serenia',
    title: 'Serenia',
    description:
      'The first realm born from Earth’s ashes — a living world where hope still grows beneath ancient scars.',
    accent: 'teal',
    icon: '◈',
  },
  {
    id: 'realms',
    title: 'The Realms',
    description:
      'Fragmented dimensions stitched together after Earth’s destruction, each realm obeying its own impossible laws.',
    accent: 'teal',
    icon: '◇',
  },
  {
    id: 'empowered',
    title: 'Empowered Individuals',
    description:
      'Survivors mutated by radiation — gifted with powers that blur the line between miracle and weapon.',
    accent: 'gold',
    icon: '✦',
  },
  {
    id: 'magic',
    title: 'Magic',
    description:
      'Light and Darkness are morally neutral forces — tools of creation and ruin, wielded by will alone.',
    accent: 'purple',
    icon: '☽',
  },
  {
    id: 'orb',
    title: 'The Orb of Creation',
    description:
      'The anchor of all reality. Without it, realms unravel and existence itself begins to forget its shape.',
    accent: 'gold',
    icon: '◎',
  },
  {
    id: 'high-plane',
    title: 'The High Plane',
    description:
      'A realm above realms — where cosmic powers watch, scheme, and occasionally descend to rewrite fate.',
    accent: 'teal',
    icon: '△',
  },
  {
    id: 'realmbreakers',
    title: 'The Realmbreakers',
    description:
      'Beings who shattered the rules of reality itself — leaving fractures that still bleed through the worlds.',
    accent: 'crimson',
    icon: '⬡',
  },
]
