import { useEffect, useRef, useState } from 'react'
import Logo from '../components/Logo'
import { menu, currency, isSample } from '../data/menu'

const fmt = (n) => n.toLocaleString('en-KE')
const tagLabel = { signature: 'House signature', specialty: 'Specialty', popular: 'Guest favourite' }

function MenuItem({ item }) {
  return (
    <li className="border-b border-espresso/12 py-5">
      <div className="flex items-baseline justify-between gap-6">
        <h4 className="font-serif text-[1.3125rem] leading-snug">{item.name}</h4>
        <span className="shrink-0 text-[0.9375rem] font-medium tabular-nums">{fmt(item.price)}</span>
      </div>
      <p className="mt-1 max-w-[42ch] text-[0.9375rem] leading-normal text-bean">{item.description}</p>
      {item.tags?.length > 0 && (
        <p className="mt-2 font-serif text-[0.9375rem] text-burgundy italic">
          {item.tags.map((t) => tagLabel[t] ?? t).join(', ')}
        </p>
      )}
    </li>
  )
}

export default function Menu() {
  const [active, setActive] = useState(menu[0].id)
  const tabs = useRef([])
  const category = menu.find((c) => c.id === active)

  useEffect(() => {
    const tab = tabs.current[menu.findIndex((c) => c.id === active)]
    const list = tab?.parentElement
    if (!list) return
    const left = tab.offsetLeft - list.offsetLeft
    if (left < list.scrollLeft || left + tab.offsetWidth > list.scrollLeft + list.clientWidth) {
      list.scrollTo({ left: left - 20, behavior: 'smooth' })
    }
  }, [active])

  const onKeyDown = (e, i) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const next = (i + step + menu.length) % menu.length
    setActive(menu[next].id)
    tabs.current[next]?.focus()
  }

  return (
    <section id="menu" className="bg-espresso py-16 sm:py-24">
      <div className="on-light mx-auto max-w-[68rem] bg-paper text-espresso sm:mx-8 lg:mx-auto">
        <div className="m-0 border-espresso/15 px-5 py-12 sm:m-3 sm:border sm:px-10 sm:py-14 lg:px-16">
          <header className="flex flex-col items-center text-center">
            <Logo ring size={96} />
            <h2 className="mt-5 text-title">Menu</h2>
            <p className="mt-2 text-[0.9375rem] text-bean">
              Prices in Kenyan shillings ({currency}).
            </p>
          </header>

          <div className="relative mt-10 -mx-5 sm:mx-0">
            <div
              role="tablist"
              aria-label="Menu sections"
              className="flex gap-7 overflow-x-auto border-b border-espresso/15 px-5 [scrollbar-width:none] sm:justify-center sm:px-0 [&::-webkit-scrollbar]:hidden"
            >
              {menu.map((c, i) => {
                const selected = active === c.id
                return (
                  <button
                    key={c.id}
                    ref={(el) => (tabs.current[i] = el)}
                    role="tab"
                    id={`tab-${c.id}`}
                    aria-selected={selected}
                    aria-controls="menu-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(c.id)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={`relative -mb-px shrink-0 border-b-2 py-3 text-[0.9375rem] whitespace-nowrap transition-colors ${
                      selected ? 'border-burgundy font-semibold text-espresso' : 'border-transparent text-bean hover:text-espresso'
                    }`}
                  >
                    {c.title}
                  </button>
                )
              })}
            </div>
            <span className="pointer-events-none absolute top-0 right-0 bottom-px w-10 bg-gradient-to-l from-paper sm:hidden" />
          </div>

          <div
            id="menu-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            key={active}
            className="mt-10 animate-[fade_0.35s_var(--ease-out-soft)_both]"
          >
            <div className="text-center">
              <h3 className="text-[1.75rem] italic">{category.title}</h3>
              <p className="mx-auto mt-1 max-w-[40ch] text-bean">{category.blurb}</p>
            </div>
            <ul className="mt-6 grid gap-x-14 md:grid-cols-2">
              {category.items.map((item) => (
                <MenuItem key={item.name} item={item} />
              ))}
            </ul>
          </div>

          {isSample && (
            <p className="mx-auto mt-10 max-w-[48ch] text-center text-sm text-bean">
              This is a sample menu while we finalise dishes and prices. Ask our team for today's menu.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
