"use client";

import { useEffect, useState } from "react";
import { nextGathering } from "../_libs/helpers";

// variant "bar": one line for the top bar. "card": countdown tiles for the hero.
export default function NextGathering({ variant = "bar" }) {
  const [n, setN] = useState(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setN(nextGathering()));
    const id = setInterval(() => setN(nextGathering()), 30000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);

  if (variant === "bar") {
    return (
      <span>
        {n
          ? `Next: ${n.name}, ${n.day} ${n.time} · in ${n.d ? n.d + "d " : ""}${n.h}h ${n.m}m`
          : "Sundays 9:00 and 11:00 AM"}
      </span>
    );
  }
  return (
    <div className='mb-4 border-b border-line pb-4'>
      <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-accent-deep'>
        {n ? `Next up: ${n.name}` : "Join us this Sunday"}
      </p>
      <div className='flex gap-3' aria-live='off'>
        {[
          ["days", n ? n.d : "–"],
          ["hrs", n ? n.h : "–"],
          ["min", n ? n.m : "–"],
        ].map(([l, v]) => (
          <div
            key={l}
            className='min-w-14 bg-deep px-3 py-2 text-center text-paper'
          >
            <span className='block font-display text-2xl leading-none'>
              {v}
            </span>
            <span className='text-[10px] uppercase tracking-widest text-gold'>
              {l}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
