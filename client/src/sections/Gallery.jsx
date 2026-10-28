import { useEffect, useRef, useState } from 'react'
import Photo, { photoSrc } from '../components/Photo'
import { ChevronIcon, CloseIcon } from '../components/Icons'
import { gallery } from '../data/images'
import { instagram } from '../data/site'

const layout = [
  'col-span-2 aspect-[3/2] md:col-span-8 md:row-span-2',
  'aspect-[4/5] md:col-span-4 md:row-span-2',
  'aspect-[4/5] md:col-span-4 md:row-span-2',
  'col-span-2 aspect-[3/2] md:col-span-8 md:row-span-2',
  'aspect-square md:col-span-5 md:row-span-2',
  'aspect-square md:col-span-7 md:row-span-2',
]

export default function Gallery() {
  const dialogRef = useRef(null)
  const [index, setIndex] = useState(null)
  const current = index === null ? null : gallery[index]

  useEffect(() => {
    const d = dialogRef.current
    if (current && !d.open) d.showModal()
  }, [current])

  const step = (dir) => setIndex((i) => (i + dir + gallery.length) % gallery.length)
  const close = () => dialogRef.current?.close()

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  return (
    <section id="gallery" className="on-light py-20 sm:py-28">
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-title md:col-span-6">Good coffee, good food, good company.</h2>
          <p className="text-[0.9375rem] text-bean md:col-span-5 md:col-start-8">
            These photographs set the mood. For pictures of Rio itself, follow{' '}
            <a href={instagram.url} target="_blank" rel="noreferrer" className="link text-espresso">
              {instagram.handle}
            </a>{' '}
            on Instagram.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:mt-14 md:grid-cols-12 md:auto-rows-[clamp(8.5rem,13vw,12rem)]">
          {gallery.map((g, i) => (
            <li key={g.name} className={`md:aspect-auto ${layout[i % layout.length]}`}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block h-full w-full overflow-hidden"
                aria-label={`Enlarge photo: ${g.alt}`}
              >
                <Photo
                  {...g}
                  sizes="(min-width: 768px) 60vw, 50vw"
                  className="h-full"
                  imgClassName="transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setTimeout(() => setIndex(null), 250)}
        onClick={(e) => e.target === dialogRef.current && close()}
        onKeyDown={onKeyDown}
        aria-label="Photo viewer"
        className="lightbox m-auto h-full max-h-none w-full max-w-none bg-espresso-deep/95 p-0 text-ivory"
      >
        {current && (
          <div className="grid h-full grid-rows-[auto_1fr_auto]" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <span className="text-sm text-ivory/70 tabular-nums">
                {index + 1} of {gallery.length}
              </span>
              <button type="button" onClick={close} className="-mr-2 grid h-12 w-12 place-items-center" aria-label="Close photo viewer">
                <CloseIcon />
              </button>
            </div>
            <figure className="flex min-h-0 flex-col items-center justify-center px-5 sm:px-20" onClick={(e) => e.target === e.currentTarget && close()}>
              <img
                key={current.name}
                src={photoSrc(current.name)}
                alt={current.alt}
                className="max-h-full min-h-0 w-auto max-w-full animate-[fade_0.3s_both] object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-ivory/70">{current.alt}</figcaption>
            </figure>
            <div className="flex justify-center gap-2 py-5">
              <button type="button" onClick={() => step(-1)} className="grid h-12 w-12 place-items-center border border-ivory/25 hover:border-ivory/70" aria-label="Previous photo">
                <ChevronIcon dir="left" />
              </button>
              <button type="button" onClick={() => step(1)} className="grid h-12 w-12 place-items-center border border-ivory/25 hover:border-ivory/70" aria-label="Next photo">
                <ChevronIcon />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
