import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import Badge from '@/components/Badge'

function DisorderSection({ id, title, children, comingSoon = false, count }) {
  if (comingSoon) {
    return (
      <div className="flex items-center justify-between gap-3 border-t border-warmgray/60 px-4 py-4 sm:px-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
          {title}
        </h3>
        <Badge variant="comingSoon">Content coming soon</Badge>
      </div>
    )
  }

  return (
    <Accordion.Item value={id} className="border-t border-warmgray/60">
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-peach/20 focus-visible:bg-peach/30 focus-visible:outline-none sm:px-6">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-base font-medium text-ink sm:text-lg">
              {title}
            </h3>
            {count != null ? (
              <span className="rounded-full bg-peach/60 px-2 py-0.5 text-[11px] font-medium text-ink/70">
                {count}
              </span>
            ) : null}
          </div>
          <ChevronDown
            className="h-5 w-5 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="px-4 pb-5 pt-1 sm:px-6">{children}</div>
      </Accordion.Content>
    </Accordion.Item>
  )
}

export default DisorderSection
