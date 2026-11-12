import { caseStudies } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import { SoonLink } from '../components/ComingSoon.jsx'

export default function Stories() {
  return (
    <section id="stories" aria-labelledby="stories-title" className="bg-white py-24 lg:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 id="stories-title" className="heading">Success stories</h2>
            <p className="lede mt-4 max-w-[36rem]">Real outcomes for real people across Newcastle, the Hunter and the Central Coast.</p>
          </div>
          <SoonLink page="Case studies" className="btn btn-ghost self-start md:self-auto">
            View all stories
          </SoonLink>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((s) => (
            <li key={s.title}>
              <SoonLink page={s.title} className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-mist">
                <div className="relative overflow-hidden">
                  <img src={s.img} alt="" width="1024" height="683" loading="lazy" className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[0.85rem] font-semibold text-navy">{s.area}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-[1.3rem] font-bold leading-snug group-hover:text-navy">{s.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed">{s.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-navy">
                    Read the case study
                    <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
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
