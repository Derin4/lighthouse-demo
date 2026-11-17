"use client";

import Link from "next/link";
import { useState } from "react";
import { sermons } from "../_libs/data";
import Photo from "./Photo";

export default function FeaturedSermon() {
  const latest = sermons[0];
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      <button
        type='button'
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? `Pause ${latest.title}` : `Play ${latest.title}`}
        className='group relative mb-5 block w-full overflow-hidden text-left'
      >
        <Photo
          id='sermon'
          label={`${latest.series}: ${latest.title}`}
          swatch={["#5b5f9e", "#171833"]}
          sizes='(min-width:768px) 45vw, 100vw'
          className='aspect-video w-full transition-transform duration-700 group-hover:scale-[1.03]'
        />
        <span className='absolute inset-0 bg-night/30' aria-hidden='true' />
        <span className='absolute inset-0 grid place-items-center'>
          <span
            className={`grid h-16 w-16 place-items-center rounded-full bg-gold text-night shadow-xl transition-transform group-hover:scale-110 ${playing ? "pop" : ""}`}
          >
            {playing ? "❚❚" : "▶"}
          </span>
        </span>
        <span className='absolute inset-x-0 bottom-0 h-1 bg-paper/20'>
          {playing ? <span className='playing block h-full bg-gold' /> : null}
        </span>
      </button>
      <p className='mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep'>
        Latest message
      </p>
      <h2 className='mb-2 text-3xl leading-tight'>{latest.title}</h2>
      <p className='mb-1 font-body text-muted'>
        {latest.series} · {latest.ref}
      </p>
      <p className='mb-5 font-body text-sm text-muted'>
        {latest.speaker} · {latest.date} · {latest.len}
      </p>
      <Link
        href='/sermons'
        className='inline-block bg-deep px-7 py-3.5 font-body text-sm font-medium text-paper transition-colors hover:bg-accent'
      >
        More messages
      </Link>
      <p className='mt-3 font-body text-xs text-muted'>
        Demo player: no audio is attached.
      </p>
    </div>
  );
}
