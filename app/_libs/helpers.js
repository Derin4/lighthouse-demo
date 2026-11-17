// Helpers live outside components so the React Compiler purity lint stays quiet.
export function refCode(prefix = "REF") {
  return `${prefix}-${Math.floor(10000 + Math.random() * 90000)}`;
}

export function money(n) {
  return `$${Number(n).toLocaleString("en-CA")}`;
}

// Weekly gatherings: [weekday 0=Sun, hour, minute, name]
const GATHERINGS = [
  [0, 9, 0, "Morning service"],
  [0, 11, 0, "Family service"],
  [3, 19, 0, "Wednesday prayer"],
];
const DAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Next gathering from now, in the visitor's local time. Kept outside components for the purity lint.
export function nextGathering() {
  const now = new Date();
  let best = null;
  for (const [d, h, m, name] of GATHERINGS) {
    const t = new Date(now);
    t.setHours(h, m, 0, 0);
    t.setDate(t.getDate() + ((d - now.getDay() + 7) % 7));
    if (t <= now) t.setDate(t.getDate() + 7);
    if (!best || t < best.at) best = { at: t, name, day: DAY[d], h, m };
  }
  const ms = best.at - now;
  const mins = Math.floor(ms / 60000);
  return {
    name: best.name,
    day: best.day,
    time: `${((best.h + 11) % 12) + 1}:${String(best.m).padStart(2, "0")} ${best.h < 12 ? "AM" : "PM"}`,
    d: Math.floor(mins / 1440),
    h: Math.floor((mins % 1440) / 60),
    m: mins % 60,
  };
}
