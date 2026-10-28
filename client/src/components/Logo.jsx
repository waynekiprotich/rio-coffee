import { useId } from 'react'

// Circular maroon emblem with bold "R". `ring` wraps the full signage text
// around the circle, like the physical sign.
export default function Logo({ size = 48, ring = false, className = '' }) {
  const id = useId()
  const pathId = `ring-${id}`

  if (!ring) {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
        <circle cx="32" cy="32" r="32" fill="var(--color-logo)" />
        <circle cx="32" cy="32" r="28.5" fill="none" stroke="var(--color-paper)" strokeOpacity=".35" />
        <text x="32" y="44" textAnchor="middle" fontFamily="var(--font-serif)" fontWeight="600" fontSize="34" fill="var(--color-paper)">
          R
        </text>
      </svg>
    )
  }

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className} role="img" aria-label="Rio Coffee and Restaurant">
      <circle cx="100" cy="100" r="100" fill="var(--color-logo)" />
      <defs>
        <path id={pathId} d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
      </defs>
      <text fontFamily="var(--font-sans)" fontWeight="600" fontSize="17" fill="var(--color-paper)">
        <textPath href={`#${pathId}`} textLength="462" lengthAdjust="spacing">
          RIO COFFEE AND RESTAURANT •
        </textPath>
      </text>
      <circle cx="100" cy="100" r="58" fill="var(--color-logo)" stroke="var(--color-paper)" strokeOpacity=".4" />
      <text x="100" y="124" textAnchor="middle" fontFamily="var(--font-serif)" fontWeight="600" fontSize="68" fill="var(--color-paper)">
        R
      </text>
    </svg>
  )
}
