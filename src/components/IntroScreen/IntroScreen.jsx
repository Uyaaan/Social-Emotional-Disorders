import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Users } from 'lucide-react'

export default function IntroScreen() {
  return (
    <div className="mx-auto max-w-screen-sm px-4 pb-10 pt-5">
      <header className="px-1">
        <span className="inline-flex items-center rounded-full bg-tag-bg px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
          Introduction
        </span>
        <h1 className="mt-2.5 font-display text-[28px] font-bold leading-tight tracking-[-0.03em] text-ink">
          Social-Emotional Disorder
        </h1>
        <p className="mt-1.5 text-[12.5px] text-ink-soft">By Jackie Lyn</p>
      </header>

      <figure className="mt-5 overflow-hidden rounded-3xl border border-border bg-surface-alt">
        <img
          src="/images/intro-1.jpg"
          alt="Introduction visual"
          loading="eager"
          className="block h-auto w-full"
        />
      </figure>

      <div className="mt-5 flex flex-col gap-4 px-1 text-[14.5px] leading-relaxed text-ink">
        <p>
          Social-Emotional Disorder, often referred to as{' '}
          <strong className="font-semibold">Emotional and Behavioral Disorder (EBD)</strong>, is a broad
          term used to describe conditions that significantly affect how a person regulates emotions,
          controls behavior, and interacts with others. Individuals with these conditions often
          experience persistent difficulties in managing feelings such as fear, sadness, anger, or
          anxiety, which may interfere with learning, relationships, and daily functioning.
        </p>
        <p>
          As you go through this guide, we dive deeper into the social-emotional disorders and their
          types.
        </p>
        <p>
          <strong className="font-semibold">Emotional disorders</strong> primarily affect a person&rsquo;s
          internal emotional regulation. The emotional family includes Anxiety, Depression, Bipolar
          Disorder, OCD, Panic Disorder, and PTSD.{' '}
          <strong className="font-semibold">Social disorders</strong> mainly influence behavior,
          communication, and interaction with others — including Autism Spectrum Disorder, ADHD,
          Oppositional Defiant Disorder, Conduct Disorder, and Reactive Attachment Disorder.
        </p>
      </div>

      <div className="mt-9 px-1">
        <span className="inline-flex items-center rounded-full bg-tag-bg px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
          Two families, shared roots
        </span>
        <h2 className="mt-2.5 font-display text-[22px] font-bold leading-tight tracking-[-0.02em] text-ink">
          Similarities &amp; Differences
        </h2>
        <p className="mt-1.5 text-[12.5px] text-ink-soft">By Micka Remocaldo</p>
      </div>

      <figure className="mt-5 overflow-hidden rounded-3xl border border-border bg-surface-alt">
        <img
          src="/images/intro-2.jpg"
          alt="Similarities and differences visual"
          loading="lazy"
          className="block h-auto w-full"
        />
      </figure>

      <div className="mt-5 grid gap-3">
        <article className="rounded-3xl border border-border bg-surface p-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Heart size={16} aria-hidden="true" />
            </span>
            <h3 className="font-display text-[16px] font-bold tracking-tight text-ink">
              Similarities
            </h3>
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
            Both share common goals like building resilience, empathy, and competence for academic
            success and overall well-being. They are interdependent and rarely used in isolation, and
            they can be developed through experience and learning rather than being purely innate.
            Both include core components such as self-management and social awareness.
          </p>
        </article>

        <article className="rounded-3xl border border-border bg-surface p-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Users size={16} aria-hidden="true" />
            </span>
            <h3 className="font-display text-[16px] font-bold tracking-tight text-ink">
              Differences
            </h3>
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
            There are two types of focus —{' '}
            <strong className="font-semibold text-ink">Emotional Focus (Internal)</strong> and{' '}
            <strong className="font-semibold text-ink">Social Focus (External)</strong>. Emotional
            focus involves recognizing, understanding, and managing one&rsquo;s own feelings and
            behaviors. Social focus emphasizes navigating social environments — building positive
            relationships, resolving conflicts, and empathy for others&rsquo; feelings. With this, the
            difference shows through managing frustration and through social development that reflects
            in the ability to play and cooperate with others.
          </p>
        </article>
      </div>

      <Link
        to="/disorders"
        className="mt-7 flex items-center justify-between rounded-2xl bg-accent px-5 py-3.5 text-[15px] font-semibold text-accent-fg shadow-soft transition hover:brightness-105"
      >
        <span>Explore the 11 disorders</span>
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </div>
  )
}
