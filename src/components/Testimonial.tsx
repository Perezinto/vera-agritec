import { Quote } from 'lucide-react';
import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

export default function Testimonial() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-primary-900 py-20 lg:py-28">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div ref={ref} className={`relative mx-auto max-w-4xl px-5 text-center reveal ${visible ? 'is-visible' : ''}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">Built around growers, trusted in the field</span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Real perspectives from growers and agribusiness operators using Vera AgriTech systems.
        </h2>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-12">
          <Quote className="mx-auto h-10 w-10 text-accent-400" />
          <p className="mt-6 text-xl leading-relaxed text-stone-100/90 lg:text-2xl">
            "Living in Abuja, I was deeply worried about food security and the safety of traditional farming due to rural banditry. Vera AgriTech's urban screen house model allowed me to start a thriving, pest-free tomato farm right in my backyard where I feel completely safe."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={IMG.portrait}
              alt="Chinedu Okafor"
              className="h-14 w-14 rounded-full object-cover ring-2 ring-accent-400/50"
            />
            <div className="text-left">
              <div className="font-bold text-white">Chinedu Okafor</div>
              <div className="text-sm text-stone-400">Urban Grower, Abuja</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
