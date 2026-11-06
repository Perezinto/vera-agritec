import { Home, Droplets, Tractor, Sprout, GraduationCap, Compass } from 'lucide-react';
import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

const SOLUTIONS = [
  { icon: Home, title: 'Screen Houses & Greenhouses', desc: 'Localized steel-arched protective structures with anti-insect netting for year-round vegetable yields.', img: IMG.greenhouseCovered },
  { icon: Droplets, title: 'Hydroponic & Soilless Kits', desc: 'Closed-loop Dutch bucket and NFT channel systems delivering up to 90% water savings.', img: IMG.hydroponic },
  { icon: Tractor, title: 'Irrigation & Farm Machinery', desc: 'Automated drip fertigation manifolds, solar borehole pumping, and tractor-drawn bed shapers.', img: IMG.fieldCrops },
  { icon: Sprout, title: 'Commercial Crop Production', desc: 'High-density production of vine tomatoes, sweet peppers, and cucumbers to international GAP standards.', img: IMG.tomatoGreenhouse },
  { icon: GraduationCap, title: 'Training & Technical Advisory', desc: 'Practical field training and capacity development for commercial growers, youth, and women.', img: IMG.fieldTeam },
  { icon: Compass, title: 'Agribusiness Consulting', desc: 'Turnkey agricultural engineering feasibility, site layout design, and operational advisory.', img: IMG.aerialPlan },
];

export default function Solutions() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="solutions" className="bg-stone-50 py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">What we deliver</span>
          <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
            Comprehensive Climate-Smart Solutions
          </h2>
          <p className="mt-4 text-stone-600">
            From physical infrastructure to operational agronomy and commercial offtake, explore our integrated offerings.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-900/5 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-primary-700" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-primary-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-stone-600">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
