import Photo from '../components/Photo'
import { images } from '../data/images'

const day = [
  { time: 'Morning', text: 'Espresso, breakfast and a quiet corner before the day starts.' },
  { time: 'Afternoon', text: 'A cold drink, a slice of cake, a meeting that runs long.' },
  { time: 'Evening', text: 'Dinner with friends while the lights go low.' },
]

export default function About() {
  return (
    <section id="about" className="on-light py-20 sm:py-28">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-10">
        <Photo
          {...images.interior}
          sizes="(min-width: 768px) 55vw, 100vw"
          className="aspect-[4/3] md:col-span-6 md:aspect-auto md:min-h-[34rem] lg:col-span-7"
        />

        <div className="flex flex-col md:col-span-6 lg:col-span-5 lg:pl-8">
          <h2 className="text-title">A coffee shop and a kitchen, under one roof.</h2>
          <div className="mt-6 max-w-[34rem] space-y-4 text-bean">
            <p>
              Rio is somewhere to slow down. Come in for a cup on your way to work, or settle in with a book and
              order lunch when you get hungry.
            </p>
            <p>
              The room is warm and unhurried, the coffee is made with care, and the food is the kind you come back
              for. Bring friends, bring work, or just bring an appetite.
            </p>
          </div>
          <Photo
            {...images.friends}
            sizes="(min-width: 768px) 20vw, 60vw"
            className="mt-10 aspect-[3/2] w-3/4 self-end md:mt-auto md:w-2/3"
          />
        </div>
      </div>

      <dl className="wrap mt-16 grid gap-px sm:mt-20 sm:grid-cols-3">
        {day.map((d) => (
          <div key={d.time} className="border-t border-espresso/20 pt-5 pb-6 sm:pr-8">
            <dt className="font-serif text-2xl">{d.time}</dt>
            <dd className="mt-2 max-w-[28ch] text-[0.9375rem] text-bean">{d.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
