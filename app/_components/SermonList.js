"use client";

import { useState } from "react";
import { SERIES, sermons } from "../_libs/data";

export default function SermonList() {
  const [series, setSeries] = useState("All");
  const [playing, setPlaying] = useState(null);
  const shown =
    series === "All" ? sermons : sermons.filter((s) => s.series === series);
  return (
    <div>
      <div className='no-scrollbar -mx-6 mb-8 flex gap-2 overflow-x-auto px-6'>
        {SERIES.map((s) => (
          <button
            key={s}
            type='button'
            onClick={() => {
              setSeries(s);
              setPlaying(null);
            }}
            aria-pressed={series === s}
            className={`shrink-0 border px-4 py-2 font-body text-sm transition-colors ${series === s ? "pop border-deep bg-deep text-paper" : "border-line hover:border-deep"}`}
          >
            {s}
          </button>
        ))}
      </div>
      <div key={series} className='divide-y divide-line border-y border-line'>
        {shown.map((s, i) => (
          <article
            key={s.id}
            className='step-in flex items-center gap-5 py-5'
            style={{ "--d": `${i * 50}ms` }}
          >
            <button
              type='button'
              onClick={() => setPlaying(playing === s.id ? null : s.id)}
              aria-label={
                playing === s.id ? `Pause ${s.title}` : `Play ${s.title}`
              }
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-paper transition-colors ${playing === s.id ? "bg-accent" : "bg-deep hover:bg-accent"}`}
            >
              {playing === s.id ? "❚❚" : "▶"}
            </button>
            <div className='min-w-0 flex-1'>
              <p className='font-body text-xs uppercase tracking-widest text-accent-deep'>
                {s.series} · {s.ref}
              </p>
              <h2 className='truncate text-xl'>{s.title}</h2>
              <p className='font-body text-sm text-muted'>
                {s.speaker} · {s.date} · {s.len}
              </p>
              {playing === s.id ? (
                <div className='mt-2 h-1 bg-line'>
                  <div className='playing h-full bg-accent' />
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <p className='mt-4 font-body text-xs text-muted'>
        Demo player: no audio is attached.
      </p>
    </div>
  );
}
