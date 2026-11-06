import { useReveal } from '../hooks/useReveal';

export default function Mission() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-primary-900 py-20 lg:py-28">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
      <div ref={ref} className={`relative mx-auto max-w-4xl px-5 text-center reveal ${visible ? 'is-visible' : ''}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">Growing Smarter. Feeding the Future.</span>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Vera AgriTech transforms traditional farming into a productive, climate-smart and commercially viable enterprise.
        </h2>

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-400">Our Stated Mission</span>
          <p className="mt-4 text-lg leading-relaxed text-stone-100/90">
            Strengthen food security and improve livelihoods across African cities through localized engineering, farmer empowerment, and resilient urban food systems.
          </p>
        </div>
      </div>
    </section>
  );
}
