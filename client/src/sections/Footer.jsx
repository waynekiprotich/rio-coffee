import Logo from '../components/Logo'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-espresso-deep text-ivory">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12 md:items-center">
        <div className="flex items-center gap-5 md:col-span-6">
          <Logo ring size={84} />
          <div>
            <p className="font-serif text-2xl leading-tight">{site.fullName}</p>
            <p className="mt-1 text-ivory/65">{site.tagline}</p>
          </div>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="grid grid-cols-2 gap-y-2 text-[0.9375rem] text-ivory/75">
            {site.nav.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-ivory">{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <ul className="space-y-2 text-[0.9375rem] md:col-span-3 md:text-right">
          {site.socials.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noreferrer" className="link text-ivory/75 hover:text-ivory">
                {s.name}{s.handle && ` ${s.handle}`}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap border-t border-ivory/10 py-5 text-sm text-ivory/50">
        © {new Date().getFullYear()} {site.fullName}
      </div>
    </footer>
  )
}
