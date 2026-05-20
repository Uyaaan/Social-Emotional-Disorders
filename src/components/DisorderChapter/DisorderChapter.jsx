import { AnimatePresence, motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/cn'
import ChapterIntro from './ChapterIntro'

// ─── helpers ────────────────────────────────────────────────────────────────

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

// ─── content sub-components ─────────────────────────────────────────────────

function ChipRow({ items, openKey, onToggle, chipClass, expandedClass }) {
  const openItem = items.find((it) => it.key === openKey)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => {
          const isOpen = it.key === openKey
          return (
            <button
              key={it.key}
              type="button"
              onClick={() => onToggle(isOpen ? null : it.key)}
              aria-expanded={isOpen}
              className={cn(
                'inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all',
                chipClass,
                isOpen && 'ring-2 ring-ink/20'
              )}
            >
              <span>{it.title}</span>
              <Plus
                className={cn(
                  'h-3 w-3 opacity-50 transition-transform',
                  isOpen && 'rotate-45 opacity-100'
                )}
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </button>
          )
        })}
      </div>

      <AnimatePresence initial={false}>
        {openItem ? (
          <motion.div
            key={openItem.key}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div
              className={cn(
                'mt-3 rounded-2xl border p-4 text-sm text-ink/85 sm:text-base',
                expandedClass
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="font-semibold text-ink">{openItem.title}</p>
                  {openItem.body ? (
                    <p className="mt-1.5 text-ink/70">{openItem.body}</p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => onToggle(null)}
                  aria-label="Close"
                  className="shrink-0 rounded-full p-1 text-ink/50 transition-colors hover:bg-cream hover:text-ink"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2} />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function SignsBlock({ signs, category }) {
  const [openKey, setOpenKey] = useState(null)

  const chipClass =
    category === 'emotional'
      ? 'bg-sage-soft/60 text-sage-deep border-sage/30 hover:bg-sage-soft/80'
      : 'bg-lavender-soft/60 text-lavender-deep border-lavender/30 hover:bg-lavender-soft/80'

  const expandedClass =
    category === 'emotional'
      ? 'border-sage/40 bg-sage-soft/40'
      : 'border-lavender/40 bg-lavender-soft/40'

  if (Array.isArray(signs)) {
    const items = signs.map((s, i) => ({
      key: `s-${i}`,
      title: s.title,
      body: s.body,
    }))
    return (
      <ChipRow
        items={items}
        openKey={openKey}
        onToggle={setOpenKey}
        chipClass={chipClass}
        expandedClass={expandedClass}
      />
    )
  }

  return (
    <div className="space-y-5">
      {Object.entries(signs).map(([group, groupItems]) => {
        const items = groupItems.map((s, i) => ({
          key: `${group}-${i}`,
          title: s.title,
          body: s.body,
        }))
        return (
          <div key={group}>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
              {group}
            </p>
            <ChipRow
              items={items}
              openKey={openKey}
              onToggle={setOpenKey}
              chipClass={chipClass}
              expandedClass={expandedClass}
            />
          </div>
        )
      })}
    </div>
  )
}

function NumberedSteps({ items, category }) {
  const numColor =
    category === 'emotional' ? 'text-sage-deep' : 'text-lavender-deep'

  return (
    <ol className="space-y-5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4">
          <span
            className={cn(
              'mt-0.5 min-w-[2.25rem] font-display text-2xl font-extrabold leading-none tabular-nums sm:text-3xl',
              numColor
            )}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="flex-1">
            {item.title ? (
              <p className="text-sm font-semibold text-ink sm:text-base">
                {item.title}
              </p>
            ) : null}
            {item.body ? (
              <p
                className={cn(
                  'text-sm text-ink/70 sm:text-base',
                  item.title && 'mt-1'
                )}
              >
                {item.body}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
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
          className={cn(
            'rounded-full border px-3 py-1.5 text-sm font-medium',
            chipClass
          )}
        >
          {typeof item === 'string' ? item : item.title}
        </span>
      ))}
    </div>
  )
}

function TypesList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="rounded-2xl border border-warmgray/70 bg-surface/50 p-4 sm:p-5"
        >
          {item.title ? (
            <p className="text-sm font-semibold text-ink sm:text-base">
              {item.title}
            </p>
          ) : null}
          {item.body ? (
            <p
              className={cn(
                'text-sm text-ink/70 sm:text-base',
                item.title && 'mt-1.5'
              )}
            >
              {item.body}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

function ComingSoonNote({ label }) {
  return (
    <p className="text-xs italic text-muted">
      <span className="font-medium not-italic text-ink/60">{label}</span> · content coming soon
    </p>
  )
}

function SectionBlock({ title, comingSoon, children, count, hint }) {
  return (
    <div className="mt-10 border-t border-warmgray/60 pt-7">
      <div className="mb-4 flex items-center gap-3">
        <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
          {title}
        </h3>
        {count != null ? (
          <span className="rounded-full bg-peach/60 px-2 py-0.5 text-[11px] font-medium text-ink/70">
            {count}
          </span>
        ) : null}
      </div>
      {comingSoon ? (
        <ComingSoonNote label={title} />
      ) : (
        <>
          {hint ? <p className="mb-3 text-xs text-muted">{hint}</p> : null}
          {children}
        </>
      )}
    </div>
  )
}

// ─── main chapter ───────────────────────────────────────────────────────────

function DisorderChapter({ disorder, number }) {
  const cat = disorder.category

  return (
    <section
      id={disorder.id}
      className="scroll-mt-4 border-t border-warmgray/60"
      aria-label={`${disorder.name}`}
    >
      <ChapterIntro disorder={disorder} number={number} />

      <div className="mx-auto max-w-3xl px-4 pb-28 sm:px-6 sm:pb-24">
        <p className="text-base text-ink/85 sm:text-lg">
          {firstSentences(disorder.definition, 2)}
        </p>

        {/* "Content coming soon" placeholders are commented out for now.
            Restore the `isEmpty(...) ? <SectionBlock ... comingSoon /> : (...)`
            ternary on each section when content is ready. */}

        {/* {isEmpty(disorder.types) ? (<SectionBlock title="Types" comingSoon />) : ( */}
        {!isEmpty(disorder.types) && (
          <SectionBlock title="Types" count={disorder.types.length}>
            <TypesList items={disorder.types} />
          </SectionBlock>
        )}
        {/* )} */}

        {/* {isEmpty(disorder.signs) ? (<SectionBlock title="Common signs" comingSoon />) : ( */}
        {!isEmpty(disorder.signs) && (
          <SectionBlock title="Common signs" hint="Tap any symptom to read the full description.">
            <SignsBlock signs={disorder.signs} category={cat} />
          </SectionBlock>
        )}
        {/* )} */}

        {/* {isEmpty(disorder.strategies) ? (<SectionBlock title="Strategies" comingSoon />) : ( */}
        {!isEmpty(disorder.strategies) && (
          <SectionBlock title="Strategies" count={disorder.strategies.length}>
            <NumberedSteps items={disorder.strategies} category={cat} />
          </SectionBlock>
        )}
        {/* )} */}

        {/* {isEmpty(disorder.instructionalMaterials) ? (<SectionBlock title="Instructional materials" comingSoon />) : ( */}
        {!isEmpty(disorder.instructionalMaterials) && (
          <SectionBlock title="Instructional materials">
            <ChipGrid items={disorder.instructionalMaterials} category={cat} />
          </SectionBlock>
        )}
        {/* )} */}

        {/* {isEmpty(disorder.accommodations) ? (<SectionBlock title="Assessment & accommodations" comingSoon />) : ( */}
        {!isEmpty(disorder.accommodations) && (
          <SectionBlock title="Assessment & accommodations">
            <ChipGrid items={disorder.accommodations} category={cat} />
          </SectionBlock>
        )}
        {/* )} */}

        {/* {isEmpty(disorder.forTeachers) ? (<SectionBlock title="For future teachers" comingSoon />) : ( */}
        {!isEmpty(disorder.forTeachers) && (
          <SectionBlock title="For future teachers">
            <blockquote
              className={cn(
                'border-l-2 pl-4 text-sm italic text-ink/75 sm:text-base',
                cat === 'emotional' ? 'border-sage' : 'border-lavender'
              )}
            >
              {firstSentences(disorder.forTeachers, 3)}
            </blockquote>
          </SectionBlock>
        )}
        {/* )} */}
      </div>
    </section>
  )
}

export default DisorderChapter
