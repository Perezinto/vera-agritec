import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

export default function Infrastructure() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative -mt-12 z-20 bg-stone-50 py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <span className="section-eyebrow">Infrastructure built for more resilient production</span>
            <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
              Transforming conventional open-field uncertainty into predictable year-round commercial output.
            </h2>
            <p className="mt-5 text-stone-600">
              Vera AgriTech engineers localized, high-durability steel arched screen houses and closed-loop
              growing systems that shield crops from climate volatility — converting uncertain seasonal
              harvests into stable, commercial-grade production cycles.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Localized manufacturing and on-site assembly reduces capital cost',
                'Engineered for tropical longevity with galvanized steel frames',
                'Anti-insect netting cuts pesticide reliance and crop loss',
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-sm text-stone-700">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={IMG.infrastructure}
                alt="Vera AgriTech high-yield tomato cultivation inside protected screen house"
                className="h-[440px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur-sm">
                <span className="text-sm font-semibold text-primary-900">Protected Cultivation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
