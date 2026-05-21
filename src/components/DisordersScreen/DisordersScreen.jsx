import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { disorders } from '@/data/enriched'
import DisorderCard from '@/components/DisorderCard'

const FILTERS = [
  { id: 'all', label: 'All', n: disorders.length },
  { id: 'emotional', label: 'Emotional', n: disorders.filter((d) => d.category === 'emotional').length },
  { id: 'social', label: 'Social', n: disorders.filter((d) => d.category === 'social').length },
]

export default function DisordersScreen() {
  const [params, setParams] = useSearchParams()
  const initialExpand = params.get('expand')

  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [expandedId, setExpandedId] = useState(initialExpand || null)
  const cardRefs = useRef({})

  useEffect(() => {
    if (!initialExpand) return
    requestAnimationFrame(() => {
      cardRefs.current[initialExpand]?.scrollIntoView({ block: 'start', behavior: 'smooth' })
    })
    const next = new URLSearchParams(params)
    next.delete('expand')
    setParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialExpand])

  const q = query.trim().toLowerCase()
  const items = useMemo(() => {
    return disorders.filter((d) => {
      if (filter !== 'all' && d.category !== filter) return false
      if (!q) return true
      const hay = [
        d.name,
        d.tagline,
        d.definition,
        ...(d.symptoms || []).map((s) => `${s.title} ${s.body}`),
        ...(d.strategies || []).map((s) => `${s.title} ${s.body}`),
        ...(d.instructionalMaterials || []).map((m) => `${m.title} ${m.body}`),
        ...(d.types || []).map((t) => `${t.title} ${t.body}`),
      ]
        .join(' ')
        .toLowerCase()
      return hay.includes(q)
    })
  }, [q, filter])

  return (
    <div className="mx-auto max-w-screen-sm px-4 pb-8 pt-5">
      <h1 className="px-1 font-display text-[28px] font-bold leading-tight tracking-[-0.03em] text-ink">
        Disorders
      </h1>
      <p className="mb-4 mt-1.5 px-1 text-[13.5px] leading-relaxed text-ink-soft">
        Tap any card to expand. Search across symptoms, strategies, and materials.
      </p>

      <div className="mb-3 flex items-center gap-2 rounded-2xl border border-border bg-surface px-3 py-2.5">
        <Search size={16} className="shrink-0 text-ink-soft" aria-hidden="true" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search disorders, symptoms, strategies…"
          aria-label="Search disorders"
          className="min-w-0 flex-1 border-0 bg-transparent text-[14px] text-ink placeholder:text-ink-soft focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="flex shrink-0 rounded p-0.5 text-ink-soft hover:bg-surface-alt"
          >
            <X size={14} aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="scrollbar-hidden mb-4 flex gap-1.5 overflow-x-auto pb-1">
        {FILTERS.map((f) => {
          const active = filter === f.id
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={
                'inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition ' +
                (active
                  ? 'border-ink bg-ink text-bg'
                  : 'border-border-strong bg-transparent text-ink hover:bg-surface-alt')
              }
            >
              {f.label}
              <span
                className={
                  'rounded-full px-1.5 text-[10.5px] ' +
                  (active ? 'opacity-70' : 'bg-tag-bg opacity-70')
                }
              >
                {f.n}
              </span>
            </button>
          )
        })}
      </div>

      {items.length === 0 ? (
        <div className="px-5 py-10 text-center text-[13px] text-ink-soft">
          <div className="mb-2 text-2xl">—</div>
          Nothing matches "{query}". Try a different term.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((d) => (
            <div
              key={d.id}
              ref={(el) => {
                cardRefs.current[d.id] = el
              }}
            >
              <DisorderCard
                d={d}
                expanded={expandedId === d.id}
                onToggle={() => setExpandedId(expandedId === d.id ? null : d.id)}
                query={q}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
