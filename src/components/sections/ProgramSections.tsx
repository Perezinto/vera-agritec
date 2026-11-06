import { Check, Quote } from 'lucide-react';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';

type Approach = { image: string; alt: string; title: string; description: string; points: string[] };

export function ApproachSection({ image, alt, title, description, points }: Approach) {
  return (
    <section className="section-y bg-cream">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-6">
          <div className="overflow-hidden rounded-[2rem]">
            <img src={image} alt={alt} className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
          </div>
          <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-[2rem] bg-gold-400/30" />
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6 lg:pl-6">
          <Eyebrow>01 — The approach</Eyebrow>
          <h2 className="display mt-5 text-balance text-5xl text-forest-900 sm:text-6xl">{title}</h2>
          <p className="mt-6 text-lg text-stone-600">{description}</p>
          <ul className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-4 py-4 text-lg font-semibold text-forest-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest-800 text-gold-300"><Check className="h-4 w-4" /></span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

type Card = { image: string; title: string; desc: string };

export function WhatWeDoSection({ cards }: { cards: Card[] }) {
  const cols = cards.length === 2 ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4';
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeader eyebrow="02 — What we do" title="Made to be seen in the field." />
        <div className={`mt-14 grid gap-6 ${cols}`}>
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className={`group relative flex flex-col justify-end overflow-hidden rounded-[2rem] bg-forest-900 ${cards.length === 2 ? 'min-h-[460px]' : 'min-h-[420px]'}`}>
              <img src={c.image} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent" />
              <span className="absolute left-6 top-6 text-xs font-bold text-white/70">{String(i + 1).padStart(2, '0')}</span>
              <div className="relative p-7 text-white">
                <h3 className="display text-2xl sm:text-3xl">{c.title}</h3>
                <p className="mt-3 text-sm text-white/75">{c.desc}</p>
                <Button href="/contact" variant="link-light" icon="up" className="mt-5">View details</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NumbersStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-16 text-white sm:py-20">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-x relative grid gap-10 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="border-l border-gold-400/50 pl-6">
            <p className="display text-6xl text-gold-400 sm:text-7xl">{s.value}</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-white/65">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function QuoteCTA({ quote, cta }: { quote: string; cta: string }) {
  return (
    <section className="section-y bg-cream">
      <div className="container-x">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto h-12 w-12 text-gold-400" />
          <p className="display mt-8 text-balance text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">{quote}</p>
          <Button href="/contact" variant="forest" className="mt-12">{cta}</Button>
        </Reveal>
      </div>
    </section>
  );
}
