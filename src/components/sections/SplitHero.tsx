import type { ReactNode } from 'react';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  alt: string;
  caption: { label: string; text: string };
  children?: ReactNode;
};

export default function SplitHero({ eyebrow, title, description, image, alt, caption, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="display mt-6 text-balance text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-7 max-w-xl text-lg text-white/75">{description}</p>
          </Reveal>
          {children && <Reveal delay={150} className="mt-10">{children}</Reveal>}
        </div>
        <Reveal delay={120} className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img src={image} alt={alt} className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-300">{caption.label}</span>
              <p className="mt-1 text-lg font-semibold">{caption.text}</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 -z-0 hidden h-32 w-32 rounded-full bg-gold-400/20 blur-2xl lg:block" />
        </Reveal>
      </div>
    </section>
  );
}
