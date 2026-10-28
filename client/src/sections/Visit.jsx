import { useMemo, useState } from 'react'
import QuickActions from '../components/QuickActions'
import { instagram, site } from '../data/site'

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

function useOpenStatus(hours) {
  return useMemo(() => {
    if (!hours.length) return null
    const now = new Date()
    const today = hours.find((h) => h.days.includes(now.getDay()))
    if (!today) return { open: false, text: 'Closed today' }
    const mins = now.getHours() * 60 + now.getMinutes()
    const open = mins >= toMinutes(today.open) && mins < toMinutes(today.close)
    if (open) return { open, text: `Open now, until ${today.close}` }
    return { open, text: mins < toMinutes(today.open) ? `Opens today at ${today.open}` : 'Closed for today' }
  }, [hours])
}

function InfoRow({ term, children }) {
  return (
    <div className="grid gap-1 border-t border-espresso/15 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <dt className="font-serif text-xl">{term}</dt>
      <dd className="text-bean">{children}</dd>
    </div>
  )
}

function BookingForm() {
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: '2', note: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const today = new Date().toLocaleDateString('en-CA')
  const { whatsapp } = site.contact

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = [
      `Hi ${site.name}, I'd like to book a table.`,
      `Name: ${form.name}`,
      `Date: ${form.date} at ${form.time}`,
      `Guests: ${form.guests}`,
      form.note && `Note: ${form.note}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }

  const field =
    'mt-1.5 block w-full min-h-12 rounded-[3px] border border-ivory/25 bg-espresso-deep/60 px-3.5 py-2.5 text-ivory placeholder:text-ivory/40 transition-colors focus:border-crema focus:outline-none [color-scheme:dark]'
  const label = 'block text-sm font-medium text-ivory/85'

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-4 gap-y-5">
      <label className={`col-span-2 ${label}`}>
        Name
        <input required autoComplete="name" value={form.name} onChange={set('name')} className={field} />
      </label>
      <label className={`col-span-2 sm:col-span-1 ${label}`}>
        Date
        <input required type="date" min={today} value={form.date} onChange={set('date')} className={field} />
      </label>
      <label className={`col-span-2 sm:col-span-1 ${label}`}>
        Time
        <input required type="time" value={form.time} onChange={set('time')} className={field} />
      </label>
      <label className={`col-span-2 ${label}`}>
        Number of guests
        <select value={form.guests} onChange={set('guests')} className={field}>
          {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label>
      <label className={`col-span-2 ${label}`}>
        Anything we should know? <span className="font-normal text-ivory/55">(optional)</span>
        <textarea rows={2} value={form.note} onChange={set('note')} placeholder="A birthday, a high chair, a quiet table" className={field} />
      </label>

      <div className="col-span-2">
        <button type="submit" disabled={!whatsapp} className="btn btn-ivory w-full disabled:cursor-not-allowed disabled:opacity-50">
          Send request on WhatsApp
        </button>
        <p className="mt-3 text-sm text-ivory/65">
          {whatsapp ? (
            'This opens WhatsApp with your details filled in. We reply to confirm your table.'
          ) : (
            <>
              Online booking is not available yet. To reserve, message us on{' '}
              <a href={instagram.url} target="_blank" rel="noreferrer" className="link text-ivory">Instagram</a>.
            </>
          )}
        </p>
      </div>
    </form>
  )
}

export default function Visit() {
  const status = useOpenStatus(site.hours)
  const { contact } = site

  return (
    <section id="visit" className="on-light border-t border-espresso/10 bg-[#ebe1d0] py-20 sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-title">Visit Rio</h2>
          <p className="mt-4 max-w-[40ch] text-bean">Walk in any time we're open, or book ahead if you're coming as a group.</p>

          <QuickActions className="mt-8 md:hidden" />

          <dl className="mt-10 border-b border-espresso/15">
            <InfoRow term="Address">
              {contact.address ? (
                <address className="text-espresso not-italic">
                  {contact.address}
                  {contact.area && <><br />{contact.area}</>}
                </address>
              ) : (
                <span>Full address coming soon. Search for {site.fullName} on Google Maps.</span>
              )}
            </InfoRow>
            <InfoRow term="Hours">
              {status ? (
                <>
                  <span className={`font-medium ${status.open ? 'text-[#3f6b3a]' : 'text-burgundy'}`}>{status.text}</span>
                  <table className="mt-3 w-full max-w-xs text-[0.9375rem]">
                    <tbody>
                      {site.hours.map((h) => (
                        <tr key={h.label}>
                          <th scope="row" className="py-0.5 pr-4 text-left font-normal">{h.label}</th>
                          <td className="py-0.5 text-right text-espresso tabular-nums">{h.open} to {h.close}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <span>
                  Opening hours will be posted here soon. Message us on{' '}
                  <a href={instagram.url} target="_blank" rel="noreferrer" className="link text-espresso">Instagram</a> to check today's hours.
                </span>
              )}
            </InfoRow>
            {contact.phone && (
              <InfoRow term="Phone">
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="link text-espresso">{contact.phone}</a>
              </InfoRow>
            )}
            <InfoRow term="Follow">
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {site.socials.map((s) => (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noreferrer" className="link text-espresso">
                      {s.name}{s.handle && ` ${s.handle}`}
                    </a>
                  </li>
                ))}
              </ul>
            </InfoRow>
          </dl>

          {contact.mapEmbedSrc ? (
            <iframe
              title={`Map showing ${site.fullName}`}
              src={contact.mapEmbedSrc}
              loading="lazy"
              className="mt-10 aspect-[16/9] w-full border-0 sepia-[.35]"
            />
          ) : (
            <div className="mt-10 flex flex-col gap-4 bg-espresso/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="max-w-[30ch] font-serif text-xl leading-snug">Get directions from wherever you are.</p>
              <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-line-dark shrink-0">Open Google Maps</a>
            </div>
          )}
        </div>

        <div id="book" className="scroll-mt-20 self-start bg-espresso p-6 text-ivory sm:p-10 lg:sticky lg:top-24 lg:col-span-5">
          <h3 className="text-[2rem] leading-tight">Book a table</h3>
          <p className="mt-2 mb-8 text-ivory/70">Tell us when you're coming and how many of you there are.</p>
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
