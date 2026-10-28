const base = { width: 20, height: 20, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
  </svg>
)

export const LinkIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
  </svg>
)

export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
)

export const ArrowIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
)

export const ChevronIcon = ({ dir = 'right', ...p }) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d={dir === 'right' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} />
  </svg>
)

export const ChatIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z" />
  </svg>
)
