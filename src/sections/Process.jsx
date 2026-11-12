import { firm, steps, team } from '../data/site.js'
import Icon from '../components/Icon.jsx'

// What happens at each step, drawn from how the firm describes its process.
const detail = [
  {
    icon: 'calendar',
    tag: 'No cost to enquire',
    points: ['Call us or send an enquiry online', 'Tell us what happened, in confidence', 'Meet by phone, video or at one of our five offices'],
  },
  {
    icon: 'message',
    tag: 'Fees explained up front',
    points: ['Your rights and entitlements explained in plain English', 'The process, time limits and likely outcomes', "Any costs set out before you decide anything"],
  },
  {
    icon: 'scale',
    tag: 'With you to the end',
    points: ['We deal with the insurer on your behalf', 'We gather the medical and expert evidence', 'We keep you updated at every stage'],
  },
]

const faces = team.slice(0, 4)

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-white py-24 lg:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="process-title" className="heading max-w-[14ch]">
            Get started in 3 simple steps
          </h2>
          <p className="lede mt-5 max-w-[32rem]">
            Taking the first step toward legal support doesn't have to be complicated. Follow our simple process and let us guide you every step of the way.
          </p>

          <div className="mt-10 rounded-[2rem] bg-navy-900 p-7 text-white sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex shrink-0 -space-x-3">
                {faces.map((t) => (
                  <img key={t.name} src={`/images/team/${t.img}.png`} alt="" width="48" height="48" loading="lazy" className="size-12 rounded-full object-cover ring-[3px] ring-navy-900" />
                ))}
              </div>
              <p className="text-[0.95rem] leading-snug text-sky">
                Speak with Emma, Jamie, Sean, Heidi and the team
              </p>
            </div>
            <p className="mt-6 font-display text-[1.5rem] font-bold leading-tight">Your first conversation costs nothing.</p>
            <p className="mt-2 text-sky">There's no obligation to start, and we'll be upfront about any fees before you decide anything.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-gold pl-6 pr-2">
                Book a consultation
                <span className="chip ml-1 mr-0">
                  <Icon name="arrow" className="size-4" />
                </span>
              </a>
              <a href={firm.phoneHref} className="btn px-5 text-white ring-1 ring-white/30 hover:bg-white hover:text-navy-900">
                <Icon name="phone" className="size-4" />
                {firm.phone}
              </a>
            </div>
          </div>
        </div>

        <ol className="relative">
          {steps.map((s, i) => {
            const d = detail[i]
            return (
              <li key={s.title} className="relative grid grid-cols-[2.75rem_1fr] gap-x-3 pb-6 sm:grid-cols-[4.5rem_1fr] sm:pb-8 sm:gap-x-7">
                {/* Rail joining this step to the next */}
                <span aria-hidden="true" className="absolute bottom-0 left-[1.375rem] top-14 w-0.5 -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,var(--color-navy)_0_6px,transparent_6px_12px)] opacity-30 sm:left-[2.25rem] sm:top-20" />

                <div className="relative">
                  <span className="grid size-11 place-items-center rounded-full bg-navy text-gold shadow-[0_14px_30px_-14px_rgb(0_76_116/0.9)] ring-4 ring-sky sm:size-[4.5rem] sm:ring-[6px]">
                    <Icon name={d.icon} className="size-5 sm:size-7" />
                  </span>
                </div>

                <div className="rounded-[1.75rem] bg-mist p-5 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-[0.95rem] font-semibold text-navy">Step {i + 1}</span>
                    <span className="rounded-full bg-gold px-3 py-1 text-[0.8rem] font-semibold text-navy-900">{d.tag}</span>
                  </div>
                  <h3 className="mt-3 text-[clamp(1.35rem,1.2rem+0.6vw,1.7rem)] font-bold leading-tight">{s.title}</h3>
                  <p className="mt-2.5 max-w-[38rem] leading-relaxed">{s.text}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {d.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-[0.975rem] text-ink">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white text-navy ring-1 ring-line">
                          <Icon name="check" className="size-3" strokeWidth={3} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}

          <li className="relative grid grid-cols-[2.75rem_1fr] items-center gap-x-3 sm:grid-cols-[4.5rem_1fr] sm:gap-x-7">
            <span className="grid size-11 place-items-center rounded-full bg-gold text-navy-900 sm:size-[4.5rem]">
              <Icon name="award" className="size-5 sm:size-7" />
            </span>
            <p className="rounded-[1.75rem] bg-navy px-5 py-5 font-display text-[1.1rem] font-semibold leading-snug text-white sm:px-8">
              The result: a clear plan, and a team working for the outcome you deserve.
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}
