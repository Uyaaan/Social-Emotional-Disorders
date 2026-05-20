import { sectionIds, sectionList } from '@/data/sections'
import useCurrentSection from '@/hooks/useCurrentSection'
import useScrollProgress from '@/hooks/useScrollProgress'
import { cn } from '@/lib/cn'

function ProgressBar() {
  const progress = useScrollProgress()
  const activeId = useCurrentSection(sectionIds)

  const activeSection = sectionList.find((s) => s.id === activeId)
  const tintClass =
    activeSection?.category === 'emotional'
      ? 'bg-sage-deep'
      : activeSection?.category === 'social'
        ? 'bg-lavender-deep'
        : 'bg-ink/50'

  return (
    <div
      className="fixed left-0 right-0 top-0 z-40 h-[3px] bg-warmgray/50"
      aria-hidden="true"
    >
      <div
        className={cn('h-full transition-colors duration-300', tintClass)}
        style={{
          width: `${progress * 100}%`,
          transition: 'width 80ms linear, background-color 300ms ease',
        }}
      />
    </div>
  )
}

export default ProgressBar
