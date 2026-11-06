import { TrendingUp, Droplets, ShieldCheck, Leaf } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const STATS = [
  { icon: TrendingUp, title: '3x–5x Higher Yields', desc: 'Higher crop yields in a controlled environment.' },
  { icon: Droplets, title: '90% Water Efficiency', desc: 'Efficient water delivery through smart irrigation.' },
  { icon: ShieldCheck, title: 'Reduced Crop Risks', desc: 'Protection from changing growing conditions.' },
  { icon: Leaf, title: 'Reduced Pesticide Reliance', desc: 'Less reliance on pesticides through protected cultivation.' },
];

export default function ControlledEnvironments() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-950 to-primary-900 py-20 lg:py-28">
      <div ref={ref} className={`relative mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">Controlled Environments</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Vera AgriTech develops localized, high-durability steel arched screen houses for climate-smart, year-round vegetable production.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:border-accent-400/40 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-primary-950">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-300">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
