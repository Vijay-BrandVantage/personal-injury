import { useState } from 'react'
import { firm, rating } from '../data/site.js'
import { practice, practiceIcon } from '../data/practice.js'
import Icon, { Stars, GoogleG } from '../components/Icon.jsx'
import { SoonLink } from '../components/ComingSoon.jsx'

const chipLabel = {
  'workers-compensation': 'Hurt at work',
  'motor-vehicle-accident': 'Road accident',
  'public-liability': 'Hurt in public',
  'medical-negligence': 'Medical error',
  'professional-negligence': 'Bad advice',
  'superannuation-and-insurance': "Can't work (TPD)",
  'institutional-abuse': 'Institutional abuse',
  asbestosis: 'Asbestos exposure',
}

const proof = ['Accredited Specialists in Personal Injury Law', 'Doyles Guide Preeminent Lawyer 2026', 'We act for injured people, never insurers']

function ClaimFinder() {
  const [active, setActive] = useState(practice[0].slug)
  const p = practice.find((x) => x.slug === active)

  return (
    <div id="finder" className="intro rounded-[2rem] bg-white p-5 shadow-[0_40px_90px_-30px_rgb(1_34_56/0.55)] sm:p-7" style={{ '--d': '350ms' }}>
      <h2 className="text-[1.5rem] font-bold leading-tight">Find your claim</h2>
      <p className="mt-1 text-[0.975rem]">Choose what happened to see what you may be able to claim.</p>

      <div role="radiogroup" aria-label="What happened" className="no-scrollbar -mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-1 sm:grid sm:grid-cols-4 sm:overflow-visible">
        {practice.map((x) => {
          const on = x.slug === active
          return (
            <button
              key={x.slug}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setActive(x.slug)}
              className={`flex min-h-11 shrink-0 items-center gap-2 rounded-2xl px-3 py-2.5 text-left text-[0.85rem] font-semibold leading-tight transition-all duration-200 sm:flex-col sm:items-start sm:gap-2 sm:p-3 ${
                on ? 'bg-navy text-white shadow-[0_10px_24px_-12px_rgb(0_76_116/0.8)]' : 'bg-mist text-ink hover:bg-sky'
              }`}
            >
              <Icon name={practiceIcon[x.slug]} className={`size-5 shrink-0 ${on ? 'text-gold' : 'text-navy'}`} />
              <span>{chipLabel[x.slug]}</span>
            </button>
          )
        })}
      </div>

      <div key={p.slug} className="intro mt-5 rounded-2xl bg-mist p-5" style={{ '--d': '0ms' }} aria-live="polite">
        <p className="font-display text-[1.15rem] font-semibold text-navy">{p.name}</p>
        <ul className="mt-3 space-y-2">
          {p.claims.slice(0, 3).map(([t]) => (
            <li key={t} className="flex items-start gap-2.5 text-[0.95rem] text-ink">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold text-navy-900">
                <Icon name="check" className="size-3" strokeWidth={3} />
              </span>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 flex items-start gap-2.5 rounded-xl bg-white px-3.5 py-3 text-[0.9rem] leading-snug text-ink">
          <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-gold-600" />
          <span>
            <strong className="font-semibold">Time limits apply.</strong> {p.timeLimit}
          </span>
        </p>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <a href="#contact" className="btn btn-navy">Talk to a lawyer</a>
        <SoonLink page={p.name} className="btn btn-ghost">Read more</SoonLink>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img src="/images/hero-home.webp" alt="" width="1344" height="682" className="hero-img h-full w-full object-cover" />
        {/* Scrim so the headline stays readable over the photograph */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(1_34_56/0.95)_0%,rgb(1_34_56/0.82)_45%,rgb(1_34_56/0.35)_100%)]" />
      </div>

      <div className="wrap grid items-center gap-12 py-16 [&>*]:min-w-0 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-20">
        <div className="text-white">
          <a href="#reviews" className="intro inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pl-2 pr-4 ring-1 ring-white/20 transition-colors hover:bg-white/15" style={{ '--d': '0ms' }}>
            <span className="grid size-8 place-items-center rounded-full bg-white">
              <GoogleG className="size-5" />
            </span>
            <Stars className="size-4" />
            <span className="text-[0.95rem]">
              <strong className="font-semibold">{rating.score}</strong> from {rating.count} Google reviews
            </span>
          </a>

          <h1 className="intro mt-7 text-[clamp(2.75rem,1.6rem+4.6vw,5rem)] font-bold leading-[1.04] tracking-[-0.02em] text-white" style={{ '--d': '80ms' }}>
            With you every step of the way
          </h1>
          <p className="intro mt-6 max-w-[34rem] text-[clamp(1.1rem,1rem+0.4vw,1.3rem)] leading-relaxed text-sky" style={{ '--d': '160ms' }}>
            Compensation and personal injury lawyers for people across NSW. Tell us what happened and we'll explain your options, at no cost to enquire.
          </p>

          <div className="intro mt-9 flex flex-wrap gap-3" style={{ '--d': '240ms' }}>
            <a href="#contact" className="btn btn-gold min-h-14 pl-7 pr-2 text-[1.05rem]">
              Enquire now
              <span className="chip ml-2 mr-0">
                <Icon name="arrow" className="size-4" />
              </span>
            </a>
            <a href={firm.phoneHref} className="btn min-h-14 px-7 text-[1.05rem] text-white ring-1 ring-white/40 hover:bg-white hover:text-navy-900">
              <Icon name="phone" className="size-5" />
              {firm.phone}
            </a>
          </div>

          <ul className="intro mt-10 grid gap-3 text-[0.975rem] text-white sm:grid-cols-1" style={{ '--d': '320ms' }}>
            {proof.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                  <Icon name="check" className="size-3.5" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <ClaimFinder />
      </div>
    </section>
  )
}
