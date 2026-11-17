"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ministries } from "../_libs/data";
import { site } from "../_libs/site";
import NextGathering from "./NextGathering";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState("main");
  const [scrolled, setScrolled] = useState(false);
  const [shut, setShut] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    setPanel("main");
  }

  const link = (l) =>
    `relative py-2 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 ${pathname.startsWith(l.href) ? "text-ink after:scale-x-100" : ""}`;

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur transition-shadow ${scrolled ? "shadow-[0_6px_20px_-12px_rgba(0,0,0,.25)]" : ""}`}
    >
      <div
        className={`hidden bg-night text-xs tracking-wide text-paper/80 transition-[height,opacity] duration-300 lg:block ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"}`}
      >
        <div className='mx-auto flex h-9 max-w-6xl items-center justify-between px-6'>
          <span className='flex items-center gap-2'>
            <span
              className='flicker h-2 w-2 rounded-full bg-gold'
              aria-hidden='true'
            />
            <NextGathering />
          </span>
          <span>{site.contact[0]}</span>
        </div>
      </div>
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ${scrolled ? "py-3" : "py-4"}`}
      >
        <Link
          href='/'
          onClick={close}
          className='flex items-center gap-3 font-display text-xl tracking-tight text-ink'
        >
          <svg viewBox='0 0 32 32' className='h-9 w-9' aria-hidden='true'>
            <rect width='32' height='32' rx='6' fill='#25274f' />
            <path d='M14 7h4l1.5 12h-7z' fill='#fbf8f2' />
            <rect x='13' y='19' width='6' height='5' fill='#fbf8f2' />
            <path
              d='M9 12 4 10M23 12l5-2M9 16l-5 1M23 16l5 1'
              stroke='#d9a441'
              strokeWidth='1.6'
              strokeLinecap='round'
            />
          </svg>
          <span className='leading-none'>
            Lighthouse Road
            <span className='block font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-deep'>
              Fellowship
            </span>
          </span>
        </Link>
        <nav
          className='hidden items-center gap-8 font-body text-sm text-ink/70 lg:flex'
          aria-label='Main'
        >
          {site.nav.map((l) =>
            l.href === "/ministries" ? (
              <div
                key={l.href}
                className='group relative'
                data-shut={shut}
                onMouseLeave={() => setShut(false)}
              >
                <Link
                  href={l.href}
                  onClick={() => setShut(true)}
                  className={`flex items-center gap-1 ${link(l)}`}
                >
                  {l.label}
                  <svg
                    viewBox='0 0 12 12'
                    className='h-3 w-3 fill-none stroke-current stroke-2 transition-transform group-hover:rotate-180'
                    aria-hidden='true'
                  >
                    <path d='M2 4.5 6 8l4-3.5' />
                  </svg>
                </Link>
                <div className='mega absolute left-1/2 top-full w-[30rem] -translate-x-1/2 pt-4'>
                  <div className='border border-line bg-white p-3 shadow-[0_30px_60px_-30px_rgba(37,39,79,.5)]'>
                    <div className='grid grid-cols-2 gap-1'>
                      {ministries.map((m) => (
                        <Link
                          key={m.id}
                          href='/ministries'
                          onClick={() => setShut(true)}
                          className='p-3 transition-colors hover:bg-tint'
                        >
                          <span className='block font-display text-base text-ink'>
                            {m.name}
                          </span>
                          <span className='text-xs uppercase tracking-widest text-accent-deep'>
                            {m.ages}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className='mt-2 grid grid-cols-2 gap-1 border-t border-line pt-2 text-center text-sm font-medium text-accent-deep'>
                      <Link
                        href='/ministries'
                        onClick={() => setShut(true)}
                        className='p-2 hover:bg-tint'
                      >
                        Find a small group
                      </Link>
                      <Link
                        href='/contact'
                        onClick={() => setShut(true)}
                        className='p-2 hover:bg-tint'
                      >
                        Serve on a team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} className={link(l)}>
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <div className='flex items-center gap-3'>
          <Link
            href={site.cta.href}
            className='hidden bg-deep px-5 py-2.5 font-body text-sm font-medium text-paper transition-colors hover:bg-accent sm:inline-block'
          >
            {site.cta.label}
          </Link>
          <button
            type='button'
            onClick={() => (open ? close() : setOpen(true))}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className='flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden'
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile: folder-style menu with a Back link */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-paper transition-[height] duration-500 lg:hidden ${open ? "h-[100dvh]" : "h-0"}`}
        inert={!open}
      >
        <div className='relative h-full'>
          <nav
            className={`absolute inset-0 overflow-y-auto px-6 pb-28 pt-6 transition-transform duration-500 ${panel === "min" ? "-translate-x-full" : ""}`}
            aria-label='Mobile'
            inert={panel === "min"}
          >
            {[{ href: "/", label: "Home" }, ...site.nav].map((l) =>
              l.href === "/ministries" ? (
                <button
                  key={l.href}
                  type='button'
                  onClick={() => setPanel("min")}
                  className='flex w-full items-center justify-between border-b border-line py-4 font-display text-2xl text-ink'
                >
                  {l.label}
                  <span className='text-accent' aria-hidden='true'>
                    →
                  </span>
                </button>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className='block border-b border-line py-4 font-display text-2xl text-ink'
                >
                  {l.label}
                </Link>
              ),
            )}
            <Link
              href={site.cta.href}
              onClick={close}
              className='mt-6 block bg-deep py-4 text-center font-body text-sm font-medium text-paper'
            >
              {site.cta.label}
            </Link>
          </nav>
          <nav
            className={`absolute inset-0 overflow-y-auto bg-paper px-6 pb-28 pt-6 transition-transform duration-500 ${panel === "min" ? "" : "translate-x-full"}`}
            aria-label='Ministries'
            inert={panel !== "min"}
          >
            <button
              type='button'
              onClick={() => setPanel("main")}
              className='mb-2 py-2 font-body text-sm font-medium text-accent-deep'
            >
              ← Back
            </button>
            {ministries.map((m) => (
              <Link
                key={m.id}
                href='/ministries'
                onClick={close}
                className='block border-b border-line py-4'
              >
                <span className='block font-display text-2xl text-ink'>
                  {m.name}
                </span>
                <span className='text-xs uppercase tracking-widest text-accent-deep'>
                  {m.ages}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
