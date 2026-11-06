import { Home, FlaskConical, Store, ArrowRight } from 'lucide-react';
import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

const PILLARS = [
  {
    icon: Home,
    title: 'Climate-Smart Infrastructure',
    desc: 'Localized screen houses and hydroponics for year-round yields.',
    img: IMG.greenhouseCovered,
  },
  {
    icon: FlaskConical,
    title: 'Precision Agronomy & Input Supply',
    desc: 'Training, disease-resistant seeds and nutrient formulations.',
    img: IMG.pepperGreenhouse,
  },
  {
    icon: Store,
    title: 'Guaranteed Offtake — Vera Veg Stores',
    desc: 'Connecting farm output to premium retail, consumer and institutional markets.',
    img: IMG.pepperHarvest,
  },
];

export default function IntegratedModel() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="model" className="bg-stone-50 py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">A closed-loop commercial system</span>
          <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
            Vera's 3-Part Integrated Model
          </h2>
          <p className="mt-4 text-stone-600">
            A closed-loop commercial system connecting protective engineering, agronomic discipline, and secured market distribution.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-900/5 transition-all hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-primary-700" />
                  </div>
                  <span className="absolute right-5 top-5 text-5xl font-extrabold text-white/25">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{p.desc}</p>
                </div>
                {i < PILLARS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-700 shadow-md">
                      <ArrowRight className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
