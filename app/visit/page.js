import Link from "next/link";
import SectionHead from "../_components/SectionHead";
import NextGathering from "../_components/NextGathering";
import Reveal from "../_components/Reveal";
import { faqs, firstSunday, services } from "../_libs/data";

export const metadata = { title: "Plan a visit" };

export default function VisitPage() {
  return (
    <div className='mx-auto max-w-5xl px-6 py-16'>
      <SectionHead
        eyebrow='Plan a visit'
        title='What to expect on Sunday'
        text='You will be greeted at the door, shown where to go, and left alone if you would like to be.'
      />
      <div className='mb-16 grid gap-6 sm:grid-cols-3'>
        {services.map((s, i) => (
          <Reveal
            key={s.time}
            delay={i * 80}
            className='lift border-t-2 border-gold border-x border-b border-x-line border-b-line bg-white p-6'
          >
            <p className='font-display text-3xl text-accent-deep'>{s.time}</p>
            <h2 className='mb-1 mt-1 text-xl'>{s.name}</h2>
            <p className='font-body text-sm text-muted'>{s.text}</p>
          </Reveal>
        ))}
      </div>
      <div className='mb-16 bg-tint p-6 sm:p-8'>
        <NextGathering variant='card' />
        <ol className='grid gap-6 sm:grid-cols-3'>
          {firstSunday.map(([t, d], i) => (
            <li key={t} className='flex gap-4'>
              <span className='font-display text-4xl leading-none text-gold'>
                {i + 1}
              </span>
              <span>
                <span className='block font-display text-xl'>{t}</span>
                <span className='font-body text-sm text-muted'>{d}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className='grid gap-12 md:grid-cols-[1.4fr_1fr]'>
        <div>
          <h2 className='mb-5 text-2xl'>Questions</h2>
          <div className='divide-y divide-line border-y border-line'>
            {faqs.map((f) => (
              <details key={f.q} className='group py-4'>
                <summary className='flex cursor-pointer list-none items-center justify-between font-body font-medium'>
                  {f.q}
                  <span
                    className='text-accent transition-transform group-open:rotate-45'
                    aria-hidden='true'
                  >
                    +
                  </span>
                </summary>
                <p className='mt-2 font-body text-sm text-muted'>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className='self-start border-t-4 border-gold bg-tint p-7 font-body text-sm'>
          <h2 className='mb-3 font-display text-2xl'>Find us</h2>
          <p>210 Lighthouse Road</p>
          <p className='mb-4 text-muted'>Free parking behind the building.</p>
          <Link
            href='/contact'
            className='font-medium text-accent-deep underline underline-offset-4'
          >
            Let us know you are coming
          </Link>
        </div>
      </div>
    </div>
  );
}
