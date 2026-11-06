import type { ReactNode } from 'react';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  alt: string;
  children?: ReactNode;
  aside?: ReactNode;
};

export default function ImageHero({ eyebrow, title, description, image, alt, children, aside }: Props) {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-white">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full animate-slow-zoom object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/70 to-forest-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
      <div className="container-x relative flex min-h-[78svh] flex-col justify-end gap-10 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="display mt-6 text-balance text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-7 max-w-xl text-lg text-white/80 sm:text-xl">{description}</p>
          </Reveal>
          {children && <Reveal delay={150} className="mt-10">{children}</Reveal>}
        </div>
        {aside && <Reveal delay={250}>{aside}</Reveal>}
      </div>
    </section>
  );
}
