import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const AUTHORS = [
  { n: 'Jackie-Lyn I. Borromeo', r: 'Introduction · Emotional disorders · ADHD' },
  { n: 'Micka Bless B. Remocaldo', r: 'Social disorders · Similarities & differences' },
  { n: 'Janille Louise Y. Amoguis', r: 'Anxiety · Panic · ASD' },
  { n: 'Phomela Marie R. Castroverde', r: 'Depression · Conduct Disorder' },
  { n: 'Julia Clarisse G. Apo', r: 'Bipolar · ODD · RAD' },
  { n: 'Thrizia Pearl J. Borongan', r: 'OCD · PTSD' },
]

export default function AboutScreen() {
  return (
    <div className="mx-auto max-w-screen-sm px-4 pb-8 pt-5">
      <h1 className="mb-4 px-1 font-display text-[28px] font-bold leading-tight tracking-[-0.03em] text-ink">
        About
      </h1>

      <div className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-4">
        <Section title="How to use">
          <ol className="m-0 list-decimal pl-5 text-[14px] leading-relaxed text-ink">
            <li>Browse by category — emotional or social.</li>
            <li>Search by symptom or strategy.</li>
            <li>Tap a card to reveal Overview · Symptoms · Strategies · Materials.</li>
            <li>Open the References page for full APA 7 citations.</li>
          </ol>
        </Section>

        <Divider />

        <div>
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
            Authors
          </div>
          <div className="flex flex-col gap-2.5">
            {AUTHORS.map((p) => (
              <div key={p.n} className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-[13px] font-bold text-accent-fg">
                  {(() => {
                    const parts = p.n.split(' ')
                    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
                  })()}
                </div>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-semibold text-ink">{p.n}</div>
                  <div className="text-[11.5px] text-ink-soft">{p.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        to="/disorders"
        className="mt-4 flex items-center justify-center gap-1.5 rounded-2xl border border-border-strong px-4 py-3 text-[14px] font-semibold text-ink transition hover:bg-surface-alt"
      >
        Browse all disorders <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
        {title}
      </div>
      {typeof children === 'string' ? (
        <p className="m-0 text-[14px] leading-relaxed text-ink">{children}</p>
      ) : (
        children
      )}
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-border" />
}
