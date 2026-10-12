import { site } from '../data/portfolioData'
import Reveal from './Reveal'
export default function Contact() {
  const rows = [
    ['Email', site.email && `mailto:${site.email}`, site.email],
    ['Instagram', site.instagram, site.instagram.replace(/^https?:\/\/(www\.)?/, '')],
    [site.societyName, site.society, site.society.replace(/^https?:\/\/(www\.)?/, '')],
  ]
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="grad-text font-serif text-5xl md:text-8xl">Let's Connect</h2>
          <p className="mt-5 max-w-lg font-serif text-xl text-mute">Open to creative collaborations, campus projects, and new perspectives.</p>
        </Reveal>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {rows.map(([label, href, text]) => (
            <li key={label} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="font-serif text-2xl">{label}</span>
              {href ? <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="break-all underline underline-offset-4">{text}</a>
                : <span className="text-mute">To be added</span>}
            </li>
          ))}
        </ul>
        {site.email && <a href={`mailto:${site.email}`} className="mt-10 inline-block grad-bg px-7 py-3 text-sm font-medium text-white transition hover:brightness-110">Email {site.name.split(' ')[0]}</a>}
      </div>
    </section>
  )
}
