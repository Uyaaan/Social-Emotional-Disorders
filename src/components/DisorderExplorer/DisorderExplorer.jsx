import { useState } from 'react'
import { motion } from 'framer-motion'
import CompareModal from '@/components/CompareModal'
import DisorderCard from '@/components/DisorderCard'
import DisorderModal from '@/components/DisorderModal'
import FilterBar from '@/components/FilterBar'
import { getDisorderById } from '@/data/disorders'
import useCompareSelection from '@/hooks/useCompareSelection'
import useFilteredDisorders from '@/hooks/useFilteredDisorders'

function DisorderExplorer() {
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [compareMode, setCompareMode] = useState(false)
  const [openDisorderId, setOpenDisorderId] = useState(null)

  const compare = useCompareSelection()
  const filteredDisorders = useFilteredDisorders({ category, query })

  const openDisorder = openDisorderId ? getDisorderById(openDisorderId) : null
  const compareDisorders = compare.selectedIds
    .map(getDisorderById)
    .filter(Boolean)
  const compareModalOpen = compareDisorders.length === 2

  function handleCardSelect(disorder) {
    if (compareMode) {
      compare.toggle(disorder.id)
    } else {
      setOpenDisorderId(disorder.id)
    }
  }

  function handleCompareFromModal(disorder) {
    setOpenDisorderId(null)
    setCompareMode(true)
    compare.set([disorder.id])
  }

  function handleToggleCompareMode() {
    if (compareMode) compare.clear()
    setCompareMode((m) => !m)
  }

  function handleCloseCompare() {
    compare.clear()
  }

  function handleClearFilters() {
    setCategory('all')
    setQuery('')
  }

  return (
    <section id="disorders" className="border-t border-warmgray/60 bg-cream">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
        <div className="mb-4 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
            Explore
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
            The eleven disorders
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Tap any card to learn what it looks like, what helps, and what teachers
            can do. Use{' '}
            <strong className="font-semibold text-ink">Compare</strong> to view
            two disorders side-by-side.
          </p>
        </div>

        <FilterBar
          category={category}
          onCategoryChange={setCategory}
          query={query}
          onQueryChange={setQuery}
          compareMode={compareMode}
          onCompareToggle={handleToggleCompareMode}
          selectedCount={compare.selectedIds.length}
        />

        {compareMode && compare.selectedIds.length < 2 ? (
          <p className="mt-4 rounded-2xl border border-sage/30 bg-sage-soft/30 px-4 py-3 text-sm text-ink/80 sm:text-base">
            <span className="font-semibold text-sage-deep">Compare mode is on.</span>{' '}
            Pick two cards — they&rsquo;ll open side-by-side. Selected{' '}
            {compare.selectedIds.length}/2.
          </p>
        ) : null}

        {filteredDisorders.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-warmgray bg-surface px-6 py-16 text-center">
            <p className="font-display text-lg text-ink">
              No disorders match your search.
            </p>
            <p className="mt-2 text-sm text-muted">
              Try a different query or clear the filters.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="mt-5 inline-flex items-center rounded-full border border-warmgray bg-cream px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-peach/40"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div
            key={`${category}-${query}`}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.04 } },
            }}
            className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            {filteredDisorders.map((d) => (
              <motion.div
                key={d.id}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <DisorderCard
                  disorder={d}
                  onSelect={handleCardSelect}
                  compareMode={compareMode}
                  isSelected={compare.isSelected(d.id)}
                  disabled={
                    compareMode && compare.isFull && !compare.isSelected(d.id)
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        <DisorderModal
          disorder={openDisorder}
          open={!!openDisorder}
          onClose={() => setOpenDisorderId(null)}
          onCompare={handleCompareFromModal}
        />

        <CompareModal
          disorders={compareDisorders}
          open={compareModalOpen}
          onClose={handleCloseCompare}
          onClear={handleCloseCompare}
        />
      </div>
    </section>
  )
}

export default DisorderExplorer
