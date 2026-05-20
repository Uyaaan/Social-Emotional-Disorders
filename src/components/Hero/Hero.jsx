import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import PlaceholderImage from '@/components/PlaceholderImage'

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-6 pt-10 sm:gap-10 sm:px-6 sm:pb-8 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-sage-deep">
            A visual guide for future teachers
          </span>
          <h1 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.05] text-ink sm:text-5xl lg:text-[3.75rem]">
            Understanding the minds{' '}
            <span className="italic text-sage-deep">behind</span> the behavior.
          </h1>
          <p className="mt-5 max-w-md text-base text-ink/70 sm:text-lg">
            A guide to the eleven social-emotional disorders every classroom
            teacher should recognize, with their signs and supports.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#intro"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              Start the presentation
              <ArrowDown className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="order-first lg:order-last"
        >
          <PlaceholderImage
            category="warm"
            aspect="4/3"
            src="/images/intro-1.jpg"
            alt="Social-emotional disorders, a visual guide"
            className="shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
