import { motion } from 'framer-motion'
import useCountUp from '@/hooks/useCountUp'
import { cn } from '@/lib/cn'

function StatCard({ target, label, color }) {
  const { ref, count } = useCountUp(target)

  return (
    <div ref={ref} className="flex flex-col">
      <span
        className={cn(
          'font-display text-5xl font-extrabold tabular-nums leading-none sm:text-6xl',
          color
        )}
      >
        {count}
      </span>
      <span className="mt-3 text-sm text-muted sm:text-base">{label}</span>
    </div>
  )
}

function IntroSection() {
  return (
    <section id="intro" className="border-t border-warmgray/60 bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
            Introduction
          </span>
          <p className="mt-4 max-w-2xl text-xl text-ink/80 sm:text-2xl">
            Social-emotional disorders affect how people{' '}
            <strong className="font-semibold text-ink">feel</strong>,{' '}
            <strong className="font-semibold text-ink">behave</strong>, and{' '}
            <strong className="font-semibold text-ink">connect</strong>. That
            shapes every classroom interaction.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-warmgray/60 pt-10 sm:grid-cols-3 sm:gap-10">
            <StatCard
              target={6}
              label="Emotional disorders affecting how we regulate feelings"
              color="text-sage-deep"
            />
            <StatCard
              target={5}
              label="Social disorders affecting behavior and connection"
              color="text-lavender-deep"
            />
            <StatCard
              target={11}
              label="Disorders every classroom teacher should know"
              color="text-ink"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroSection
