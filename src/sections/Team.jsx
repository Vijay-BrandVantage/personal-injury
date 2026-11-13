import { team } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import { SoonLink } from '../components/ComingSoon.jsx'

export default function Team() {
  const people = team.slice(1)
  return (
    <section id="team" aria-labelledby="team-title" className="bg-mist py-24 lg:py-32">
      <div className="wrap">
        <div className="grid items-center gap-12 overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
          <div data-reveal="left" className="relative h-full min-h-[26rem] bg-mist-200">
            <img src="/images/emma-mead.png" alt="Emma Mead, Managing Director" width="705" height="800" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
          </div>
          <div data-reveal="right" style={{ '--rd': '120ms' }} className="p-7 pt-0 sm:p-12 lg:p-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-1.5 text-[0.9rem] font-semibold text-navy">
              <Icon name="award" className="size-4" />
              Accredited Specialist in Personal Injury Law
            </p>
            <h2 id="team-title" className="mt-5 text-[clamp(1.6rem,1.2rem+1.4vw,2.35rem)] font-bold leading-snug">
              Focused on each client, and on the best outcome when the worst of life's events happen.
            </h2>
            <p className="mt-6 leading-relaxed">
              Emma Mead is a personal injury lawyer and an Accredited Specialist in Personal Injury Law, who is compassionate and passionate about representing people and ensuring they get the fair compensation they are entitled to.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div>
                <p className="font-display text-[1.25rem] font-bold text-ink">Emma Mead</p>
                <p className="text-[0.95rem]">Managing Director, Accredited Mediator and Notary Public</p>
              </div>
              <a href="#contact" className="btn btn-navy ml-auto pl-6 pr-2">
                Get in touch with Emma
                <span className="chip ml-1 mr-0">
                  <Icon name="arrow" className="size-4" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h3 className="text-[clamp(1.6rem,1.3rem+1vw,2.25rem)] font-bold">Meet the team</h3>
            <p className="mt-2 max-w-[36rem]">Lawyers, paralegals and support staff who'll know your matter by name.</p>
          </div>
          <SoonLink page="Team profiles" className="inline-flex items-center gap-2 font-display font-semibold text-navy hover:underline">
            View all profiles <Icon name="arrow" className="size-4" />
          </SoonLink>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {people.map((t) => (
            <li key={t.name} className="group overflow-hidden rounded-3xl bg-white">
              <div className="overflow-hidden bg-mist-200">
                <img
                  src={`/images/team/${t.img}.png`}
                  alt={`${t.name}, ${t.role}`}
                  width="800"
                  height="800"
                  loading="lazy"
                  className="aspect-square w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="px-4 py-4">
                <p className="font-display font-semibold leading-tight text-ink">{t.name}</p>
                <p className="mt-0.5 text-[0.9rem]">{t.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
