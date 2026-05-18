import { diagrams } from './images'

export type Character = {
  id: string
  name: string
  role: string
  tagline: string
  personality: string
  motivation: string
  visualNotes: string
  image: string
  accent: string
  glow: string
}

export const crew: Character[] = [
  {
    id: 'lucas',
    name: 'Lucas',
    role: 'The Lightbearer',
    tagline:
      'A boy who dreamed of becoming a hero, only to discover the weight of power threatens his humanity.',
    personality: 'Idealistic, stubborn, fiercely loyal — light that burns too bright.',
    motivation: 'Fear of becoming what he fights against.',
    visualNotes: 'Warm gold aura, worn hero’s cloak, eyes that flicker with unstable radiance.',
    image: diagrams.lucas,
    accent: '#e8c547',
    glow: 'rgba(232, 197, 71, 0.45)',
  },
  {
    id: 'derrick',
    name: 'Derrick',
    role: 'The Rival',
    tagline:
      'Charisma sharpened into a blade — every smile hides a calculation.',
    personality: 'Charming, ruthless, obsessed with control and legacy.',
    motivation: 'Proving he was always meant to lead.',
    visualNotes: 'Cold silver trim, shadowed jawline, purple undertones in his magic.',
    image: diagrams.derrick,
    accent: '#9b7fd4',
    glow: 'rgba(155, 127, 212, 0.4)',
  },
  {
    id: 'aira',
    name: 'Aira',
    role: 'The Sacrifice',
    tagline:
      'She gave everything so others could keep dreaming — and the world has not forgotten.',
    personality: 'Gentle, resolute, quietly devastating in her courage.',
    motivation: 'Protecting the people she loves, no matter the cost.',
    visualNotes: 'Soft teal light, flowing fabrics, a crystal shard always near her heart.',
    image: diagrams.aira,
    accent: '#2dd4bf',
    glow: 'rgba(45, 212, 191, 0.4)',
  },
  {
    id: 'teran',
    name: 'Teran',
    role: 'The Guardian',
    tagline:
      'Duty carved into bone — he stands between chaos and everyone else.',
    personality: 'Stoic, protective, slow to trust but immovable once committed.',
    motivation: 'Fear of failing those who depend on him.',
    visualNotes: 'Armored silhouette, deep blue accents, battle-worn pauldrons.',
    image: diagrams.teran,
    accent: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.4)',
  },
  {
    id: 'egil',
    name: 'Egil',
    role: 'The Strategist',
    tagline:
      'He reads battlefields like scripture — and rarely misinterprets a verse.',
    personality: 'Analytical, dry wit, haunted by choices made in war.',
    motivation: 'Atonement for paths he can never walk back.',
    visualNotes: 'Muted greens, tactical gear, runes etched along his bracers.',
    image: diagrams.egil,
    accent: '#6b9e6b',
    glow: 'rgba(107, 158, 107, 0.35)',
  },
  {
    id: 'kaelis',
    name: 'Kaelis',
    role: 'The Unknown',
    tagline:
      'Purpose without origin — a presence that feels older than the realms themselves.',
    personality: 'Enigmatic, patient, speaks as if remembering futures not yet written.',
    motivation: 'Something beyond mortal understanding — and perhaps beyond mercy.',
    visualNotes: 'Shifting starlight skin, void-black robes with constellation threads.',
    image: diagrams.kaelis,
    accent: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.45)',
  },
]
