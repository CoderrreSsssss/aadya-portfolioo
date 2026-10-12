import { about, site } from '../data/portfolioData'
import Reveal from './Reveal'
import Img from './Img'
export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <Reveal className="md:col-span-5">
          <Img src={site.images.about} alt="Portrait of Aadya Singh" style={{ aspectRatio: '3/4' }} className="w-full bg-panel object-cover ring-1 ring-line md:sticky md:top-24" />
        </Reveal>
        <Reveal className="md:col-span-7 md:pl-8">
          <h2 className="grad-text font-serif text-5xl md:text-7xl">{about.heading}</h2>
          <p className="mt-8 max-w-xl font-serif text-2xl leading-relaxed">{about.intro}</p>
          <dl className="mt-12 max-w-xl divide-y divide-line border-y border-line">
            {about.paragraphs.map(p => (
              <div key={p.title} className="grid gap-2 py-6 sm:grid-cols-3">
                <dt className="font-serif text-xl">{p.title}</dt>
                <dd className="text-mute leading-relaxed sm:col-span-2">{p.text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
