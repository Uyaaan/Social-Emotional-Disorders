import { Image as ImageIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

const aspectClasses = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '21/9': 'aspect-[21/9]',
  '3/4': 'aspect-[3/4]',
}

const categoryGradients = {
  emotional:
    'bg-gradient-to-br from-sage-soft via-peach/40 to-sage-soft/40',
  social:
    'bg-gradient-to-br from-lavender-soft via-peach/40 to-lavender-soft/40',
  neutral:
    'bg-gradient-to-br from-warmgray via-peach/30 to-warmgray/50',
  warm:
    'bg-gradient-to-br from-peach via-sage-soft/40 to-lavender-soft/40',
}

function PlaceholderImage({
  category = 'neutral',
  aspect = '4/3',
  label = 'Image coming soon',
  icon: Icon = ImageIcon,
  alt,
  src,
  className,
}) {
  // When a real src is provided later, render the image instead.
  // Component consumers don't need to change anything.
  if (src) {
    const ringClass =
      category === 'emotional'
        ? 'ring-1 ring-sage/40'
        : category === 'social'
          ? 'ring-1 ring-lavender/40'
          : ''
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl',
          aspectClasses[aspect],
          ringClass,
          className
        )}
      >
        <img
          src={src}
          alt={alt ?? ''}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={alt || label}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        categoryGradients[category],
        aspectClasses[aspect],
        className
      )}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink/35">
        {Icon ? (
          <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.5} aria-hidden="true" />
        ) : null}
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs">
          {label}
        </span>
      </div>
    </div>
  )
}

export default PlaceholderImage
