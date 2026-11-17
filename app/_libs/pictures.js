// Photos live in /public. A slot with no entry shows a placeholder.
// hero 16:9 · welcome 3:4 (arched crop) · sermon 16:9 · events 21:9 (wide banner) · ministry-* 4:3
export const PICTURES = {
  hero: "/lr-hero.webp",
  welcome: "/lr-welcome.webp",
  sermon: "/lr-sermon.webp",
  events: "/lr-events.webp",
  "ministry-kids": "/lr-ministry-kids.webp",
  "ministry-youth": "/lr-ministry-youth.webp",
  "ministry-music": "/lr-ministry-music.webp",
  "ministry-outreach": "/lr-ministry-outreach.webp",
  "ministry-groups": "/lr-ministry-groups.webp",
  "ministry-care": "/lr-ministry-care.webp",
};

// Hero background clips, played in order and looped. Short (5 to 10 s), muted, 16:9, under about 3 MB each.
// Put the .mp4 files in /public. Comment out any line whose file is not there yet. With none listed
// (or none loading) the hero falls back to the still photo above.
// Optional: add poster: "/lr-hero-1.webp" to show a still frame while the clip loads.
export const HERO_CLIPS = [
  { src: "/lr-hero-1.mp4" },
  { src: "/lr-hero-2.mp4" },
  { src: "/lr-hero-3.mp4" },
];
