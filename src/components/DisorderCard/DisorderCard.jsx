import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import Badge from '@/components/Badge'
import PlaceholderImage from '@/components/PlaceholderImage'
import { categoryLabels } from '@/data/disorders'
import { cn } from '@/lib/cn'

const categoryStripe = {
  emotional: 'bg-sage',
  social: 'bg-lavender',
}

const floodColor = {
  emotional: 'bg-sage-soft/40',
  social: 'bg-lavender-soft/40',
}

function DisorderCard({
  disorder,
  onSelect,
  compareMode = false,
  isSelected = false,
  disabled = false,
}) {
  const canHover = !(disabled && !isSelected)

  function handleClick() {
    if (!canHover) return
    onSelect?.(disorder)
  }

  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover={canHover ? 'hover' : undefined}
      variants={{
        rest: { y: 0 },
        hover: { y: -4, transition: { duration: 0.22 } },
      }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-surface',
        'transition-shadow duration-300',
        isSelected
          ? 'border-ink shadow-md ring-2 ring-ink ring-offset-2 ring-offset-cream'
          : 'border-warmgray hover:shadow-md',
        !canHover && 'pointer-events-none opacity-50'
      )}
    >
      {/* Color flood — rises from bottom on hover */}
      <motion.div
        aria-hidden="true"
        className={cn('pointer-events-none absolute inset-0', floodColor[disorder.category])}
        variants={{
          rest: { scaleY: 0 },
          hover: {
            scaleY: 1,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ originY: 1 }}
      />

      {/* Category stripe */}
      <div
        className={cn('relative z-10 h-1.5 w-full', categoryStripe[disorder.category])}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={handleClick}
        className="relative z-10 flex flex-1 flex-col gap-4 p-4 text-left focus-visible:outline-none sm:p-5"
        aria-label={
          compareMode
            ? `${isSelected ? 'Deselect' : 'Select'} ${disorder.name} for comparison`
            : `Open details for ${disorder.name}`
        }
      >
        <PlaceholderImage
          category={disorder.category}
          aspect="4/3"
          alt={`${disorder.name} illustration placeholder`}
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-bold leading-tight text-ink sm:text-2xl">
              {disorder.name}
            </h3>
            {compareMode ? (
              <span
                className={cn(
                  'mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all',
                  isSelected
                    ? 'border-ink bg-ink text-cream'
                    : 'border-warmgray bg-cream text-transparent group-hover:border-ink/40'
                )}
                aria-hidden="true"
              >
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
            ) : (
              <ArrowUpRight
                className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}
          </div>
          <p className="text-sm text-muted line-clamp-2">{disorder.tagline}</p>
          <div className="mt-1">
            <Badge variant={disorder.category}>{categoryLabels[disorder.category]}</Badge>
          </div>
        </div>
      </button>
    </motion.article>
  )
}

export default DisorderCard
