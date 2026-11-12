import { useState } from 'react'
import { firm, offices } from '../data/site.js'
import { practice } from '../data/practice.js'
import Icon from '../components/Icon.jsx'

const field =
  'mt-2 block w-full rounded-2xl border-0 bg-mist px-4 py-3.5 text-ink ring-1 ring-transparent transition placeholder:text-body/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No form backend yet: the enquiry opens in the visitor's email app, filled in.
  function onSubmit(e) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    const body = [`Name: ${d.name}`, `Email: ${d.email}`, `Phone: ${d.phone}`, `Postcode: ${d.postcode}`, `Matter: ${d.area}`, '', d.message].join('\n')
    window.location.href = `mailto:${firm.email}?subject=${encodeURIComponent(`Website enquiry: ${d.area}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-navy-800 py-24 lg:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="text-white">
          <h2 id="contact-title" className="heading text-white">
            Speak with our team today
          </h2>
          <p className="lede mt-4 max-w-[30rem] text-sky">
            Tell us what happened and we'll explain your options. There's no cost to make an enquiry, and no obligation to start.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a href={firm.phoneHref} className="group flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]">
              <span className="grid size-12 place-items-center rounded-xl bg-gold text-navy-900">
                <Icon name="phone" className="size-5" />
              </span>
              <span>
                <span className="block text-[0.875rem] text-sky">Call us</span>
                <span className="block font-display text-[1.2rem] font-semibold">{firm.phone}</span>
              </span>
            </a>
            <a href={`mailto:${firm.email}`} className="group flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]">
              <span className="grid size-12 place-items-center rounded-xl bg-gold text-navy-900">
                <Icon name="mail" className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.875rem] text-sky">Email us</span>
                <span className="block truncate font-display text-[1.05rem] font-semibold">{firm.email}</span>
              </span>
            </a>
          </div>

          <h3 className="mt-12 font-display text-[1.2rem] font-semibold text-white">Our offices</h3>
          <ul className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {offices.map((o) => (
              <li key={o.city} className="flex gap-3">
                <Icon name="pin" className="mt-1 size-5 shrink-0 text-gold" />
                <div className="text-[0.95rem] leading-snug text-sky">
                  <p className="font-display text-[1.05rem] font-semibold text-white">{o.city}</p>
                  <address className="not-italic">{o.lines.join(', ')}</address>
                  <a href={`tel:${o.phone.replace(/\D/g, '')}`} className="mt-1 inline-block font-semibold text-white hover:text-gold">
                    {o.phone}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.95rem] text-sky">All offices are by appointment. We can also meet by phone or video wherever you are in NSW.</p>
        </div>

        <form onSubmit={onSubmit} className="self-start rounded-[2rem] bg-white p-6 shadow-[0_40px_90px_-40px_rgb(0_0_0/0.6)] sm:p-10" aria-describedby="form-note">
          <h3 className="text-[1.6rem] font-bold">Send an enquiry</h3>
          <p className="mt-1">We'll get back to you to talk through your options.</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="font-display font-medium text-ink sm:col-span-2">
              Full name
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <label className="font-display font-medium text-ink">
              Email
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <label className="font-display font-medium text-ink">
              Phone
              <input name="phone" type="tel" required autoComplete="tel" className={field} />
            </label>
            <label className="font-display font-medium text-ink">
              Postcode
              <input name="postcode" inputMode="numeric" maxLength="4" autoComplete="postal-code" className={field} />
            </label>
            <label className="font-display font-medium text-ink">
              Type of claim
              <select name="area" className={field} defaultValue={practice[0].name}>
                {practice.map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="Not sure">Not sure</option>
              </select>
            </label>
            <label className="font-display font-medium text-ink sm:col-span-2">
              How can we help?
              <textarea name="message" rows="5" required placeholder="Tell us briefly what happened" className={field} />
            </label>
          </div>

          <p id="form-note" className="mt-5 flex items-start gap-2 text-[0.9rem]">
            <Icon name="shield" className="mt-0.5 size-4 shrink-0 text-navy" />
            We'll only use your details to respond to this enquiry. Sending this form does not create a lawyer-client relationship.
          </p>
          <button type="submit" className="btn btn-gold mt-6 w-full min-h-14 text-[1.05rem]">
            Send enquiry
          </button>
          {sent && (
            <p role="status" className="mt-4 rounded-2xl bg-sky px-4 py-3 text-ink">
              Your email app should now open with your enquiry ready to send. If it doesn't, email {firm.email} or call {firm.phone}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
