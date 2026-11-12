import { useState } from 'react'
import { awards } from '../data/site.js'
import Icon from '../components/Icon.jsx'

const years = [...new Set(awards.map((a) => a[0]))]
// Badge image for each award, in the order of the awards list (paired from the live site).
const badgeOrder = [20, 21, 22, 14, 15, 16, 17, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const withBadge = awards.map((a, i) => [...a, `/images/awards/a${String(badgeOrder[i]).padStart(2, '0')}.png`])

export default function Awards() {
  const [year, setYear] = useState(years[0])
  const list = withBadge.filter((a) => a[0] === year)

  return (
    <section id="awards" aria-labelledby="awards-title" className="bg-mist py-24 lg:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 id="awards-title" className="heading">Awards and recognition</h2>
            <p className="lede mt-4 max-w-[38rem]">
              Doyles Guide has ranked our lawyers among Australia's leading compensation lawyers for public liability, motor vehicle accident and work injury claims.
            </p>
          </div>
          <div role="tablist" aria-label="Award year" className="inline-flex gap-1 self-start rounded-full bg-white p-1.5 lg:self-auto">
            {years.map((y) => (
              <button
                key={y}
                type="button"
                role="tab"
                aria-selected={y === year}
                aria-controls="awards-panel"
                onClick={() => setYear(y)}
                className={`min-h-11 rounded-full px-6 font-display font-semibold transition-colors ${y === year ? 'bg-navy text-white' : 'text-ink hover:bg-mist'}`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <ul id="awards-panel" role="tabpanel" aria-label={`${year} awards`} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(([y, body, rank, cat, badge]) => (
            <li key={rank + cat} className="flex items-center gap-5 rounded-3xl bg-white p-5">
              <img src={badge} alt="" width="371" height="340" loading="lazy" className="h-20 w-auto shrink-0" />
              <div>
                <p className="flex items-center gap-1.5 text-[0.875rem] font-semibold text-gold-600">
                  <Icon name="award" className="size-4" />
                  {body} {y}
                </p>
                <p className="mt-1 font-display font-semibold leading-snug text-ink">{rank}</p>
                <p className="text-[0.95rem] leading-snug">{cat}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
