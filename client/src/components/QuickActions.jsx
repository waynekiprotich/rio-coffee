import { ChatIcon, InstagramIcon, PhoneIcon, PinIcon } from './Icons'
import { instagram, site } from '../data/site'

export function contactActions() {
  const { phone, whatsapp, mapsUrl } = site.contact
  return [
    phone && { label: 'Call', href: `tel:${phone.replace(/\s/g, '')}`, Icon: PhoneIcon },
    whatsapp && { label: 'WhatsApp', href: `https://wa.me/${whatsapp}`, Icon: ChatIcon, external: true },
    { label: 'Directions', href: mapsUrl, Icon: PinIcon, external: true },
    instagram && { label: 'Instagram', href: instagram.url, Icon: InstagramIcon, external: true },
  ].filter(Boolean)
}

export default function QuickActions({ className = '', tone = 'dark', onNavigate }) {
  const actions = contactActions()
  const border = tone === 'dark' ? 'border-espresso/20 hover:border-espresso/60' : 'border-ivory/25 hover:border-ivory/70'

  return (
    <ul className={`grid gap-2 ${actions.length > 2 ? 'grid-cols-3' : 'grid-cols-2'} ${className}`}>
      {actions.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            onClick={onNavigate}
            {...(external && { target: '_blank', rel: 'noreferrer' })}
            className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-[3px] border py-2 text-[0.8125rem] font-medium transition-colors ${border}`}
          >
            <Icon width={18} height={18} />
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
