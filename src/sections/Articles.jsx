import { featuredArticles } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import { SoonLink } from '../components/ComingSoon.jsx'

export default function Articles() {
  return (
    <section id="articles" aria-labelledby="articles-title" className="bg-white py-24 lg:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 id="articles-title" className="heading">Guides and articles</h2>
            <p className="lede mt-4 max-w-[36rem]">Plain-English answers on NSW compensation law, time limits and the claims process.</p>
          </div>
          <SoonLink page="Articles" className="btn btn-ghost self-start md:self-auto">
            View all articles
          </SoonLink>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {featuredArticles.map((a) => (
            <li key={a.slug}>
              <SoonLink page={a.title} className="group block">
                <div className="overflow-hidden rounded-3xl">
                  <img src={a.img} alt="" width="1024" height="683" loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-5 text-[0.9rem] font-semibold text-gold-600">{a.topic}</p>
                <h3 className="mt-1.5 text-[1.3rem] font-bold leading-snug group-hover:text-navy">{a.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 font-display font-semibold text-navy">
                  Read article
                  <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </SoonLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
