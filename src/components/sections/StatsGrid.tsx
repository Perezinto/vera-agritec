import Reveal from '../ui/Reveal';

type Stat = { value: string; label: string };

export default function StatsGrid({ stats, tone = 'light' }: { stats: Stat[]; tone?: 'light' | 'dark' }) {
  const light = tone === 'light';
  return (
    <div className={`grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] sm:grid-cols-3 ${stats.length === 5 ? 'lg:grid-cols-5' : ''} ${light ? 'bg-white/10 ring-1 ring-white/10' : 'bg-stone-200 ring-1 ring-stone-200'}`}>
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 80} className={`p-7 sm:p-8 ${light ? 'bg-forest-900' : 'bg-white'} ${stats.length === 5 && i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
          <p className={`display text-5xl sm:text-6xl ${light ? 'text-gold-400' : 'text-forest-800'}`}>{s.value}</p>
          <p className={`mt-3 text-sm font-medium ${light ? 'text-white/70' : 'text-stone-600'}`}>{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
