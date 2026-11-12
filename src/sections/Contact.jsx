import { useState } from 'react'
import { firm, offices } from '../data/site.js'
import { practice } from '../data/practice.js'
import Icon from '../components/Icon.jsx'

const field =
  'mt-1 block w-full rounded-xl border border-line bg-white px-4 py-2.5 font-sans text-[1rem] font-normal text-ink transition-[border-color,box-shadow] placeholder:text-body/50 hover:border-navy/40 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/10'
const label = 'block font-display text-[0.9rem] font-semibold text-ink'

function Req() {
  return (
    <span aria-hidden="true" className="ml-0.5 text-gold-600">
      *
    </span>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No form backend yet: the enquiry opens in the visitor's email app, filled in.
  function onSubmit(e) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    const body = [`Name: ${d.name}`, `Email: ${d.email}`, `Phone: ${d.phone}`, `Matter: ${d.area}`, '', d.message].join('\n')
    window.location.href = `mailto:${firm.email}?subject=${encodeURIComponent(`Website enquiry: ${d.area}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-mist py-14 lg:py-20">
      <div className="wrap">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-[0_50px_100px_-50px_rgb(1_34_56/0.45)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: reassurance and direct contact */}
          <div className="flex flex-col bg-navy-900 p-7 text-white sm:p-8">
            <h2 id="contact-title" className="font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.4rem]">
              Speak with our team today
            </h2>
            <p className="mt-3 max-w-[28rem] leading-relaxed text-sky">
              Tell us what happened and we'll explain your options. There's no cost to make an enquiry, and no obligation to start.
            </p>

            <a href={firm.phoneHref} className="group mt-6 flex items-center gap-4 rounded-2xl bg-gold p-3 pr-5 text-navy-900 transition-colors hover:bg-gold-400">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold">
                <Icon name="phone" className="size-5" />
              </span>
              <span className="flex-1">
                <span className="block text-[0.9rem] font-medium">Call us</span>
                <span className="block font-display text-[1.4rem] font-bold leading-tight">{firm.phone}</span>
              </span>
              <Icon name="arrow" className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={`mailto:${firm.email}`} className="mt-2.5 flex items-center gap-4 rounded-2xl p-3 ring-1 ring-white/15 transition-colors hover:bg-white/[0.06]">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                <Icon name="mail" className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.9rem] text-sky">Email us</span>
                <span className="block break-all font-display text-[1rem] font-semibold sm:text-[1.05rem]">{firm.email}</span>
              </span>
            </a>

            <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5 lg:mt-auto">
              <img src="/images/emma-mead.png" alt="" loading="lazy" className="size-12 shrink-0 rounded-full bg-sky object-cover object-top ring-2 ring-gold" />
              <p className="text-[0.95rem] leading-snug text-sky">
                <span className="block font-display font-semibold text-white">Led by Emma Mead</span>
                Accredited Specialist in Personal Injury Law
              </p>
            </div>
          </div>

          {/* Right: enquiry form */}
          <form onSubmit={onSubmit} className="p-7 sm:p-8" aria-labelledby="form-title" aria-describedby="form-note">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 id="form-title" className="text-[1.5rem] font-bold leading-tight">Send an enquiry</h3>
              <p className="text-[0.875rem]">
                <span className="text-gold-600">*</span> Required
              </p>
            </div>

            <div className="mt-5 grid gap-x-4 gap-y-3.5 sm:grid-cols-6">
              <label className={`${label} sm:col-span-3`}>
                Full name<Req />
                <input name="name" required autoComplete="name" className={field} />
              </label>
              <label className={`${label} sm:col-span-3`}>
                Email<Req />
                <input name="email" type="email" required autoComplete="email" className={field} />
              </label>
              <label className={`${label} sm:col-span-3`}>
                Phone<Req />
                <input name="phone" type="tel" required autoComplete="tel" className={field} />
              </label>
              <label className={`${label} sm:col-span-3`}>
                Type of claim
                <span className="relative block">
                  <select name="area" className={`${field} appearance-none pr-11`} defaultValue={practice[0].name}>
                    {practice.map((p) => (
                      <option key={p.slug} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Not sure">Not sure</option>
                  </select>
                  <Icon name="chevron" className="pointer-events-none absolute right-4 top-1/2 mt-1 size-4 -translate-y-1/2 text-navy" />
                </span>
              </label>
              <label className={`${label} sm:col-span-6`}>
                How can we help?<Req />
                <textarea name="message" rows="3" required placeholder="Tell us briefly what happened" className={`${field} resize-y`} />
              </label>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <p id="form-note" className="flex flex-1 items-start gap-2.5 text-[0.85rem] leading-snug">
              <Icon name="shield" className="mt-0.5 size-4 shrink-0 text-navy" />
              We'll only use your details to respond to this enquiry. Sending this form does not create a lawyer-client relationship.
            </p>
            <button type="submit" className="btn btn-navy min-h-12 w-full shrink-0 sm:w-auto">
              Send enquiry
              <span className="chip"><Icon name="arrow" className="size-4" /></span>
            </button>
            </div>
            {sent && (
              <p role="status" className="mt-4 rounded-xl bg-sky px-4 py-3 text-ink">
                Your email app should now open with your enquiry ready to send. If it doesn't, email {firm.email} or call {firm.phone}.
              </p>
            )}
          </form>
        </div>

        {/* Offices */}
        <div className="mt-14 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <h3 className="text-[1.75rem] font-bold leading-tight">Our offices</h3>
          <p className="max-w-[34rem] md:text-right">All offices are by appointment. We can also meet by phone or video wherever you are in NSW.</p>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {offices.map((o) => (
            <li key={o.city} className="relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_20px_40px_-30px_rgb(1_34_56/0.4)]">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gold" />
              <p className="flex items-center gap-3 font-display text-[1.2rem] font-bold text-ink">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-mist text-navy">
                  <Icon name="pin" className="size-5" />
                </span>
                {o.city}
              </p>
              <address className="mt-3 flex-1 text-[0.95rem] not-italic leading-snug">
                {o.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </address>
              <a href={`tel:${o.phone.replace(/\D/g, '')}`} className="mt-2 inline-flex min-h-11 items-center gap-2 font-display font-semibold text-navy hover:text-gold-600">
                <Icon name="phone" className="size-4" />
                {o.phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
