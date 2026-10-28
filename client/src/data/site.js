// Business details. Empty strings mean "not confirmed yet": the UI hides
// or softens anything left blank, so never fill these with guesses.

export const site = {
  name: 'Rio Coffee',
  fullName: 'Rio Coffee and Restaurant',
  tagline: 'Fueling your cravings.',
  intro: 'Join us for a cozy atmosphere and specialty blends.',

  contact: {
    address: '', // TODO: street and building
    area: '', // TODO: neighbourhood and town
    phone: '', // TODO: e.g. '+254 7xx xxx xxx'
    whatsapp: '', // TODO: digits only, e.g. '2547xxxxxxxx'; enables WhatsApp booking
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rio+Coffee+and+Restaurant+Kenya',
    mapEmbedSrc: '', // TODO: Google Maps "Embed a map" src
  },

  // day: 0 = Sunday ... 6 = Saturday; times in 24h "HH:MM".
  // Example: { label: 'Mon to Fri', days: [1, 2, 3, 4, 5], open: '07:00', close: '22:00' }
  hours: [], // TODO: confirmed opening hours

  socials: [
    { name: 'Instagram', handle: '@riocoffee.ke', url: 'https://www.instagram.com/riocoffee.ke/' },
    { name: 'Linktree', handle: '', url: '' }, // TODO: confirmed Linktree URL
  ].filter((s) => s.url),

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit', href: '#visit' },
  ],
}

export const instagram = site.socials.find((s) => s.name === 'Instagram')
