import { useState } from 'react';
import { Plus } from 'lucide-react';
import { IMG } from '@/data/images';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';

const FAQS = [
  {
    q: 'What is soilless/hydroponic farming?',
    a: 'Soilless or hydroponic farming is a method of cultivating crops using inert, pathogen-free substrates (such as cocopeat and perlite) and recirculating nutrient-enriched water instead of field soil. It eliminates soil-borne nematodes, reduces water consumption by up to 90%, and provides precise root-zone nutrition for faster crop growth and higher yields.',
  },
  {
    q: 'Why are screen houses preferred over traditional farming?',
    a: 'Screen houses use hot-dip galvanized steel arches and high-tensile 40–50 mesh anti-insect netting. Unlike open fields, screen houses exclude destructive pests like whiteflies and Tuta absoluta, reduce solar scorch with diffused shade, and maintain natural airflow in tropical African climates. This enables continuous year-round vegetable production with up to 80% less pesticide expenditure.',
  },
  {
    q: 'Does Vera Agritech supply farm machinery?',
    a: 'Yes. Vera AgriTech supplies, installs, and commissions appropriate agricultural machinery and precision irrigation systems. Our inventory includes automated drip fertigation manifolds, solar-powered submersible borehole pumps, disc filtration systems, tractor-drawn bed shapers, and plastic mulch layers tailored for commercial African farmlands.',
  },
  {
    q: 'How can I register for technical training?',
    a: "You can register directly through our website by submitting an enquiry on the contact form below or clicking 'Join Training Waitlist'. We offer hands-on practical masterclasses in hydroponics, screen house maintenance, fertigation management, and commercial farm operations, with dedicated tracks for commercial growers, youth, and women in agribusiness.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Section 13 — Frequently Asked Questions"
          title="Frequently Asked Questions"
          description="Clear answers to the most common questions regarding Vera AgriTech's infrastructure, systems, machinery, and training."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="relative hidden min-h-[520px] overflow-hidden rounded-[2rem] lg:col-span-4 lg:block">
            <img src={IMG.tomatoProduction1} alt="Vera protected vegetable cultivation system" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
            <div className="absolute inset-x-7 bottom-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">Field intelligence</span>
              <p className="display mt-3 text-2xl text-white">Clear decisions begin with better systems.</p>
            </div>
          </Reveal>

          <div className="divide-y divide-stone-200 border-y border-stone-200 lg:col-span-8">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 60}>
                  <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-7 text-left">
                    <span className="flex items-baseline gap-5">
                      <span className="text-xs font-bold text-gold-600">{String(i + 1).padStart(2, '0')}</span>
                      <span className="display text-xl text-forest-900 sm:text-2xl">{item.q}</span>
                    </span>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 bg-forest-800 text-white' : 'bg-cream text-forest-800 ring-1 ring-stone-200'}`}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-8 pl-10 text-base leading-relaxed text-stone-600">{item.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
