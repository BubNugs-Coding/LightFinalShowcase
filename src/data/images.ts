/** Public art paths — files live in /public/art/ */

/** Works locally (/) and on GitHub Pages (/LightFinalShowcase/). */
export function publicAsset(path: string): string {
  const normalized = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}

// Character concept sheets (crew showcase)
export const diagrams = {
  lucas: publicAsset('art/lucasdiagram.png'),
  derrick: publicAsset('art/derrickdiagram.png'),
  aira: publicAsset('art/airadiagram.png'),
  teran: publicAsset('art/terandiagram.png'),
  egil: publicAsset('art/egildiagram.png'),
  kaelis: publicAsset('art/kaelisdiagram.png'),
  helion: publicAsset('art/heliondiagram.png'),
  lordOfDarkness: publicAsset('art/lordofdarknessdiagram.png'),
  terrorbyte: publicAsset('art/terrorbytediagram.png'),
  theFailure: publicAsset('art/thefailurediagram.png'),
  axel: publicAsset('art/axeldiagram.png'),
} as const

// Cinematic scene & story artwork
export const scenes = {
  lucasGlaive: publicAsset('art/lucasglaive.png'),
  derrickVoid: publicAsset('art/derrickvoid.png'),
  airaSacrifice: publicAsset('art/airasacrifice.png'),
  terrorbyteMeetsLord: publicAsset('art/terrorbytemeetslordofdarkness.png'),
  spearForging: publicAsset('art/spearforging.png'),
  theFailureMural: publicAsset('art/thefailuremural.png'),
} as const
