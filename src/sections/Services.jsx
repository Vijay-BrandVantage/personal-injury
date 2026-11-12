import { practice, practiceIcon } from '../data/practice.js'
import Icon from '../components/Icon.jsx'
import { SoonLink } from '../components/ComingSoon.jsx'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-24 lg:py-32">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 id="services-title" className="heading max-w-[18ch]">
            Personal injury and compensation services
          </h2>
          <p className="lede max-w-[34rem] lg:justify-self-end">
            Whether you were hurt at work, on the road or in someone else's care, our lawyers handle the claim from the first call to the final outcome.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {practice.map((p, i) => (
            <li key={p.slug} className={i === 0 ? 'sm:col-span-2 lg:row-span-2' : ''}>
              <SoonLink
                page={p.name}
                className={`card-lift group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-navy-900 text-white ${i === 0 ? 'min-h-[20rem] lg:min-h-full' : 'min-h-[15rem] sm:min-h-[19rem]'}`}
              >
                <img
                  src={p.img}
                  alt=""
                  width="1024"
                  height="682"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Scrim under the card text */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(1_34_56/0.05)_20%,rgb(1_34_56/0.92)_100%)]" />
                <div className="relative p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-gold text-navy-900">
                    <Icon name={practiceIcon[p.slug]} className="size-5" />
                  </span>
                  <h3 className={`mt-4 font-bold leading-tight text-white ${i === 0 ? 'text-[2rem]' : 'text-[1.35rem]'}`}>{p.name}</h3>
                  <p className={`mt-2 text-sky ${i === 0 ? 'max-w-[30rem] text-[1.05rem]' : 'text-[0.95rem] leading-snug'}`}>{p.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display font-semibold text-gold">
                    Find out more
                    <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </SoonLink>
            </li>
          ))}
          <li>
            <a href="#finder" className="card-lift group flex h-full min-h-[19rem] flex-col justify-between rounded-3xl bg-gold p-6 text-navy-900">
              <span className="grid size-11 place-items-center rounded-xl bg-navy-900 text-gold">
                <Icon name="message" className="size-5" />
              </span>
              <span>
                <span className="block font-display text-[1.35rem] font-bold leading-tight">Not sure which applies to you?</span>
                <span className="mt-2 block text-[0.95rem] leading-snug">Use the claim finder, or call us and we'll work it out together.</span>
                <span className="mt-4 inline-flex items-center gap-2 font-display font-semibold">
                  Find your claim
                  <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
