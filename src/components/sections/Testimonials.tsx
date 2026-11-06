import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Quote, Star } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';

const TESTIMONIALS = [
  {
    name: 'Chinedu Okafor',
    location: 'Abuja, Nigeria',
    quote: "Living in Abuja, I was deeply worried about food security and the safety of traditional farming due to rural banditry. Vera AgriTech's urban screen house model allowed me to start a thriving, pest-free tomato farm right in my backyard where I feel completely safe.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Amina Bello',
    location: 'Kano, Nigeria',
    quote: "The crop safety and traceability aspect has been a game-changer for my business. Thanks to Vera AgriTech's training, my high-end supermarket clients can scan a code and see exactly when and how my bell peppers were harvested. They pay a premium for that peace of mind!",
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Oluwaseun Ajayi',
    location: 'Ibadan, Nigeria',
    quote: 'As a retiree in Ibadan, I wanted a secure agribusiness investment. The Vera AgriTech triple security model—especially the guaranteed produce offtake—eliminated all my market worries. I grow the crops, they handle the sales, and my retirement income is steady.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Kofi Mensah',
    location: 'Accra, Ghana',
    quote: "I used to think greenhouse farming was too expensive, but Vera's affordable hydroponic setups and input supplies made it accessible. Producing clean, chemical-free leafy greens inside the city has turned my small urban plot into a highly profitable venture.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Chioma Nwachukwu',
    location: 'Port Harcourt, Nigeria',
    quote: 'Being part of a geographic farming cluster has given me immense support. We peer-guarantee each other, share experiences, and safely supply clean vegetables directly to urban centers without worrying about the dangerous rural supply chains.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = TESTIMONIALS[index];
  const go = (i: number) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="testimonials" className="section-y bg-cream">
      <div className="container-x">
        <SectionHeader
          eyebrow="Field notes / customer voices"
          title="Built around growers, trusted in the field."
          description="Real perspectives from growers and agribusiness operators using Vera AgriTech systems."
        />

        <Reveal className="mt-14">
          <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="grid overflow-hidden rounded-[2rem] bg-forest-900 lg:grid-cols-12">
            <div className="relative min-h-[340px] lg:col-span-5">
              {TESTIMONIALS.map((item, i) => (
                <img
                  key={item.name}
                  src={item.avatar}
                  alt={`${item.name}, Vera AgriTech customer`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">Customer field note</span>
                  <p className="display mt-1 text-2xl text-white sm:text-3xl">{t.name}</p>
                </div>
                <span className="rounded-full bg-black/30 px-3 py-1.5 text-xs font-bold text-white/80 ring-1 ring-white/20 backdrop-blur">
                  {String(index + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="relative flex flex-col justify-between gap-10 p-8 text-white sm:p-12 lg:col-span-7 lg:p-14">
              <Quote className="absolute right-8 top-8 h-24 w-24 text-white/5" />
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-0.5 text-gold-400">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Verified voice</span>
                </div>
                <blockquote key={t.name} className="display mt-8 animate-fade-in text-2xl leading-snug text-white/95 sm:text-[1.75rem]">
                  “{t.quote}”
                </blockquote>
              </div>
              <div className="flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold">{t.name}</h3>
                  <span className="mt-1 flex items-center gap-1 text-sm font-semibold text-gold-300"><MapPin className="h-3.5 w-3.5" /> {t.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => go(index - 1)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/20 transition-colors hover:bg-gold-400 hover:text-forest-900 hover:ring-gold-400"><ChevronLeft className="h-5 w-5" /></button>
                  <button type="button" onClick={() => go(index + 1)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400 text-forest-900 transition-colors hover:bg-gold-300"><ChevronRight className="h-5 w-5" /></button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
