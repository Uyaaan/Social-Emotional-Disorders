import { motion } from 'framer-motion'
import { Heart, Users } from 'lucide-react'

const emotionalDisorders = ['Anxiety', 'Depression', 'Bipolar', 'OCD', 'Panic', 'PTSD']
const socialDisorders = ['ASD', 'ADHD', 'ODD', 'Conduct', 'RAD']

function DisorderChip({ label, color }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${color}`}
    >
      {label}
    </span>
  )
}

function ComparisonSplash() {
  return (
    <section id="comparison" className="border-t border-warmgray/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
            Two families, shared roots
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
            Similarities and differences
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-col gap-5 rounded-3xl border border-sage/30 bg-sage-soft/25 p-6 sm:p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-soft">
              <Heart className="h-5 w-5 text-sage-deep" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-sage-deep">
                Emotional
              </p>
              <h3 className="mt-1 font-display text-2xl font-medium text-ink">
                Internal focus
              </h3>
              <p className="mt-2 text-sm text-ink/75">
                Recognizing, understanding, and managing one&rsquo;s own feelings
                and behaviors.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {emotionalDisorders.map((d) => (
                <DisorderChip
                  key={d}
                  label={d}
                  color="border-sage/40 bg-sage-soft text-sage-deep"
                />
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5 rounded-3xl border border-lavender/30 bg-lavender-soft/25 p-6 sm:p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lavender-soft">
              <Users
                className="h-5 w-5 text-lavender-deep"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-lavender-deep">
                Social
              </p>
              <h3 className="mt-1 font-display text-2xl font-medium text-ink">
                External focus
              </h3>
              <p className="mt-2 text-sm text-ink/75">
                Navigating social environments, such as building positive
                relationships, resolving conflicts, and empathy for others&rsquo;
                feelings.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {socialDisorders.map((d) => (
                <DisorderChip
                  key={d}
                  label={d}
                  color="border-lavender/40 bg-lavender-soft text-lavender-deep"
                />
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSplash
