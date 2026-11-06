import { useMemo, useState } from 'react';
import { Calculator as CalcIcon, Droplets, Info, TrendingUp, Wallet } from 'lucide-react';
import { IMG } from '@/data/images';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';

const CROPS = {
  peppers: { name: 'Bell Peppers', yieldPerSqmKg: 12, pricePerKgNGN: 2000, waterSavedLitresPerSqm: 120 },
  tomatoes: { name: 'Vine Tomatoes', yieldPerSqmKg: 15, pricePerKgNGN: 1200, waterSavedLitresPerSqm: 120 },
  cucumbers: { name: 'Cucumbers', yieldPerSqmKg: 20, pricePerKgNGN: 800, waterSavedLitresPerSqm: 120 },
} as const;

type CropId = keyof typeof CROPS;
const AREAS = [100, 250, 500, 1000];

export default function Calculator() {
  const [area, setArea] = useState(250);
  const [cropId, setCropId] = useState<CropId>('peppers');
  const crop = CROPS[cropId];

  const result = useMemo(() => {
    const kg = area * crop.yieldPerSqmKg;
    return {
      tonnes: (kg / 1000).toFixed(1),
      revenue: Math.round(kg * crop.pricePerKgNGN).toLocaleString(),
      water: Math.round((area * crop.waterSavedLitresPerSqm) / 1000).toLocaleString(),
    };
  }, [area, crop]);

  return (
    <section id="calculator" className="section-y bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Section 10 — Potential Yield Calculator"
          title="Interactive Potential Yield & Revenue Calculator"
          description="Select your crop and cultivation footprint to project potential commercial yield, revenue, and water savings."
        />

        <Reveal className="mt-14 overflow-hidden rounded-[2rem] bg-forest-900 shadow-[0_40px_80px_-40px_rgba(16,48,42,0.6)]">
          <div className="grid lg:grid-cols-12">
            <div className="relative p-8 sm:p-10 lg:col-span-5">
              <img src={IMG.hydroponic} alt="Precision irrigation line serving a commercial agricultural system" className="absolute inset-0 h-full w-full object-cover opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-900/90 to-forest-800/80" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">
                  <CalcIcon className="h-4 w-4" /> Production planning tool
                </span>
                <p className="display mt-4 text-3xl text-white">Model the potential of your growing footprint.</p>

                <div className="mt-10">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">1. Select Target Crop</span>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {(Object.keys(CROPS) as CropId[]).map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setCropId(id)}
                        className={`rounded-2xl px-3 py-3.5 text-xs font-bold transition-all sm:text-sm ${cropId === id ? 'bg-gold-400 text-forest-900 shadow-lg' : 'bg-white/5 text-white ring-1 ring-white/15 hover:bg-white/10'}`}
                      >
                        {CROPS[id].name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">2. Cultivation Area Footprint</span>
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {AREAS.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setArea(a)}
                        className={`rounded-2xl py-3 text-sm font-bold transition-all ${area === a ? 'bg-white text-forest-900 shadow-lg' : 'bg-white/5 text-white ring-1 ring-white/15 hover:bg-white/10'}`}
                      >
                        {a}m²
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-white/70">Selected Footprint: <span className="font-semibold text-white">{area}m² ({(area / 10000).toFixed(2)} ha)</span></p>
                  <p className="mt-2 text-xs text-white/50">Calculated on Vera controlled environment screen house specifications with precision drip fertigation.</p>
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 sm:p-10 lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-forest-500">Potential Commercial Output</span>
              <h3 className="display mt-3 text-2xl text-forest-900 sm:text-3xl">Projected Estimates ({area}m² {crop.name})</h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
                  <span className="flex items-center gap-2 text-xs font-bold text-forest-500"><TrendingUp className="h-4 w-4" />Annual Yield</span>
                  <p className="display mt-4 text-4xl text-forest-900">{result.tonnes}</p>
                  <span className="mt-1 block text-xs text-stone-500">Tonnes / Year</span>
                </div>
                <div className="rounded-3xl bg-forest-800 p-6 text-white">
                  <span className="flex items-center gap-2 text-xs font-bold text-gold-300"><Wallet className="h-4 w-4" />Projected Revenue</span>
                  <p className="display mt-4 text-3xl lg:text-[2rem]">₦{result.revenue}</p>
                  <span className="mt-1 block text-xs text-white/60">NGN / Year Est.</span>
                </div>
                <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
                  <span className="flex items-center gap-2 text-xs font-bold text-forest-500"><Droplets className="h-4 w-4" />Water Saved</span>
                  <p className="display mt-4 text-4xl text-forest-900">{result.water}</p>
                  <span className="mt-1 block text-xs text-stone-500">litres / Year Est.</span>
                </div>
              </div>

              <p className="mt-6 flex gap-3 rounded-2xl bg-gold-50 p-4 text-xs leading-relaxed text-stone-600 ring-1 ring-gold-200">
                <Info className="h-4 w-4 shrink-0 text-gold-600" />
                Notice: Results are commercial projections and estimates based on standard Good Agricultural Practices (GAP). Actual yields depend on local water quality, management adherence, and solar insolation.
              </p>

              <Button href="/contact" variant="forest" className="mt-8">Request Custom Project Feasibility</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
