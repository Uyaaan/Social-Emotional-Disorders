import * as Dialog from '@radix-ui/react-dialog'
import { List, X } from 'lucide-react'
import { useState } from 'react'
import { numberedSections, sectionIds } from '@/data/sections'
import useCurrentSection from '@/hooks/useCurrentSection'
import { cn } from '@/lib/cn'

function FloatingTOC() {
  const [open, setOpen] = useState(false)
  const activeId = useCurrentSection(sectionIds)

  const isInPresentation = activeId && activeId !== 'top'

  function handleJump(id) {
    setOpen(false)
    if (id === 'top') {
      window.history.replaceState(null, '', ' ')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      window.history.replaceState(null, '', `#${id}`)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!isInPresentation) return null

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-cream shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep sm:h-auto sm:w-auto sm:px-4 sm:py-2.5"
          aria-label="Open section navigation"
        >
          <List className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          <span className="hidden sm:inline">Sections</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm data-[state=closed]:animate-overlay-fade-out data-[state=open]:animate-overlay-fade-in" />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            'fixed z-50 bg-cream shadow-xl',
            'inset-x-0 bottom-0 max-h-[80vh] rounded-t-3xl',
            'sm:inset-x-auto sm:bottom-20 sm:right-5 sm:max-h-[70vh] sm:w-80 sm:rounded-3xl',
            'flex flex-col focus:outline-none',
            'data-[state=closed]:animate-content-hide data-[state=open]:animate-content-show'
          )}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-warmgray px-5 py-3 sm:rounded-t-3xl">
            <Dialog.Title className="font-display text-base font-bold text-ink">
              Sections
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close"
                className="rounded-full p-1.5 text-muted transition-colors hover:bg-peach/40 hover:text-ink"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {numberedSections.map((section) => {
              const isActive = section.id === activeId
              const dotColor =
                section.category === 'emotional'
                  ? 'bg-sage'
                  : section.category === 'social'
                    ? 'bg-lavender'
                    : 'bg-ink/30'
              const num =
                section.number != null
                  ? String(section.number).padStart(2, '0')
                  : ''

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleJump(section.id)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors',
                    isActive ? 'bg-peach/50' : 'hover:bg-peach/25'
                  )}
                >
                  <span
                    className={cn('h-2 w-2 shrink-0 rounded-full', dotColor)}
                    aria-hidden="true"
                  />
                  <span className="w-8 shrink-0 font-display text-sm font-bold tabular-nums text-muted">
                    {num}
                  </span>
                  <span
                    className={cn(
                      'flex-1 text-sm',
                      isActive ? 'font-semibold text-ink' : 'text-ink/80'
                    )}
                  >
                    {section.label}
                  </span>
                </button>
              )
            })}

            <div className="my-2 border-t border-warmgray/60" />
            <button
              type="button"
              onClick={() => handleJump('top')}
              className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm text-muted transition-colors hover:bg-peach/25"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-warmgray"
                aria-hidden="true"
              />
              <span className="w-8 shrink-0" />
              <span>Back to top</span>
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default FloatingTOC
