import { useEffect, useState } from 'react'
import { numberedSections, sectionIds } from '@/data/sections'
import useCurrentSection from '@/hooks/useCurrentSection'
import { cn } from '@/lib/cn'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const activeId = useCurrentSection(sectionIds)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const numberedIndex = numberedSections.findIndex((s) => s.id === activeId)
  const showCounter = activeId && activeId !== 'top' && numberedIndex >= 0

  return (
    <header
      className={cn(
        'sticky top-0 z-30 transition-all duration-200',
        scrolled
          ? 'border-b border-warmgray/80 bg-cream/85 backdrop-blur-md'
          : 'border-b border-transparent bg-cream'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#top"
          className="group flex flex-col leading-tight transition-opacity hover:opacity-80"
        >
          <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
            Eleven Minds
          </span>
          <span className="text-[11px] font-normal text-muted sm:text-xs">
            A guide to social-emotional disorders
          </span>
        </a>
        {showCounter ? (
          <div
            className="rounded-full bg-ink/85 px-3 py-1 text-xs font-medium tabular-nums text-cream backdrop-blur-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            {numberedIndex + 1} / {numberedSections.length}
          </div>
        ) : (
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted sm:text-xs">
            Presentation
          </span>
        )}
      </div>
    </header>
  )
}

export default Header
