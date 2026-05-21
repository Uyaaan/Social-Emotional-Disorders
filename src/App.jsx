import { Route, Routes } from 'react-router-dom'
import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'
import HomeScreen from '@/components/HomeScreen'
import IntroScreen from '@/components/IntroScreen'
import DisordersScreen from '@/components/DisordersScreen'
import ReferencesScreen from '@/components/ReferencesScreen'
import AboutScreen from '@/components/AboutScreen'

function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/intro" element={<IntroScreen />} />
          <Route path="/disorders" element={<DisordersScreen />} />
          <Route path="/references" element={<ReferencesScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  )
}

export default App
