import { useEffect, useRef, useState } from 'react'
import { firm, offices } from '../data/site.js'
import { practice, practiceIcon } from '../data/practice.js'
import Icon from './Icon.jsx'
import { SoonLink } from './ComingSoon.jsx'

const links = [
  { href: '#process', label: 'How it works' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#team', label: 'Our team' },
  { href: '#stories', label: 'Case studies' },
]

export default function Header() {
  const [areasOpen, setAreasOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const areasRef = useRef(null)

  const close = () => {
    setAreasOpen(false)
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!areasOpen) return
    const onDown = (e) => !areasRef.current?.contains(e.target) && setAreasOpen(false)
    const onKey = (e) => e.key === 'Escape' && setAreasOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [areasOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const menuButton = (extra) => (
    <button
      type="button"
      className={`size-12 place-items-center rounded-full bg-mist text-ink ${extra}`}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      onClick={() => setMenuOpen((v) => !v)}
    >
      <Icon name={menuOpen ? 'close' : 'menu'} className="size-5" />
    </button>
  )

  return (
    <>
      <div className="hidden bg-navy-900 text-[0.875rem] text-sky md:block">
        <div className="wrap flex h-10 items-center justify-between gap-6">
          <p className="flex items-center gap-2">
            <Icon name="pin" className="size-4 text-gold" />
            Offices in {offices.map((o) => o.city).join(', ').replace(/, (?=[^,]*$)/, ' and ')}
          </p>
          <p className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Icon name="clock" className="size-4 text-gold" />
              No cost to make an enquiry
            </span>
            <a href={`mailto:${firm.email}`} className="hidden items-center gap-2 hover:text-white lg:flex">
              <Icon name="mail" className="size-4 text-gold" />
              {firm.email}
            </a>
          </p>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_8px_30px_-12px_rgb(1_34_56/0.25)]' : ''}`}>
        <div className="wrap flex h-20 items-center justify-between gap-6">
          <a href="#main" onClick={close} className="shrink-0" aria-label="Burke Mead Lawyers, back to top">
            <img src="/images/logo.png" alt="Burke Mead Lawyers" width="263" height="49" className="h-10 w-auto" />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            <div className="relative" ref={areasRef}>
              <button
                type="button"
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 font-display text-[0.975rem] font-medium transition-colors hover:bg-mist ${areasOpen ? 'bg-mist text-navy' : 'text-ink'}`}
                aria-expanded={areasOpen}
                aria-controls="areas-menu"
                onClick={() => setAreasOpen((v) => !v)}
              >
                Practice areas
                <Icon name="chevron" className={`size-4 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                id="areas-menu"
                hidden={!areasOpen}
                className="absolute left-0 top-full mt-3 w-[44rem] rounded-3xl bg-white p-3 shadow-[0_30px_80px_-20px_rgb(1_34_56/0.35)] ring-1 ring-line"
              >
                <ul className="grid grid-cols-2 gap-1">
                  {practice.map((p) => (
                    <li key={p.slug}>
                      <SoonLink page={p.name} onClick={close} className="group flex gap-4 rounded-2xl p-4 transition-colors hover:bg-mist">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sky text-navy transition-colors group-hover:bg-navy group-hover:text-gold">
                          <Icon name={practiceIcon[p.slug]} className="size-5" />
                        </span>
                        <span>
                          <span className="block font-display font-semibold text-ink">{p.name}</span>
                          <span className="mt-0.5 block text-[0.9rem] leading-snug text-body">{p.short}</span>
                        </span>
                      </SoonLink>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center justify-between gap-4 rounded-2xl bg-navy-900 px-5 py-4 text-white">
                  <p className="text-[0.95rem]">Not sure which applies to you? Tell us what happened.</p>
                  <a href="#finder" onClick={close} className="shrink-0 font-display font-semibold text-gold hover:underline">
                    Find your claim
                  </a>
                </div>
              </div>
            </div>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="whitespace-nowrap rounded-full px-3.5 py-2.5 font-display text-[0.975rem] font-medium text-ink transition-colors hover:bg-mist hover:text-navy">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={firm.phoneHref} className="btn btn-ghost hidden min-h-12 px-5 md:inline-flex">
              <Icon name="phone" className="size-4" />
              {firm.phone}
            </a>
            <a href="#contact" className="btn btn-gold hidden min-h-12 px-6 md:inline-flex">
              Enquire now
            </a>
            <a href={firm.phoneHref} className="grid size-12 place-items-center rounded-full bg-gold text-navy-900 md:hidden" aria-label={`Call ${firm.phone}`}>
              <Icon name="phone" className="size-5" />
            </a>
            {menuButton('grid xl:hidden')}
          </div>
        </div>

        <div id="mobile-menu" hidden={!menuOpen} className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-white xl:hidden">
          <nav aria-label="Mobile" className="wrap pb-10 pt-4">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={close} className="block rounded-2xl px-4 py-3 font-display text-[1.35rem] font-semibold text-ink hover:bg-mist">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 px-4 font-display font-semibold text-navy">Practice areas</p>
            <ul className="mt-2 grid gap-1 sm:grid-cols-2">
              {practice.map((p) => (
                <li key={p.slug}>
                  <SoonLink page={p.name} onClick={close} className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-mist">
                    <span className="grid size-10 place-items-center rounded-xl bg-sky text-navy">
                      <Icon name={practiceIcon[p.slug]} className="size-5" />
                    </span>
                    <span className="font-medium text-ink">{p.name}</span>
                  </SoonLink>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3 px-4 sm:grid-cols-2">
              <a href={firm.phoneHref} className="btn btn-navy">
                <Icon name="phone" className="size-4" /> Call {firm.phone}
              </a>
              <a href="#contact" onClick={close} className="btn btn-gold">
                Enquire now
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
