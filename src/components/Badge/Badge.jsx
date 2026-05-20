import { cn } from '@/lib/cn'

const variants = {
  emotional: 'bg-sage-soft/70 text-sage-deep border border-sage/40',
  social: 'bg-lavender-soft/70 text-lavender-deep border border-lavender/40',
  neutral: 'bg-peach/50 text-ink/80 border border-warmgray',
  comingSoon:
    'bg-cream text-muted border border-warmgray italic font-normal',
}

function Badge({ children, variant = 'neutral', className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
