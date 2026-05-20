import { Fragment } from 'react'
import CategoryDivider from '@/components/CategoryDivider'
import ComparisonSplash from '@/components/ComparisonSplash'
import DisorderChapter from '@/components/DisorderChapter'
import FloatingTOC from '@/components/FloatingTOC'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import ProgressBar from '@/components/ProgressBar'
import { disorders } from '@/data/disorders'

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to intro
      </a>
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <ComparisonSplash />
        {disorders.map((d, i) => {
          const prev = disorders[i - 1]
          const showDivider = !prev || prev.category !== d.category
          return (
            <Fragment key={d.id}>
              {showDivider && <CategoryDivider category={d.category} />}
              <DisorderChapter disorder={d} number={i + 1} />
            </Fragment>
          )
        })}
      </main>
      <FloatingTOC />
      <Footer />
    </div>
  )
}

export default App
