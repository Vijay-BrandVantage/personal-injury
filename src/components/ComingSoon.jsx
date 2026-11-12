import { useEffect, useRef, useState } from 'react'
import { firm } from '../data/site.js'
import Icon from './Icon.jsx'

const EVENT = 'coming-soon'

// Pages other than the home page are not built yet: links to them open this notice instead.
export function SoonLink({ page, onClick, children, ...props }) {
  return (
    <a
      href="#coming-soon"
      aria-haspopup="dialog"
      onClick={(e) => {
        e.preventDefault()
        onClick?.(e)
        window.dispatchEvent(new CustomEvent(EVENT, { detail: page }))
      }}
      {...props}
    >
      {children}
    </a>
  )
}

export default function ComingSoonDialog() {
  const ref = useRef(null)
  const [page, setPage] = useState('')

  useEffect(() => {
    const open = (e) => {
      setPage(e.detail || 'This page')
      ref.current?.showModal()
    }
    window.addEventListener(EVENT, open)
    return () => window.removeEventListener(EVENT, open)
  }, [])

  const close = () => ref.current?.close()

  return (
    <dialog
      ref={ref}
      aria-labelledby="soon-title"
      onClick={(e) => e.target === ref.current && close()}
      className="m-auto w-[min(92vw,28rem)] rounded-[2rem] bg-white p-0 text-body shadow-[0_40px_100px_-30px_rgb(1_34_56/0.6)] backdrop:bg-navy-900/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-7 text-center sm:p-9">
        <button type="button" onClick={close} className="absolute right-4 top-4 grid size-11 place-items-center rounded-full text-ink hover:bg-mist" aria-label="Close">
          <Icon name="close" className="size-5" />
        </button>
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-sky text-navy">
          <Icon name="clock" className="size-7" />
        </span>
        <h2 id="soon-title" className="mt-5 text-[1.6rem] font-bold leading-tight">Coming soon</h2>
        <p className="mt-2">
          <span className="font-semibold text-ink">{page}</span> is on its way. In the meantime, our team is happy to help by phone or email.
        </p>
        <div className="mt-7 grid gap-3">
          <a href={firm.phoneHref} className="btn btn-navy">
            <Icon name="phone" className="size-4" />
            Call {firm.phone}
          </a>
          <a href="#contact" onClick={close} className="btn btn-gold">
            Send an enquiry
          </a>
        </div>
      </div>
    </dialog>
  )
}
