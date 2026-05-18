import { Hero } from './components/sections/Hero'
import { WorldSection } from './components/sections/WorldSection'
import { CrewSection } from './components/sections/CrewSection'
import { SeasonSection } from './components/sections/SeasonSection'
import { ThemesSection } from './components/sections/ThemesSection'
import { FinaleSection } from './components/sections/FinaleSection'
import { ProgressNav } from './components/layout/ProgressNav'
import { SectionDivider } from './components/layout/SectionDivider'
import { seasons } from './data/seasons'

function App() {
  return (
    <div className="relative min-h-screen bg-void-deep text-white">
      <ProgressNav />
      <main>
        <Hero />
        <SectionDivider from="transparent" to="rgba(45, 212, 191, 0.5)" />
        <WorldSection />
        <SectionDivider from="transparent" to="rgba(232, 197, 71, 0.5)" />
        <CrewSection />
        {seasons.map((season, i) => {
          const accents = ['rgba(232, 197, 71, 0.5)', 'rgba(155, 127, 212, 0.5)', 'rgba(255, 45, 74, 0.5)']
          return (
            <div key={season.id}>
              <SectionDivider from="transparent" to={accents[i]} />
              <SeasonSection season={season} />
            </div>
          )
        })}
        <ThemesSection />
        <FinaleSection />
      </main>
    </div>
  )
}

export default App
