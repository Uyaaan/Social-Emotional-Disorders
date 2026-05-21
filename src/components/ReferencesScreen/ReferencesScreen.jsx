import { useState } from 'react'
import { disorders } from '@/data/enriched'
import { accentClasses } from '@/lib/accents'

export default function ReferencesScreen() {
  const [active, setActive] = useState(disorders[0].id)

  function jumpTo(id) {
    setActive(id)
    document.getElementById(`ref-${id}`)?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <div className="mx-auto max-w-screen-sm px-4 pb-8 pt-5">
      <h1 className="px-1 font-display text-[28px] font-bold leading-tight tracking-[-0.03em] text-ink">
        References
      </h1>
      <p className="mb-4 mt-1.5 px-1 text-[13.5px] leading-relaxed text-ink-soft">
        Sources for all eleven disorders, formatted in APA 7. Tap a disorder to jump.
      </p>

      <div className="scrollbar-hidden mb-4 flex gap-1.5 overflow-x-auto pb-1">
        {disorders.map((d) => {
          const a = accentClasses(d.accent)
          const isActive = active === d.id
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => jumpTo(d.id)}
              className={
                'shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-[11.5px] font-semibold transition ' +
                (isActive ? `${a.dot} text-bg` : `${a.bg} ${a.fg}`)
              }
            >
              {d.name.split(' ')[0]}
            </button>
          )
        })}
      </div>

      <div className="flex flex-col gap-6">
        {disorders.map((d) => {
          const a = accentClasses(d.accent)
          const initials = d.name.match(/[A-Z]/g)?.slice(0, 2).join('') || '··'
          return (
            <section key={d.id} id={`ref-${d.id}`} className="scroll-mt-24">
              <div className="mb-2.5 flex items-center gap-2.5 border-b border-border pb-2">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-lg font-display text-[12px] font-bold tracking-wide ${a.bg} ${a.fg}`}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <h2 className="flex-1 font-display text-[16px] font-bold tracking-tight text-ink">
                  {d.name}
                </h2>
              </div>
              {d.references && d.references.length > 0 ? (
                <ol className="flex list-decimal flex-col gap-2.5 pl-5">
                  {d.references.map((r, i) => (
                    <li key={i} className="text-[12.5px] leading-relaxed text-ink">
                      {r}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-[12.5px] text-ink-soft">References pending.</p>
              )}
            </section>
          )
        })}
      </div>

      <div className="mt-7 rounded-2xl bg-surface-alt p-3.5 text-center text-[12px] leading-relaxed text-ink-soft">
        References ported from the Eleven Minds resource document and formatted in APA 7th edition.
      </div>
    </div>
  )
}
