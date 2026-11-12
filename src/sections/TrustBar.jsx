import { awards, offices, rating, team } from '../data/site.js'

const stats = [
  { value: rating.score, label: 'Google rating', note: `from ${rating.count} reviews` },
  { value: String(awards.length), label: 'Awards and rankings', note: 'since 2024' },
  { value: String(offices.length), label: 'Offices across NSW', note: 'we act state-wide' },
  { value: String(team.length), label: 'People in our team', note: 'led by Emma Mead' },
]

const badges = Array.from({ length: 22 }, (_, i) => `a${String(i + 1).padStart(2, '0')}`)

export default function TrustBar() {
  return (
    <section aria-label="Why people trust us" className="relative z-10 bg-white">
      <div className="wrap">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-b-3xl bg-line lg:-mt-12 lg:grid-cols-4 lg:rounded-3xl lg:shadow-[0_30px_60px_-30px_rgb(1_34_56/0.35)]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col bg-white px-5 py-6 sm:px-8 sm:py-8">
              <dt className="order-2 mt-1 font-display text-[1rem] font-semibold text-ink">{s.label}</dt>
              <dd className="order-1 font-display text-[2.5rem] font-bold leading-none tracking-tight text-navy sm:text-[3rem]">{s.value}</dd>
              <dd className="order-3 mt-0.5 text-[0.9rem]">{s.note}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="marquee-host mt-14 overflow-hidden pb-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" aria-label="Doyles Guide and industry awards">
        <ul className="marquee flex w-max items-center gap-10">
          {[...badges, ...badges].map((b, i) => (
            <li key={i} aria-hidden={i >= badges.length || undefined}>
              <img src={`/images/awards/${b}.png`} alt={i < badges.length ? 'Doyles Guide award badge' : ''} width="371" height="340" loading="lazy" className="h-24 w-auto" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
