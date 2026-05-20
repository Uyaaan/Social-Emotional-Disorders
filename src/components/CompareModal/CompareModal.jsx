import * as Dialog from '@radix-ui/react-dialog'
import { ArrowLeftRight, X } from 'lucide-react'
import Badge from '@/components/Badge'
import PlaceholderImage from '@/components/PlaceholderImage'
import { categoryLabels } from '@/data/disorders'
import { cn } from '@/lib/cn'

const categoryStripe = {
  emotional: 'bg-sage',
  social: 'bg-lavender',
}

const sections = [
  { key: 'definition', label: 'Definition' },
  { key: 'types', label: 'Types' },
  { key: 'signs', label: 'Symptoms' },
  { key: 'strategies', label: 'Strategies' },
  { key: 'instructionalMaterials', label: 'Materials' },
  { key: 'accommodations', label: 'Accommodations' },
  { key: 'forTeachers', label: 'For Future Teachers' },
]

function isEmpty(value) {
  if (value == null) return true
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  if (typeof value === 'string') return value.trim().length === 0
  return false
}

function renderCell(value, sectionKey) {
  if (isEmpty(value)) {
    return <Badge variant="comingSoon">Content coming soon</Badge>
  }

  if (typeof value === 'string') {
    return <p className="text-sm text-ink/80">{value}</p>
  }

  if (sectionKey === 'forTeachers' && typeof value === 'object' && !Array.isArray(value)) {
    return (
      <div className="space-y-3">
        <p className="text-sm italic text-ink/80">{value.intro}</p>
        <ul className="space-y-2 text-sm text-ink/80">
          {value.points.map((point, i) => (
            <li key={i}>
              <span className="font-semibold text-ink">{point.title}</span>
              {' — '}
              <span>{point.body}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (sectionKey === 'signs' && !Array.isArray(value)) {
    return (
      <div className="space-y-3">
        {Object.entries(value).map(([group, items]) => (
          <div key={group}>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-sage-deep">
              {group}
            </p>
            <ul className="mt-1 space-y-1.5 text-sm text-ink/80">
              {items.map((it, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink/40"
                    aria-hidden="true"
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  if (Array.isArray(value) && typeof value[0] === 'string') {
    return (
      <ul className="space-y-1.5 text-sm text-ink/80">
        {value.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink/40"
              aria-hidden="true"
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-2 text-sm text-ink/80">
      {value.map((item, i) => (
        <li key={i}>
          {item.title ? (
            <span className="font-semibold text-ink">{item.title}</span>
          ) : null}
          {item.title && item.body ? <span> — </span> : null}
          {item.body ? <span>{item.body}</span> : null}
        </li>
      ))}
    </ul>
  )
}

function DisorderColumn({ disorder }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-warmgray bg-surface">
      <div
        className={cn('h-1 w-full', categoryStripe[disorder.category])}
        aria-hidden="true"
      />
      <div className="p-4 sm:p-5">
        <PlaceholderImage
          category={disorder.category}
          aspect="16/9"
          alt={`${disorder.name} illustration placeholder`}
        />
        <div className="mt-3 flex items-center gap-2">
          <Badge variant={disorder.category}>
            {categoryLabels[disorder.category]}
          </Badge>
        </div>
        <h3 className="mt-1 font-display text-lg font-medium text-ink sm:text-xl">
          {disorder.name}
        </h3>
        <p className="mt-1 text-xs text-muted sm:text-sm">{disorder.tagline}</p>
      </div>
    </div>
  )
}

function CompareModal({ disorders, open, onClose, onClear }) {
  const [a, b] = disorders ?? []
  if (!a || !b) return null

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm data-[state=closed]:animate-overlay-fade-out data-[state=open]:animate-overlay-fade-in" />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            'fixed inset-0 z-50 flex flex-col bg-cream',
            'sm:inset-auto sm:left-1/2 sm:top-1/2 sm:max-h-[92vh] sm:w-[94vw] sm:max-w-5xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl sm:shadow-xl',
            'data-[state=closed]:animate-content-hide data-[state=open]:animate-content-show',
            'focus:outline-none'
          )}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-warmgray bg-cream px-4 py-3 sm:rounded-t-3xl sm:px-6 sm:py-4">
            <div className="flex items-center gap-2">
              <ArrowLeftRight
                className="h-4 w-4 text-sage-deep"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <Dialog.Title className="font-display text-base font-medium text-ink sm:text-lg">
                Comparing
              </Dialog.Title>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClear}
                className="hidden rounded-full border border-warmgray bg-surface px-3 py-1 text-xs text-ink/80 transition-colors hover:bg-peach/40 sm:inline-block"
              >
                Swap selection
              </button>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close"
                  className="rounded-full border border-warmgray bg-surface p-2 text-ink/70 transition-colors hover:bg-peach/40 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep"
                >
                  <X className="h-4 w-4" strokeWidth={2} />
                </button>
              </Dialog.Close>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <DisorderColumn disorder={a} />
              <DisorderColumn disorder={b} />
            </div>

            <div className="mt-6 space-y-5">
              {sections.map((sec) => (
                <section key={sec.key}>
                  <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-sage-deep">
                    {sec.label}
                  </h4>
                  <div className="grid gap-4 rounded-2xl border border-warmgray bg-surface p-4 md:grid-cols-2 md:gap-6 md:p-5">
                    <div>
                      <p className="mb-2 text-xs font-medium text-muted md:hidden">
                        {a.name}
                      </p>
                      {renderCell(a[sec.key], sec.key)}
                    </div>
                    <div className="border-t border-warmgray pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                      <p className="mb-2 text-xs font-medium text-muted md:hidden">
                        {b.name}
                      </p>
                      {renderCell(b[sec.key], sec.key)}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CompareModal
