import Photo from '../components/Photo'
import { images } from '../data/images'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="bg-espresso text-ivory">
      <div className="wrap grid gap-8 pt-4 pb-14 md:grid-cols-12 md:items-center md:gap-10 md:py-16 lg:py-20">
        <Photo
          {...images.pourOver}
          eager
          sizes="(min-width: 768px) 58vw, 100vw"
          className="-mx-5 aspect-[4/3] animate-[fade_0.9s_var(--ease-out-soft)_both] sm:mx-0 md:order-2 md:col-span-7 md:aspect-auto md:h-[min(76svh,42rem)]"
          imgClassName="object-[62%_50%] saturate-[0.85]"
        />

        <div className="animate-[enter_0.8s_0.15s_var(--ease-out-soft)_both] md:order-1 md:col-span-5">
          <p className="font-serif text-lg text-crema italic">{site.fullName}</p>
          <h1 className="mt-4 text-display tracking-[-0.015em]">{site.tagline}</h1>
          <p className="mt-6 max-w-[30ch] text-lg text-ivory/80">
            {site.intro} Coffee in the morning, a proper meal later on, and a table for as long as you like.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href="#menu" className="btn btn-ivory">See the menu</a>
            <a href="#visit" className="link text-[0.9375rem] font-semibold">Plan your visit</a>
          </div>
        </div>
      </div>
    </section>
  )
}
