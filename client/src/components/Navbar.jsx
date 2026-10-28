import { useEffect, useState } from 'react'
import Logo from './Logo'
import { MenuIcon, CloseIcon } from './Icons'
import { site } from '../data/site'
import QuickActions from './QuickActions'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-espresso text-ivory">
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" onClick={close} className="flex items-center gap-3">
          <Logo size={34} />
          <span className="font-serif text-[1.3rem] leading-none">{site.name}</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex gap-8 text-[0.9375rem]">
            {site.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-ivory/75 transition-colors hover:text-ivory">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#book" className="btn btn-line-light min-h-10 px-4">Book a table</a>
        </div>

        <button
          type="button"
          className="-mr-2 grid h-12 w-12 place-items-center md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        inert={!open}
        className={`on-light fixed inset-x-0 top-16 bottom-0 flex flex-col overflow-y-auto bg-ivory text-espresso transition-[opacity,translate] duration-300 ease-out-soft md:hidden ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <ul className="wrap pt-6">
          {site.nav.map((l) => (
            <li key={l.href} className="border-b border-espresso/12">
              <a href={l.href} onClick={close} className="block py-4 font-serif text-[2rem] leading-tight">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="wrap mt-auto pt-10 pb-8">
          <a href="#book" onClick={close} className="btn btn-burgundy w-full">Book a table</a>
          <QuickActions className="mt-3" onNavigate={close} />
        </div>
      </div>
    </header>
  )
}
