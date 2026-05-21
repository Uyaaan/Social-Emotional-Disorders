import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function PhotoCarousel({ disorders, intervalMs = 4000 }) {
  const scrollerRef = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || paused) return
    const t = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % disorders.length
        const el = scrollerRef.current?.children?.[next]
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        return next
      })
    }, intervalMs)
    return () => clearInterval(t)
  }, [disorders.length, intervalMs, paused])

  function onScroll(e) {
    const el = e.currentTarget
    const slideW = el.clientWidth
    const i = Math.round(el.scrollLeft / slideW)
    if (i !== active) setActive(i)
  }

  function goTo(i) {
    const el = scrollerRef.current?.children?.[i]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setActive(i)
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onPointerLeave={() => setPaused(false)}
        className="snap-x-carousel scrollbar-hidden flex w-full overflow-x-auto"
      >
        {disorders.map((d, i) => (
          <div
            key={d.id}
            className="relative w-full shrink-0"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${disorders.length}: ${d.name}`}
          >
            <Link
              to={`/disorders?expand=${d.id}`}
              className="group block"
              aria-label={`Open ${d.name}`}
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={`/images/${d.id}-1.jpg`}
                  alt={d.name}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft backdrop-blur transition group-hover:bg-accent group-hover:text-accent-fg">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4">
                  <div className="text-xs font-medium uppercase tracking-wider text-white/85">
                    {d.category === 'emotional' ? 'Emotional' : 'Social'}
                  </div>
                  <div className="font-display text-xl font-bold tracking-tight text-white">
                    {d.name}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {disorders.map((d, i) => (
          <button
            key={d.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${d.name}`}
            className={
              i === active
                ? 'h-2 w-5 rounded-full bg-accent transition-all'
                : 'h-2 w-2 rounded-full bg-border-strong transition-all hover:bg-ink-soft'
            }
          />
        ))}
      </div>
    </div>
  )
}
