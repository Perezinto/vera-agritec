import { useMemo, useState } from 'react';
import { Sprout, Droplets, Banknote, Gauge } from 'lucide-react';
import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

type CropKey = 'tomato' | 'pepper' | 'cucumber';

const CROPS: Record<CropKey, { label: string; pricePerKg: number; kgPerM2: number }> = {
  tomato: { label: 'Vine Tomatoes', pricePerKg: 900, kgPerM2: 18 },
  pepper: { label: 'Bell Peppers', pricePerKg: 1400, kgPerM2: 14 },
  cucumber: { label: 'Cucumbers', pricePerKg: 700, kgPerM2: 20 },
};

export default function Calculator() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [crop, setCrop] = useState<CropKey>('pepper');
  const [area, setArea] = useState(250);

  const result = useMemo(() => {
    const c = CROPS[crop];
    const yieldKg = Math.round(area * c.kgPerM2);
    const revenue = yieldKg * c.pricePerKg;
    const waterSaved = Math.round(area * 0.9 * 1000);
    return { yieldKg, revenue, waterSaved, cropLabel: c.label };
  }, [crop, area]);

  const fmt = (n: number) => n.toLocaleString('en-NG');

  return (
    <section id="calculator" className="bg-stone-50 py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Plan your farm</span>
          <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
            Interactive Potential Yield &amp; Revenue Calculator
          </h2>
          <p className="mt-4 text-stone-600">
            Select your crop and cultivation footprint to project potential commercial yield, revenue, and water savings.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img src={IMG.hydroponic} alt="Precision irrigation line serving a commercial agricultural system" className="h-full min-h-[320px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold text-white">Model the potential of your growing footprint.</h3>
              <p className="mt-2 text-sm text-stone-200">Calculated on Vera controlled environment screen house specifications with precision drip fertigation.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm lg:p-8">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-primary-900">Crop</label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {(Object.keys(CROPS) as CropKey[]).map((k) => (
                    <button
                      key={k}
                      onClick={() => setCrop(k)}
                      className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                        crop === k
                          ? 'bg-primary-700 text-white shadow-sm'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {CROPS[k].label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-primary-900">Cultivation footprint</label>
                  <span className="text-sm font-bold text-primary-700">{area} m²</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={2000}
                  step={50}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="mt-3 w-full accent-primary-700"
                />
                <div className="mt-1 flex justify-between text-xs text-stone-400">
                  <span>50 m²</span>
                  <span>2000 m²</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                Projected Estimates ({area}m² {result.cropLabel})
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary-700">
                    <Sprout className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-primary-900">{fmt(result.yieldKg)} kg</div>
                    <div className="text-xs text-stone-500">Est. yield</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-accent-600">
                    <Banknote className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-primary-900">₦{fmt(result.revenue)}</div>
                    <div className="text-xs text-stone-500">Est. revenue</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-primary-900">{fmt(result.waterSaved)} L</div>
                    <div className="text-xs text-stone-500">Water saved</div>
                  </div>
                </div>
              </div>
              <p className="mt-5 flex items-center gap-1.5 text-xs text-stone-400">
                <Gauge className="h-3.5 w-3.5" />
                Indicative model only. Actual results vary with agronomic practice and local conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
