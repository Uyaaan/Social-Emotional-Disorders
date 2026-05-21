import { ChevronDown, ChevronUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { accentClasses } from '@/lib/accents'
import DisorderDetail from '@/components/DisorderDetail'

export default function DisorderCard({ d, expanded, onToggle, query }) {
  const a = accentClasses(d.accent)
  return (
    <div
      className={
        'overflow-hidden rounded-3xl border bg-surface transition-all ' +
        (expanded ? 'border-border-strong shadow-soft' : 'border-border')
      }
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`disorder-${d.id}-detail`}
        className="block w-full text-left"
      >
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-surface-alt">
          <img
            src={`/images/${d.id}-1.jpg`}
            alt={d.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute left-3 top-3">
            <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur ${a.bg} ${a.fg}`}>
              {d.category === 'emotional' ? 'Emotional' : 'Social'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3.5">
          <div className="min-w-0 flex-1">
            <div className="font-semibold tracking-tight text-ink">
              <Highlight text={d.name} q={query} />
            </div>
            <div className="mt-0.5 line-clamp-2 text-[12.5px] leading-snug text-ink-soft">
              <Highlight text={d.tagline} q={query} />
            </div>
          </div>
          <span className="shrink-0 text-ink-soft">
            {expanded ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`disorder-${d.id}-detail`}
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border"
          >
            <DisorderDetail d={d} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Highlight({ text, q }) {
  if (!q || !text) return text
  const lc = text.toLowerCase()
  const i = lc.indexOf(q)
  if (i < 0) return text
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded-sm bg-yellow-200/60 px-0.5 text-inherit">
        {text.slice(i, i + q.length)}
      </mark>
      {text.slice(i + q.length)}
    </>
  )
}
