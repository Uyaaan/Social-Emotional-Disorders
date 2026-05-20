import { motion } from 'framer-motion'
import PlaceholderImage from '@/components/PlaceholderImage'
import { categoryLabels } from '@/data/disorders'
import { cn } from '@/lib/cn'

function ChapterIntro({ disorder, number }) {
  const num = String(number).padStart(2, '0')
  const numColor =
    disorder.category === 'emotional' ? 'text-sage-deep' : 'text-lavender-deep'
  const eyebrowColor =
    disorder.category === 'emotional' ? 'text-sage-deep' : 'text-lavender-deep'

  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p
          className={cn(
            'font-display text-[5.5rem] font-extrabold leading-[0.85] tracking-tight sm:text-[8rem]',
            numColor
          )}
        >
          {num}
        </p>
        <p
          className={cn(
            'mt-5 text-[11px] font-bold uppercase tracking-[0.22em]',
            eyebrowColor
          )}
        >
          {categoryLabels[disorder.category]}
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
          {disorder.name}
        </h2>
        <div className="mt-8">
          <PlaceholderImage
            category={disorder.category}
            aspect="16/9"
            src={`/images/${disorder.id}-1.jpg`}
            alt={`${disorder.name} illustration`}
            className="shadow-sm"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default ChapterIntro
