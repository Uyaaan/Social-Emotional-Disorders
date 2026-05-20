import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

const themes = {
  emotional: {
    label: 'Emotional disorders',
    subtitle: 'Conditions affecting how we regulate what we feel inside.',
    bg: 'bg-sage-soft/40',
    border: 'border-sage/30',
    accent: 'text-sage-deep',
    eyebrow: 'Part 1 of 2',
  },
  social: {
    label: 'Social disorders',
    subtitle: 'Conditions affecting how we behave and connect with others.',
    bg: 'bg-lavender-soft/40',
    border: 'border-lavender/30',
    accent: 'text-lavender-deep',
    eyebrow: 'Part 2 of 2',
  },
}

function CategoryDivider({ category }) {
  const t = themes[category]

  return (
    <section
      className={cn('border-y py-16 sm:py-20', t.bg, t.border)}
      aria-label={t.label}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p
            className={cn(
              'text-[11px] font-bold uppercase tracking-[0.3em]',
              t.accent
            )}
          >
            {t.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
            {t.label}
          </h2>
          <p className="mt-3 text-base text-ink/70 sm:text-lg">{t.subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default CategoryDivider
