import { GitCompare, Search, X } from 'lucide-react'
import { cn } from '@/lib/cn'

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'emotional', label: 'Emotional' },
  { value: 'social', label: 'Social' },
]

function FilterBar({
  category,
  onCategoryChange,
  query,
  onQueryChange,
  compareMode,
  onCompareToggle,
  selectedCount,
}) {
  return (
    <div className="sticky top-[56px] z-20 -mx-4 mt-2 border-y border-warmgray/80 bg-cream/85 px-4 py-3 backdrop-blur-md sm:top-[68px] sm:-mx-6 sm:px-6 sm:py-3.5">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-wrap items-center gap-2">
          <div
            role="group"
            aria-label="Filter by category"
            className="flex gap-1 rounded-full bg-surface p-1 ring-1 ring-warmgray"
          >
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onCategoryChange(opt.value)}
                aria-pressed={category === opt.value}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:text-sm',
                  category === opt.value
                    ? 'bg-ink text-cream'
                    : 'text-ink/70 hover:bg-peach/40'
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="relative min-w-[160px] flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <label htmlFor="disorder-search" className="sr-only">
              Search disorders
            </label>
            <input
              id="disorder-search"
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search disorders or symptoms…"
              className="h-9 w-full rounded-full border border-warmgray bg-surface pl-9 pr-9 text-sm text-ink placeholder:text-muted/80 focus:border-ink/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep focus-visible:ring-offset-1 focus-visible:ring-offset-cream"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-muted transition-colors hover:bg-warmgray hover:text-ink"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={onCompareToggle}
          aria-pressed={compareMode}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
            compareMode
              ? 'bg-ink text-cream hover:bg-ink/90'
              : 'border border-warmgray bg-surface text-ink hover:bg-peach/40'
          )}
        >
          <GitCompare
            className="h-4 w-4"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          {compareMode ? <span>Compare {selectedCount}/2</span> : <span>Compare</span>}
        </button>
      </div>
    </div>
  )
}

export default FilterBar
