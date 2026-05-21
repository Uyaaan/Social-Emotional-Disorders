import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { disorders } from '@/data/enriched'
import PhotoCarousel from '@/components/PhotoCarousel'
import { accentClasses } from '@/lib/accents'

const STATS = [
  { n: '6', l: 'Emotional' },
  { n: '5', l: 'Social' },
  { n: '11', l: 'Disorders' },
]

const FEATURED_IDS = ['anxiety', 'adhd']

export default function HomeScreen() {
  const featured = FEATURED_IDS.map((id) => disorders.find((d) => d.id === id)).filter(Boolean)

  return (
    <div className="mx-auto flex max-w-screen-sm flex-col gap-6 px-5 pb-8 pt-6">
      <header>
        <span className="mb-3 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-fg">
          For future teachers
        </span>
        <h1 className="font-display text-[2.25rem] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
          The 11 minds<br />
          <span className="text-accent">you'll meet</span><br />
          in your classroom.
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          A concise field guide to the social-emotional disorders future teachers most need to recognize, understand, and support — without the clutter.
        </p>
      </header>

      <Link
        to="/intro"
        className="group block"
        aria-label="Read the introduction"
      >
        <div className="grid grid-cols-2 gap-2.5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-alt">
            <img
              src="/images/intro-1.jpg"
              alt=""
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-alt">
            <img
              src="/images/intro-2.jpg"
              alt=""
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between px-1 text-[12.5px]">
          <span className="font-semibold text-ink">Read the introduction</span>
          <span className="inline-flex items-center gap-1 text-accent group-hover:underline">
            Open <ArrowRight size={13} aria-hidden="true" />
          </span>
        </div>
      </Link>

      <div>
        <div className="mb-2.5 flex items-baseline justify-between">
          <h2 className="font-display text-[19px] font-bold tracking-tight text-ink">
            Meet the eleven
          </h2>
          <span className="text-[11.5px] text-ink-soft">Tap to open</span>
        </div>
        <PhotoCarousel disorders={disorders} />
      </div>

      <Link
        to="/disorders"
        className="flex items-center justify-between rounded-2xl bg-accent px-5 py-3.5 text-[15px] font-semibold text-accent-fg shadow-soft transition hover:brightness-105"
      >
        <span>Explore the 11 disorders</span>
        <ArrowRight size={18} aria-hidden="true" />
      </Link>

      <div className="grid grid-cols-3 gap-2.5">
        {STATS.map((s) => (
          <div
            key={s.l}
            className="rounded-2xl border border-border bg-surface px-3 py-3.5 text-center"
          >
            <div className="font-display text-[28px] font-bold leading-none tracking-tight text-ink">
              {s.n}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-ink-soft">
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <section>
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="font-display text-[19px] font-bold tracking-tight text-ink">
            Start here
          </h2>
          <Link
            to="/disorders"
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent"
          >
            See all <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {featured.map((d) => (
            <FeaturedCard key={d.id} d={d} />
          ))}
        </div>
      </section>

      <p className="pt-2 text-center text-[11px] leading-relaxed tracking-wide text-ink-soft">
        A teaching resource by Jackie Lyn, Micka Remocaldo, Janille Louise Amoguis,
        Phomela Castroverde, Julia Clarisse Apo &amp; Pearl Jangad
      </p>
    </div>
  )
}

function FeaturedCard({ d }) {
  const a = accentClasses(d.accent)
  return (
    <Link
      to={`/disorders?expand=${d.id}`}
      className="group overflow-hidden rounded-2xl border border-border bg-surface text-ink shadow-soft/0 transition hover:shadow-soft"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-surface-alt">
        <img
          src={`/images/${d.id}-1.jpg`}
          alt={d.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex items-center gap-3 p-3">
        <div className="min-w-0 flex-1">
          <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${a.bg} ${a.fg}`}>
            {d.category === 'emotional' ? 'Emotional' : 'Social'}
          </span>
          <div className="mt-1 font-semibold tracking-tight text-ink">{d.name}</div>
          <div className="mt-0.5 line-clamp-2 text-[12.5px] leading-snug text-ink-soft">
            {d.tagline}
          </div>
        </div>
        <ArrowRight size={16} className="shrink-0 text-ink-soft" aria-hidden="true" />
      </div>
    </Link>
  )
}
