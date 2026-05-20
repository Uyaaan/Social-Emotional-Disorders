import * as Accordion from '@radix-ui/react-accordion'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, GitCompare, X } from 'lucide-react'
import { useState } from 'react'
import Badge from '@/components/Badge'
import PlaceholderImage from '@/components/PlaceholderImage'
import { categoryLabels } from '@/data/disorders'
import { cn } from '@/lib/cn'
import DisorderSection from './DisorderSection'

const categoryStripe = { emotional: 'bg-sage', social: 'bg-lavender' }

// ─── helpers ────────────────────────────────────────────────────────────────

function chipLabel(text) {
  for (const sep of [' — ', ' – ', ' - ']) {
    const idx = text.indexOf(sep)
    if (idx > 5) return text.slice(0, idx)
  }
  if (text.length <= 52) return text
  return text.split(' ').slice(0, 7).join(' ') + '…'
}

function firstSentences(text, n = 2) {
  if (!text) return ''
  let count = 0
  for (let i = 0; i < text.length; i++) {
    if ('.!?'.includes(text[i])) {
      count++
      if (count === n) return text.slice(0, i + 1)
    }
  }
  return text
}

function isEmpty(v) {
  if (v == null) return true
  if (Array.isArray(v)) return v.length === 0
  if (typeof v === 'object') return Object.keys(v).length === 0
  if (typeof v === 'string') return v.trim().length === 0
  return false
}

// ─── content components ─────────────────────────────────────────────────────

function SignChips({ signs, category }) {
  const chipClass =
    category === 'emotional'
      ? 'bg-sage-soft/60 text-sage-deep border-sage/30'
      : 'bg-lavender-soft/60 text-lavender-deep border-lavender/30'

  function chips(items) {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'cursor-default rounded-full border px-3 py-1.5 text-sm font-medium',
              chipClass
            )}
          >
            {chipLabel(item)}
          </motion.span>
        ))}
      </div>
    )
  }

  if (Array.isArray(signs)) return chips(signs)

  return (
    <div className="space-y-4">
      {Object.entries(signs).map(([group, items]) => (
        <div key={group}>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
            {group}
          </p>
          {chips(items)}
        </div>
      ))}
    </div>
  )
}

function ExpandableStep({ number, title, body, category }) {
  const [open, setOpen] = useState(false)
  const numColor =
    category === 'emotional' ? 'text-sage-deep' : 'text-lavender-deep'

  return (
    <div className="border-b border-warmgray/50 last:border-0">
      <button
        type="button"
        onClick={() => body && setOpen((o) => !o)}
        className={cn(
          'flex w-full items-start gap-4 py-3 text-left',
          body && 'rounded-xl px-2 -mx-2 transition-colors hover:bg-peach/20'
        )}
      >
        <span
          className={cn(
            'mt-0.5 min-w-[2rem] font-display text-2xl font-bold leading-none',
            numColor
          )}
        >
          {number}
        </span>
        <span className="flex-1 text-sm font-semibold text-ink sm:text-base">
          {title}
        </span>
        {body ? (
          <ChevronDown
            className={cn(
              'mt-1 h-4 w-4 shrink-0 text-muted transition-transform',
              open && 'rotate-180'
            )}
            strokeWidth={2}
            aria-hidden="true"
          />
        ) : null}
      </button>
      <AnimatePresence initial={false}>
        {open && body ? (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="ml-14 pb-4 text-sm text-ink/70">{body}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function ChipGrid({ items, category }) {
  const chipClass =
    category === 'emotional'
      ? 'bg-sage-soft/50 text-sage-deep border-sage/30'
      : 'bg-lavender-soft/50 text-lavender-deep border-lavender/30'

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          className={cn('rounded-full border px-3 py-1.5 text-sm font-medium', chipClass)}
        >
          {typeof item === 'string' ? item : item.title}
        </span>
      ))}
    </div>
  )
}

// ─── main modal ─────────────────────────────────────────────────────────────

function DisorderModal({ disorder, open, onClose, onCompare }) {
  if (!disorder) return null

  const cat = disorder.category

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm data-[state=closed]:animate-overlay-fade-out data-[state=open]:animate-overlay-fade-in" />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            'fixed inset-0 z-50 flex flex-col bg-cream',
            'sm:inset-auto sm:left-1/2 sm:top-1/2 sm:max-h-[90vh] sm:w-[92vw] sm:max-w-2xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl sm:shadow-xl',
            'data-[state=closed]:animate-content-hide data-[state=open]:animate-content-show',
            'focus:outline-none'
          )}
        >
          {/* Category stripe */}
          <div
            className={cn('h-1.5 w-full sm:rounded-t-3xl', categoryStripe[cat])}
            aria-hidden="true"
          />

          {/* Header: image + title + close */}
          <div className="shrink-0 px-4 pt-4 sm:px-6 sm:pt-5">
            <PlaceholderImage
              category={cat}
              aspect="21/9"
              alt={`${disorder.name} illustration placeholder`}
            />
            <div className="mt-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <Badge variant={cat}>{categoryLabels[cat]}</Badge>
                <Dialog.Title className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                  {disorder.name}
                </Dialog.Title>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close"
                  className="shrink-0 rounded-full border border-warmgray bg-surface p-2 text-ink/70 transition-colors hover:bg-peach/40 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep"
                >
                  <X className="h-4 w-4" strokeWidth={2} />
                </button>
              </Dialog.Close>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto">
            {/* Definition — always visible, trimmed to 2 sentences */}
            <div className="border-t border-warmgray/60 px-4 py-5 sm:px-6">
              <p className="text-sm text-ink/80 sm:text-base">
                {firstSentences(disorder.definition, 2)}
              </p>
            </div>

            <Accordion.Root
              type="multiple"
              defaultValue={['types']}
              className="w-full"
            >
              {/* Types */}
              {isEmpty(disorder.types) ? (
                <DisorderSection id="types" title="Types" comingSoon />
              ) : (
                <DisorderSection
                  id="types"
                  title="Types"
                  count={disorder.types.length}
                >
                  <div className="space-y-3">
                    {disorder.types.map((item, i) => (
                      <div key={i} className="text-sm text-ink/80 sm:text-base">
                        {item.title ? (
                          <span className="font-semibold text-ink">{item.title}</span>
                        ) : null}
                        {item.title && item.body ? <span> — </span> : null}
                        {item.body ? <span>{item.body}</span> : null}
                      </div>
                    ))}
                  </div>
                </DisorderSection>
              )}

              {/* Signs — chips */}
              {isEmpty(disorder.signs) ? (
                <DisorderSection id="signs" title="Common Signs" comingSoon />
              ) : (
                <DisorderSection id="signs" title="Common Signs">
                  <SignChips signs={disorder.signs} category={cat} />
                </DisorderSection>
              )}

              {/* Strategies — numbered expandable */}
              {isEmpty(disorder.strategies) ? (
                <DisorderSection id="strategies" title="Strategies" comingSoon />
              ) : (
                <DisorderSection
                  id="strategies"
                  title="Strategies"
                  count={disorder.strategies.length}
                >
                  <div>
                    {disorder.strategies.map((item, i) => (
                      <ExpandableStep
                        key={i}
                        number={String(i + 1).padStart(2, '0')}
                        title={item.title}
                        body={item.body}
                        category={cat}
                      />
                    ))}
                  </div>
                </DisorderSection>
              )}

              {/* Materials — chip grid */}
              {isEmpty(disorder.instructionalMaterials) ? (
                <DisorderSection id="materials" title="Instructional Materials" comingSoon />
              ) : (
                <DisorderSection id="materials" title="Instructional Materials">
                  <ChipGrid items={disorder.instructionalMaterials} category={cat} />
                </DisorderSection>
              )}

              {/* Accommodations — chip grid */}
              {isEmpty(disorder.accommodations) ? (
                <DisorderSection id="accommodations" title="Accommodations" comingSoon />
              ) : (
                <DisorderSection id="accommodations" title="Accommodations">
                  <ChipGrid items={disorder.accommodations} category={cat} />
                </DisorderSection>
              )}

              {/* For Teachers — pullquote */}
              {isEmpty(disorder.forTeachers) ? (
                <DisorderSection id="for-teachers" title="For Future Teachers" comingSoon />
              ) : (
                <DisorderSection id="for-teachers" title="For Future Teachers">
                  <blockquote
                    className={cn(
                      'border-l-2 pl-4 text-sm italic text-ink/75 sm:text-base',
                      cat === 'emotional' ? 'border-sage' : 'border-lavender'
                    )}
                  >
                    {firstSentences(disorder.forTeachers, 3)}
                  </blockquote>
                </DisorderSection>
              )}
            </Accordion.Root>

            {/* Compare CTA */}
            <div className="border-t border-warmgray/60 px-4 py-5 sm:px-6">
              <button
                type="button"
                onClick={() => onCompare(disorder)}
                className="inline-flex items-center gap-2 rounded-full border border-warmgray bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-peach/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep"
              >
                <GitCompare className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                Compare with another disorder
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DisorderModal
