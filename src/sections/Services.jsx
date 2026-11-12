import { practice, practiceIcon } from '../data/practice.js'
import { firm } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import { SoonLink } from '../components/ComingSoon.jsx'

// Short text shows on hover/focus where hovering exists; always visible on touch screens
const reveal =
  'grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] grid-rows-[1fr] [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:grid-rows-[1fr] [@media(hover:hover)]:group-focus-visible:opacity-100'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-mist py-24 lg:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <h2 id="services-title" className="heading max-w-[16ch]">
            Personal injury and compensation services
          </h2>
          <div>
            <p className="lede max-w-[34rem]">
              Whether you were hurt at work, on the road or in someone else's care, our lawyers handle the claim from the first call to the final outcome.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#finder" className="btn btn-navy">
                Find your claim
                <span className="chip"><Icon name="arrow" className="size-4" /></span>
              </a>
              <a href={firm.phoneHref} className="btn btn-ghost">
                <Icon name="phone" className="size-5" />
                {firm.phone}
              </a>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {practice.map((p) => (
            <li key={p.slug}>
              <SoonLink
                page={p.name}
                className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-navy-900 p-6 text-white shadow-[0_24px_48px_-30px_rgb(1_34_56/0.6)] sm:aspect-[4/5] lg:aspect-[3/4]"
              >
                <img
                  src={p.img}
                  alt=""
                  width="1024"
                  height="682"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-110"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgb(1_34_56/0.1)_0%,rgb(1_34_56/0.25)_40%,rgb(1_34_56/0.94)_100%)] transition-colors duration-500" />
                <div aria-hidden="true" className="absolute inset-0 bg-navy-900/0 transition-colors duration-500 group-hover:bg-navy-900/35" />

                <span className="relative grid size-12 place-items-center rounded-2xl bg-gold text-navy-900 shadow-lg">
                  <Icon name={practiceIcon[p.slug]} className="size-5" />
                </span>

                <div className="relative">
                  <span className="block text-[0.9rem] font-medium text-gold">{p.situation}</span>
                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h3 className="text-[1.4rem] font-bold leading-[1.15] text-white">{p.name}</h3>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-900">
                      <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:-rotate-45" />
                    </span>
                  </div>
                  <span className={reveal}>
                    <span className="overflow-hidden">
                      <span className="block pt-3 text-[0.95rem] leading-snug text-sky">{p.short}</span>
                    </span>
                  </span>
                </div>
              </SoonLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
