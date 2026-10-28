import { useState } from 'react'

export const photoSrc = (name, width = 1600) => `/images/${name}-${width}.webp`

export default function Photo({ name, alt, sizes = '100vw', className = '', imgClassName = '', eager = false }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-bean/25 ${className}`}>
      {!failed && (
        <img
          src={photoSrc(name, 800)}
          srcSet={`${photoSrc(name, 800)} 800w, ${photoSrc(name, 1600)} 1600w`}
          sizes={sizes}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}
