import { useState } from 'react'
import { ChevronDown, ChevronUp, Sparkle } from 'lucide-react'
import { accentClasses } from '@/lib/accents'
import { MaterialIllo } from '@/components/Illustrations'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'symptoms', label: 'Symptoms' },
  { id: 'strategies', label: 'Strategies' },
  { id: 'materials', label: 'Materials' },
]

export default function DisorderDetail({ d }) {
  const [tab, setTab] = useState('overview')
  const a = accentClasses(d.accent)

  return (
    <div>
      <div
        role="tablist"
        aria-label={`${d.name} sections`}
        className="scrollbar-hidden flex gap-0 overflow-x-auto border-b border-border bg-surface-alt/50 px-2 pt-1"
      >
        {TABS.map((t) => {
          const active = tab === t.id
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`tab-panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={
                'whitespace-nowrap border-b-2 px-2.5 py-2.5 text-[12.5px] transition ' +
                (active
                  ? 'border-accent font-semibold text-ink'
                  : 'border-transparent font-medium text-ink-soft hover:text-ink')
              }
            >
              {t.label}
            </button>
          )
        })}
      </div>

      <div id={`tab-panel-${tab}`} role="tabpanel" className="px-3.5 pb-4 pt-3.5">
        {tab === 'overview' && <OverviewTab d={d} a={a} />}
        {tab === 'symptoms' && <AccordionList items={d.symptoms} a={a} kind="symptoms" />}
        {tab === 'strategies' && <AccordionList items={d.strategies || []} a={a} kind="strategies" />}
        {tab === 'materials' && <MaterialsTab items={d.instructionalMaterials || []} a={a} />}
      </div>
    </div>
  )
}

function OverviewTab({ d, a }) {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl bg-surface-alt">
        <img
          src={`/images/${d.id}-2.jpg`}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <p className="text-[14px] leading-relaxed text-ink">{d.definition}</p>

      <div className={`flex items-center gap-2 rounded-2xl px-3 py-3 ${a.bg} ${a.fg}`}>
        <Sparkle size={14} aria-hidden="true" />
        <span className="text-[12.5px] font-medium leading-snug">
          In the classroom: {d.tagline.toLowerCase().replace(/\.$/, '')}.
        </span>
      </div>

      {d.types && d.types.length > 0 && (
        <div>
          <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
            Types
          </h4>
          <ul className="flex flex-wrap gap-1.5">
            {d.types.map((t) => (
              <li
                key={t.title}
                className="rounded-full bg-surface-alt px-2.5 py-1 text-[11.5px] font-medium text-ink"
              >
                {t.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2">
        <MiniStat label="Symptoms" n={d.symptoms?.length || 0} />
        <MiniStat label="Strategies" n={d.strategies?.length || 0} />
        <MiniStat label="Materials" n={d.instructionalMaterials?.length || 0} />
        <MiniStat label="References" n={d.references?.length || 0} />
      </div>
    </div>
  )
}

function MiniStat({ label, n }) {
  return (
    <div className="flex items-baseline justify-between rounded-2xl bg-surface-alt px-3 py-2.5">
      <span className="text-[11px] uppercase tracking-wider text-ink-soft">{label}</span>
      <span className="font-display text-[16px] font-bold text-ink">{n}</span>
    </div>
  )
}

function AccordionList({ items, a, kind }) {
  const [open, setOpen] = useState(-1)
  if (!items || items.length === 0) {
    return (
      <p className="rounded-2xl bg-surface-alt p-3 text-center text-[12.5px] text-ink-soft">
        No {kind} listed yet.
      </p>
    )
  }
  return (
    <div className="flex flex-col gap-1.5">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={
              'overflow-hidden rounded-2xl border transition ' +
              (isOpen ? 'border-border-strong bg-surface-alt' : 'border-border bg-transparent')
            }
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-ink"
            >
              <span
                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-display text-[11.5px] font-bold ${a.bg} ${a.fg}`}
              >
                {i + 1}
              </span>
              <span className="flex-1 text-[13.5px] font-medium">{it.title}</span>
              {isOpen ? (
                <ChevronUp size={15} className="shrink-0 text-ink-soft" aria-hidden="true" />
              ) : (
                <ChevronDown size={15} className="shrink-0 text-ink-soft" aria-hidden="true" />
              )}
            </button>
            {isOpen && (
              <div className="px-3 pb-3 pl-[2.85rem] text-[13px] leading-relaxed text-ink-soft">
                {it.body}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function MaterialsTab({ items, a }) {
  if (!items || items.length === 0) {
    return (
      <p className="rounded-2xl bg-surface-alt p-3 text-center text-[12.5px] text-ink-soft">
        Materials for this disorder are still being curated.
      </p>
    )
  }
  const fgVar = `var(--color-${a.fg.replace('text-', '')})`
  const bgVar = `var(--color-${a.bg.replace('bg-', '')})`
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((m, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-3"
        >
          <div className="shrink-0">
            <MaterialIllo kind={m.illo || 'card'} size={56} fg={fgVar} bg={bgVar} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[13.5px] font-semibold tracking-tight text-ink">{m.title}</div>
            {m.body && (
              <div className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">{m.body}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
