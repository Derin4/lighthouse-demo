import Link from "next/link";
import FeaturedSermon from "./_components/FeaturedSermon";
import HeroCarousel from "./_components/HeroCarousel";
import NextGathering from "./_components/NextGathering";
import Photo from "./_components/Photo";
import Reveal from "./_components/Reveal";
import SectionHead from "./_components/SectionHead";
import { events, firstSunday, ministries, services, verse } from "./_libs/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden bg-night'>
        <HeroCarousel />
        <div className='absolute inset-0 bg-gradient-to-t from-night/95 via-night/55 to-night/25' />
        <div className='relative mx-auto grid min-h-[78vh] max-w-6xl items-end gap-8 px-6 pb-12 pt-24 text-paper md:grid-cols-[1.3fr_1fr]'>
          <div>
            <p className='fade-up mb-3 flex items-center gap-3 font-body text-xs font-semibold tracking-[0.28em] text-gold'>
              <span
                className='flicker h-2 w-2 rounded-full bg-gold'
                aria-hidden='true'
              />
              LIGHTHOUSE ROAD FELLOWSHIP
            </p>
            <h1
              className='fade-up text-5xl leading-[1.05] sm:text-6xl lg:text-7xl'
              style={{ "--d": "100ms" }}
            >
              A light on the road, a home for the weary.
            </h1>
            <p
              className='fade-up mt-4 max-w-md font-body text-lg text-paper/80'
              style={{ "--d": "200ms" }}
            >
              Join us this Sunday. Come as you are, bring your questions, and
              stay for coffee.
            </p>
            <div
              className='fade-up mt-7 flex flex-wrap gap-4'
              style={{ "--d": "300ms" }}
            >
              <Link
                href='/visit'
                className='bg-gold px-7 py-3.5 font-body text-sm font-semibold text-night transition-all hover:-translate-y-0.5 hover:bg-paper'
              >
                Plan your visit
              </Link>
              <Link
                href='/sermons'
                className='border border-paper/50 px-7 py-3.5 font-body text-sm font-semibold transition-colors hover:bg-paper hover:text-night'
              >
                Watch a message
              </Link>
            </div>
          </div>
          <div
            className='fade-up border-t-4 border-gold bg-paper p-6 text-ink'
            style={{ "--d": "300ms" }}
          >
            <NextGathering variant='card' />
            <p className='mb-3 font-body text-xs font-semibold uppercase tracking-widest text-accent-deep'>
              Gather with us
            </p>
            <ul className='space-y-2'>
              {services.map((s) => (
                <li
                  key={s.time}
                  className='flex items-baseline justify-between gap-4 border-b border-line pb-2 last:border-0'
                >
                  <span className='font-display text-xl'>{s.time}</span>
                  <span className='font-body text-sm text-muted'>{s.name}</span>
                </li>
              ))}
            </ul>
            <Link
              href='/visit'
              className='mt-4 inline-block font-body text-sm font-medium text-accent-deep underline underline-offset-4'
            >
              Plan your visit
            </Link>
          </div>
        </div>
      </section>

      {/* Verse */}
      <section className='relative overflow-hidden bg-deep text-paper'>
        <div
          className='rays pointer-events-none absolute inset-x-0 top-0 h-full origin-top'
          aria-hidden='true'
        />
        <Reveal className='relative mx-auto max-w-3xl px-6 py-16 text-center'>
          <p className='font-display text-2xl italic leading-snug sm:text-3xl'>
            &ldquo;{verse.text}&rdquo;
          </p>
          <p className='mt-4 font-body text-xs uppercase tracking-[0.28em] text-gold'>
            {verse.ref}
          </p>
        </Reveal>
      </section>

      {/* Welcome */}
      <section className='mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_1.2fr]'>
        <Reveal>
          <Photo
            id='welcome'
            label='People greeting each other after a service'
            swatch={["#f1ebe0", "#a8730f"]}
            sizes='(min-width:768px) 40vw, 100vw'
            className='aspect-[3/4] w-full max-w-md rounded-t-full'
          />
        </Reveal>
        <Reveal delay={100}>
          <SectionHead
            eyebrow='Welcome'
            title='A church for the whole neighbourhood'
          />
          <p className='mb-4 font-body leading-relaxed text-muted'>
            Lighthouse Road is a Bible-centred church that believes faith is
            lived out on ordinary days. We sing, we pray, we eat together, and
            we look after the people next door.
          </p>
          <p className='mb-8 font-body leading-relaxed text-muted'>
            Whether you have gone all your life or have not been in years, there
            is a seat for you.
          </p>
          <ol className='grid gap-5 border-t border-line pt-6 sm:grid-cols-3'>
            {firstSunday.map(([t, d], i) => (
              <li key={t}>
                <span className='font-display text-3xl text-gold'>
                  0{i + 1}
                </span>
                <span className='block font-display text-lg'>{t}</span>
                <span className='font-body text-xs text-muted'>{d}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Sermon + events */}
      <section className='bg-tint'>
        <div className='mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr]'>
          <FeaturedSermon />
          <div>
            <h2 className='mb-4 text-2xl'>Coming up</h2>
            <ul className='divide-y divide-line border-y border-line'>
              {events.slice(0, 4).map((e) => (
                <li
                  key={e.title}
                  className='group flex items-center gap-4 py-3'
                >
                  <span className='w-14 shrink-0 border-t-2 border-gold bg-deep py-2 text-center text-paper transition-transform group-hover:-translate-y-0.5'>
                    <span className='block font-display text-2xl leading-none'>
                      {e.day}
                    </span>
                    <span className='font-body text-[11px] uppercase tracking-widest text-gold'>
                      {e.mon}
                    </span>
                  </span>
                  <span>
                    <span className='block font-body font-medium'>
                      {e.title}
                    </span>
                    <span className='font-body text-sm text-muted'>
                      {e.when} · {e.where}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href='/events'
              className='mt-5 inline-block font-body text-sm font-semibold text-accent-deep underline underline-offset-4'
            >
              All events →
            </Link>
          </div>
        </div>
      </section>

      {/* Events banner */}
      <section className='relative overflow-hidden'>
        <Photo
          id='events'
          label='People gathered at a church event'
          swatch={["#5b5f9e", "#171833"]}
          sizes='100vw'
          className='absolute! inset-0 h-full w-full'
        />
        <div className='absolute inset-0 bg-night/65' />
        <div className='relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-6 py-16 text-paper sm:flex-row sm:items-center'>
          <h2 className='max-w-md text-3xl leading-tight sm:text-4xl'>
            There is always something on at Lighthouse Road.
          </h2>
          <Link
            href='/events'
            className='bg-gold px-7 py-3.5 font-body text-sm font-semibold text-night transition-colors hover:bg-paper'
          >
            See upcoming events
          </Link>
        </div>
      </section>

      {/* Ministries */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <SectionHead eyebrow='Get involved' title='Find your place' />
        <div className='grid gap-px border border-line bg-line sm:grid-cols-3'>
          {ministries.slice(0, 6).map((m, i) => (
            <Reveal
              key={m.id}
              delay={i * 60}
              className='group bg-paper p-7 transition-colors hover:bg-deep hover:text-paper'
            >
              <p className='mb-1 font-body text-xs uppercase tracking-widest text-accent-deep transition-colors group-hover:text-gold'>
                {m.ages}
              </p>
              <h3 className='mb-2 text-xl'>{m.name}</h3>
              <p className='font-body text-sm text-muted transition-colors group-hover:text-paper/75'>
                {m.text}
              </p>
            </Reveal>
          ))}
        </div>
        <div className='mt-8 flex flex-wrap gap-6 text-sm font-semibold'>
          <Link
            href='/ministries'
            className='text-accent-deep underline underline-offset-4'
          >
            Find a small group →
          </Link>
          <Link
            href='/contact'
            className='text-accent-deep underline underline-offset-4'
          >
            Serve on a team →
          </Link>
        </div>
      </section>

      {/* Prayer */}
      <section className='bg-deep text-paper'>
        <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center'>
          <h2 className='max-w-md text-3xl leading-tight'>
            Need prayer? We would be honoured to pray with you.
          </h2>
          <Link
            href='/contact'
            className='bg-gold px-7 py-3.5 font-body text-sm font-medium text-deep transition-colors hover:bg-paper'
          >
            Share a prayer request
          </Link>
        </div>
      </section>

      {/* Give */}
      <section className='mx-auto max-w-3xl px-6 py-16 text-center'>
        <p className='mb-3 font-display text-3xl'>
          Generosity is part of worship.
        </p>
        <p className='mb-6 font-body text-muted'>
          Your gifts keep the lights on and the pantry stocked.
        </p>
        <Link
          href='/give'
          className='inline-block border border-deep px-7 py-3.5 font-body text-sm font-semibold transition-colors hover:bg-deep hover:text-paper'
        >
          Give online
        </Link>
      </section>
    </>
  );
}
