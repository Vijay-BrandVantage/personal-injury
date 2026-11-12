import { useRef } from 'react'
import { rating, reviews } from '../data/site.js'
import Icon, { Stars, GoogleG } from '../components/Icon.jsx'

const avatarTone = ['bg-gold text-navy-900', 'bg-sky-300 text-navy-900', 'bg-white text-navy', 'bg-navy-700 text-white']

export default function Reviews() {
  const track = useRef(null)
  const scroll = (dir) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('li')
    el.scrollBy({ left: dir * ((card?.offsetWidth || 360) + 20), behavior: 'smooth' })
  }

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="overflow-hidden bg-navy-900 py-24 text-white lg:py-32">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 id="reviews-title" className="heading max-w-[18ch] text-white">
              What our clients say
            </h2>
            <p className="lede mt-4 max-w-[34rem] text-sky">
              Real reviews from people we've helped through workers compensation, road accident and public liability claims.
            </p>
          </div>
          <div className="flex items-center gap-5 rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10">
            <span className="grid size-16 place-items-center rounded-2xl bg-white">
              <GoogleG className="size-9" />
            </span>
            <div>
              <p className="flex items-center gap-3">
                <span className="font-display text-[2.5rem] font-bold leading-none">{rating.score}</span>
                <Stars className="size-5" />
              </p>
              <p className="mt-1 text-sky">Based on {rating.count} Google reviews</p>
            </div>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[max(clamp(1rem,4vw,2.5rem),calc((100vw_-_1280px)/2_+_2.5rem))] scroll-px-[max(clamp(1rem,4vw,2.5rem),calc((100vw_-_1280px)/2_+_2.5rem))] pb-4"
        aria-label="Google reviews"
      >
        {reviews.map((r, i) => (
          <li key={r.name} className="w-[85vw] max-w-[26rem] shrink-0 snap-start sm:w-[24rem]">
            <figure className="flex h-full flex-col rounded-3xl bg-white p-7 text-ink">
              <div className="flex items-center justify-between">
                <Stars className="size-[1.1rem]" />
                <GoogleG className="size-5" />
              </div>
              <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-ink">
                <p>“{r.text}”</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`grid size-11 place-items-center rounded-full font-display font-bold ${avatarTone[i % avatarTone.length]} ring-1 ring-line`}>
                  {r.name.trim()[0]}
                </span>
                <span>
                  <span className="block font-display font-semibold">{r.name}</span>
                  <span className="block text-[0.875rem] text-body">{r.area ? `${r.area} client` : 'Google review'}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="wrap mt-8 flex items-center justify-between gap-4">
        <p className="text-[0.95rem] text-sky">Reviews are excerpts, shown as written on Google.</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => scroll(-1)} className="grid size-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 transition-colors hover:bg-gold hover:text-navy-900" aria-label="Previous reviews">
            <Icon name="left" className="size-5" />
          </button>
          <button type="button" onClick={() => scroll(1)} className="grid size-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 transition-colors hover:bg-gold hover:text-navy-900" aria-label="Next reviews">
            <Icon name="right" className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
