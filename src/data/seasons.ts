import { diagrams, scenes } from './images'

export type TimelineEvent = {
  title: string
  blurb: string
}

export type ImageOrientation = 'landscape' | 'portrait'

export type SeasonScene = {
  label: string
  src: string
  orientation: ImageOrientation
  fit?: 'cover' | 'contain'
}

export type FeaturedPanel = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  orientation?: ImageOrientation
  fit?: 'cover' | 'contain'
}

export type SeasonData = {
  id: string
  number: number
  title: string
  subtitle: string
  tone: string
  themes: string[]
  scenes: SeasonScene[]
  events: TimelineEvent[]
  featured: FeaturedPanel[]
}

export const seasons: SeasonData[] = [
  {
    id: 'awakening',
    number: 1,
    title: 'Awakening',
    subtitle: 'Season 1',
    tone: 'Hopeful adventure with shadows gathering at the edges.',
    themes: ['Discovery', 'Innocence', 'First Sacrifice', 'The Realm Awakens'],
    scenes: [
      {
        label: 'Lucas Awakens — The Glaive of Light',
        src: scenes.lucasGlaive,
        orientation: 'portrait',
        fit: 'contain',
      },
      {
        label: 'Derrick — Into the Void',
        src: scenes.derrickVoid,
        orientation: 'portrait',
        fit: 'contain',
      },
      {
        label: "Aira's Sacrifice",
        src: scenes.airaSacrifice,
        orientation: 'landscape',
        fit: 'cover',
      },
    ],
    events: [
      {
        title: 'Lucas Awakens',
        blurb: 'A village boy feels power stir for the first time — and nothing feels ordinary again.',
      },
      {
        title: 'Powers Revealed',
        blurb: 'Radiation-born gifts manifest in chaos. Lucas learns he is not alone.',
      },
      {
        title: 'Derrick Emerges',
        blurb: 'A rival with ambition as sharp as his smile challenges everything Lucas believes.',
      },
      {
        title: "Aira's Sacrifice",
        blurb: 'Love becomes loss. The crew learns heroism has a price written in blood.',
      },
      {
        title: 'The Realm Crystal',
        blurb: 'An artifact tied to Serenia’s heart — and a key to understanding the realms.',
      },
      {
        title: 'First Realm Tear',
        blurb: 'Reality splits. The world is larger — and more fragile — than anyone imagined.',
      },
    ],
    featured: [
      {
        id: 'sacrifice',
        title: 'The Sacrifice',
        subtitle: 'Aira’s Final Light',
        description:
          'The moment everything changed — a still frame frozen between hope and grief.',
        image: scenes.airaSacrifice,
        orientation: 'landscape',
        fit: 'cover',
      },
    ],
  },
  {
    id: 'darkness-rises',
    number: 2,
    title: 'Darkness Rises',
    subtitle: 'Season 2',
    tone: 'The world expands. Ancient powers stir. Nothing is as small as it seemed.',
    themes: ['Manipulation', 'Ancient Evil', 'Cosmic Scale', 'Return from Shadow'],
    scenes: [
      {
        label: 'Terrorbyte Meets the Lord of Darkness',
        src: scenes.terrorbyteMeetsLord,
        orientation: 'landscape',
        fit: 'cover',
      },
      {
        label: 'Forging the Spear of Realms',
        src: scenes.spearForging,
        orientation: 'portrait',
        fit: 'contain',
      },
      {
        label: 'Lord of Darkness — Decayed Form',
        src: diagrams.lordOfDarkness,
        orientation: 'portrait',
        fit: 'contain',
      },
    ],
    events: [
      {
        title: 'Lord of Darkness',
        blurb: 'An entity older than realms whispers from the void — and someone listens.',
      },
      {
        title: "Derrick's Web",
        blurb: 'Rivalry becomes conspiracy. Trust frays at the seams.',
      },
      {
        title: 'Terrorbyte Arrives',
        blurb: 'A force from beyond comprehension enters the board — smiling.',
      },
      {
        title: 'Helion Revealed',
        blurb: 'Cosmic machinery turns. The High Plane casts its shadow downward.',
      },
      {
        title: 'Spear of Realms',
        blurb: 'A weapon forged to pierce the laws of existence itself.',
      },
      {
        title: 'Aira Returns',
        blurb: 'Impossible — yet undeniable. Death may not be the final word.',
      },
      {
        title: 'Realmbreaker Hints',
        blurb: 'Fractures in reality widen. The rules were always meant to break.',
      },
    ],
    featured: [
      {
        id: 'terrorbyte-lord',
        title: 'Terrorbyte Meets the Lord of Darkness',
        subtitle: 'When Two Voids Collide',
        description:
          'A convergence of annihilation and ambition — the chamber where cosmic evil negotiates with something worse.',
        image: scenes.terrorbyteMeetsLord,
        orientation: 'landscape',
        fit: 'cover',
      },
      {
        id: 'spear-forging',
        title: 'Forging the Spear of Realms',
        subtitle: 'Weapon of Impossible Law',
        description:
          'Ancient fire, realm-steel, and purpose sharp enough to cut the laws of existence itself.',
        image: scenes.spearForging,
        orientation: 'portrait',
        fit: 'contain',
      },
    ],
  },
  {
    id: 'the-fall',
    number: 3,
    title: 'The Fall',
    subtitle: 'Season 3',
    tone: 'Catastrophic. Overwhelming. Reality itself begins to scream.',
    themes: ['Collapse', 'The Failure', 'Loss of Self', 'Breaking the Orb'],
    scenes: [
      {
        label: 'Axel & Terrorbyte — Alliances of Ruin',
        src: diagrams.axel,
        orientation: 'portrait',
        fit: 'contain',
      },
      {
        label: 'The Failure — Shattered Form',
        src: diagrams.theFailure,
        orientation: 'portrait',
        fit: 'contain',
      },
      {
        label: 'The Orb of Creation — The Mural',
        src: scenes.theFailureMural,
        orientation: 'portrait',
        fit: 'contain',
      },
    ],
    events: [
      {
        title: 'Axel & Terrorbyte',
        blurb: 'Alliances of ruin tighten. The endgame accelerates.',
      },
      {
        title: 'Orb Containment',
        blurb: 'Humanity’s last gamble — cage the source of all creation.',
      },
      {
        title: 'The Failure Arrives',
        blurb: 'Not a villain. A verdict. Existence itself comes to collect.',
      },
      {
        title: 'Teran Becomes a Husk',
        blurb: 'The guardian falls hollow — a shell where a soul once stood.',
      },
      {
        title: 'Orb Instability',
        blurb: 'Cracks spread through the anchor of reality. Time runs thin.',
      },
      {
        title: 'Lucas Destroys the Orb',
        blurb: 'In the ultimate act of defiance, creation itself is shattered to save what remains.',
      },
    ],
    featured: [
      {
        id: 'failure-arrives',
        title: 'The Failure Arrives',
        subtitle: 'Existence Comes to Collect',
        description:
          'The visual centerpiece. Fractured space, living armor, and the entity that ends cycles.',
        image: diagrams.theFailure,
        orientation: 'portrait',
        fit: 'contain',
      },
      {
        id: 'orb-breaks',
        title: 'The Orb of Creation Breaks',
        subtitle: 'Reality Unravels',
        description:
          'Light explodes outward. Realms scream. The moment Chapter 1 breaks the world to save it.',
        image: scenes.theFailureMural,
        orientation: 'portrait',
        fit: 'contain',
      },
    ],
  },
]
