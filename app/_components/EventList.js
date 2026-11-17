"use client";

import { useState } from "react";
import { EVENT_CATS, events } from "../_libs/data";

export default function EventList() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? events : events.filter((e) => e.cat === cat);
  return (
    <div>
      <div className='no-scrollbar -mx-6 mb-8 flex gap-2 overflow-x-auto px-6'>
        {EVENT_CATS.map((c) => (
          <button
            key={c}
            type='button'
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`shrink-0 border px-4 py-2 font-body text-sm transition-colors ${cat === c ? "pop border-deep bg-deep text-paper" : "border-line hover:border-deep"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div key={cat} className='grid gap-4 sm:grid-cols-2'>
        {shown.map((e, i) => (
          <div
            key={e.title}
            className='step-in lift flex gap-5 border border-line bg-white p-5'
            style={{ "--d": `${i * 50}ms` }}
          >
            <span className='w-16 shrink-0 self-start border-t-2 border-gold bg-deep py-2.5 text-center text-paper'>
              <span className='block font-display text-3xl leading-none'>
                {e.day}
              </span>
              <span className='font-body text-xs uppercase tracking-widest text-gold'>
                {e.mon}
              </span>
            </span>
            <div>
              <p className='font-body text-xs uppercase tracking-widest text-accent-deep'>
                {e.cat}
              </p>
              <h2 className='mb-1 text-xl'>{e.title}</h2>
              <p className='font-body text-sm text-muted'>
                {e.when}
                <br />
                {e.where}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
