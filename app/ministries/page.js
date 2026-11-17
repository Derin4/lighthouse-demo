import Link from "next/link";
import Photo from "../_components/Photo";
import Reveal from "../_components/Reveal";
import SectionHead from "../_components/SectionHead";
import { ministries } from "../_libs/data";

export const metadata = { title: "Ministries" };

export default function MinistriesPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <SectionHead
        eyebrow='Ministries'
        title='Ways to belong and to serve'
        text='Every ministry is led by volunteers and open to newcomers.'
      />
      <div className='grid gap-8 sm:grid-cols-2'>
        {ministries.map((m, i) => (
          <Reveal
            key={m.id}
            delay={(i % 2) * 80}
            className='lift grid gap-5 border border-line bg-white sm:grid-cols-[10rem_1fr]'
          >
            <Photo
              id={`ministry-${m.id}`}
              label={m.name}
              swatch={["#f1ebe0", "#25274f"]}
              sizes='160px'
              className='aspect-[4/3] w-full sm:aspect-auto sm:h-full'
            />
            <div className='p-5'>
              <p className='font-body text-xs uppercase tracking-widest text-accent-deep'>
                {m.ages}
              </p>
              <h2 className='mb-2 text-xl'>{m.name}</h2>
              <p className='mb-3 font-body text-sm text-muted'>{m.text}</p>
              <Link
                href='/contact'
                className='font-body text-sm font-medium text-accent-deep underline underline-offset-4'
              >
                Ask about this
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
