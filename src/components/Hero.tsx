import { ArrowRight, Play } from 'lucide-react';
import { IMG } from '../data/images';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Vera AgriTech climate-smart screen house facility"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-950/45 to-primary-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Africa's Urban Agriculture Infrastructure Company
            </span>
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Building Climate-Smart Food Production Systems Across African Cities
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg text-stone-100/90">
            Vera AgriTech builds sustainable, climate-resilient farming systems using screen houses, hydroponics and smart drip irrigation.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/solutions"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-primary-950 shadow-lg transition-all hover:bg-accent-400 hover:shadow-xl"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/model"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
            >
              <Play className="h-4 w-4 fill-current" />
              How Vera Works
            </a>
          </div>

          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { n: '3x–5x', l: 'Higher Yields' },
              { n: '90%', l: 'Water Efficiency' },
              { n: 'Year-Round', l: 'Production' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-extrabold text-white sm:text-3xl">{s.n}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
