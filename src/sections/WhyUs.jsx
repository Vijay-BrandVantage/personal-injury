import { values } from '../data/site.js'
import Icon from '../components/Icon.jsx'

export default function WhyUs() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-24 lg:py-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div data-reveal="left" className="relative">
          <img
            src="/images/foyer.webp"
            alt="The reception of our Newcastle office, with mustard armchairs and timber walls"
            width="1024"
            height="598"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover lg:aspect-[5/5.4]"
          />
          <div className="absolute -bottom-8 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_24px_50px_-20px_rgb(1_34_56/0.45)] sm:left-8 sm:right-auto sm:max-w-sm sm:p-5">
            <img src="/images/team/emma-mead.png" alt="" width="64" height="64" loading="lazy" className="size-14 shrink-0 rounded-full object-cover" />
            <p className="text-[0.95rem] leading-snug">
              <span className="block font-display font-semibold text-ink">Led by Emma Mead</span>
              Accredited Specialist in Personal Injury Law and Accredited Mediator
            </p>
          </div>
        </div>

        <div data-reveal="right" style={{ '--rd': '120ms' }} className="pt-6 lg:pt-0">
          <h2 id="about-title" className="heading max-w-[16ch]">
            You've come to the right place
          </h2>
          <p className="lede mt-5 max-w-[36rem]">
            At Burke Mead Lawyers we pride ourselves on treating every client with the utmost understanding, privacy and respect. Our team of trustworthy lawyers will help you through it.
          </p>

          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v.title}>
                <span className="grid size-12 place-items-center rounded-2xl bg-navy text-gold">
                  <Icon name={v.icon} className="size-6" />
                </span>
                <h3 className="mt-4 text-[1.2rem] font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-[0.975rem] leading-relaxed">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
