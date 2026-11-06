import { Check, X, ArrowRight } from 'lucide-react';
import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

const ROWS = [
  { label: 'Yield per hectare', open: 'Low & variable', vera: '3x–5x higher' },
  { label: 'Water usage', open: 'High — flood/furrow', vera: 'Up to 90% savings' },
  { label: 'Pest exposure', open: 'Fully exposed', vera: 'Anti-insect netting' },
  { label: 'Production cycle', open: 'Seasonal only', vera: 'Year-round' },
  { label: 'Crop loss risk', open: 'High', vera: 'Greatly reduced' },
  { label: 'Market linkage', open: 'Informal / ad-hoc', vera: 'Guaranteed offtake' },
];

export default function Comparison() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">The difference</span>
          <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
            Traditional Open-Field vs. Vera Smart Agriculture
          </h2>
          <p className="mt-4 text-stone-600">
            A side-by-side comparison illustrating why controlled environment infrastructure delivers superior commercial economics.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img src={IMG.greenhouseCovered} alt="Protected agricultural infrastructure" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">
              From exposed fields to engineered growing environments.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-stone-200 shadow-sm">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-stone-50">
              <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-stone-500">Metric</div>
              <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-warm-700">Open-Field</div>
              <div className="bg-primary-700 px-4 py-4 text-xs font-semibold uppercase tracking-wide text-white">Vera Smart</div>
            </div>
            {ROWS.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-[1.4fr_1fr_1fr] items-center ${i % 2 ? 'bg-stone-50/50' : 'bg-white'}`}
              >
                <div className="px-4 py-3.5 text-sm font-medium text-stone-800">{r.label}</div>
                <div className="flex items-center gap-1.5 px-4 py-3.5 text-sm text-stone-500">
                  <X className="h-4 w-4 shrink-0 text-warm-500" />
                  {r.open}
                </div>
                <div className="flex items-center gap-1.5 bg-primary-50/60 px-4 py-3.5 text-sm font-medium text-primary-800">
                  <Check className="h-4 w-4 shrink-0 text-primary-600" />
                  {r.vera}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/calculator"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900"
          >
            See the numbers in the calculator
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
