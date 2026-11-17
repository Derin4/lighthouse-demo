# Lighthouse Road Fellowship

A demo website for a fictional church, built by [MyClickAid](https://myclickaid.com) for its portfolio gallery.

**Live demo:** https://lighthouse-demo.derin-obasa.workers.dev/

> **A fictional church.** Lighthouse Road Fellowship, its people, sermons, events, ministries and giving details are made up for this demo. No forms send data and no payments are taken.

## What it shows

- **Video hero:** a carousel of short, muted clips with a pause button. It skips any clip that fails to load and falls back to a still photo.
- **Home page:** a welcome section, the next gathering, a featured sermon, upcoming events and a newsletter signup.
- **Plan a visit:** what to expect, times and a visit form.
- **Sermons:** a browsable list of messages with a featured sermon.
- **Events:** an event list with a wide photo banner.
- **Ministries:** kids, youth, music, outreach, small groups and care.
- **Give:** a demo giving form.
- **Contact:** tabbed contact forms with a demo confirmation.
- **Details:** scroll animations, reduced-motion support and keyboard-friendly menus.

## Built with

- [Next.js](https://nextjs.org/) (App Router, JavaScript, static export)
- [Tailwind CSS](https://tailwindcss.com/) v4
- Fonts: Bodoni Moda and Jost, self-hosted with `@fontsource`
- Hosted on Cloudflare

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To create the production build (a static site in the `out` folder):

```bash
npm run build
```

## Project structure

```
app/
  _components/   Header, Footer, HeroCarousel, SermonList, EventList, GiveForm, ...
  _libs/         site.js, data.js, pictures.js, helpers.js
  _styles/       globals.css
  visit/  sermons/  events/  ministries/  give/  contact/
public/          Photos (.webp) and hero clips (.mp4)
```

## Photos and hero clips

Everything is optional. A photo slot shows a placeholder until you add an image, and the hero shows a still photo if no clips are listed. Put the files in `public/` and register them in `app/_libs/pictures.js`.

| Slot          | File                                                                         | Ratio |
| ------------- | ---------------------------------------------------------------------------- | ----- |
| Hero still    | `lr-hero.webp`                                                               | 16:9  |
| Welcome       | `lr-welcome.webp`                                                            | 3:4   |
| Sermon        | `lr-sermon.webp`                                                             | 16:9  |
| Events banner | `lr-events.webp`                                                             | 21:9  |
| Ministries    | `lr-ministry-kids.webp`, `-youth`, `-music`, `-outreach`, `-groups`, `-care` | 4:3   |
| Hero clips    | `lr-hero-1.mp4` to `lr-hero-3.mp4`                                           | 16:9  |

Keep each clip muted, around 720p and under about 3 MB so the page stays fast.

## Deployment

The site is a static export (`output: "export"` in `next.config.mjs`) and deploys to Cloudflare from this repository. Every push to the main branch rebuilds and redeploys it.

## About MyClickAid

MyClickAid is a bespoke web design studio. This site is one of several demo projects that show what a custom-designed website can look like for different kinds of organizations.
