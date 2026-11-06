import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

const FAQS = [
  {
    q: 'What is soilless / hydroponic farming?',
    a: 'Soilless or hydroponic farming is a method of cultivating crops using inert, pathogen-free substrates (such as cocopeat and perlite) and recirculating nutrient-enriched water instead of field soil. It eliminates soil-borne nematodes, reduces water consumption by up to 90%, and provides precise root-zone nutrition for faster crop growth and higher yields.',
  },
  {
    q: 'How long does it take to install a screen house?',
    a: 'A standard 250m² screen house is typically installed within 3–4 weeks of site preparation, including frame assembly, netting, and irrigation hookup. Larger or multi-bay projects scale proportionally.',
  },
  {
    q: 'Do you provide training for new growers?',
    a: 'Yes. Vera AgriTech delivers practical field training and capacity development for commercial growers, youth, and women — covering crop management, fertigation, pest exclusion, and harvest handling.',
  },
  {
    q: 'What crops can I grow in a Vera screen house?',
    a: 'Vine tomatoes, sweet peppers, cucumbers, and leafy greens are the primary commercial crops. Systems are adaptable to other high-value vegetables depending on local market demand.',
  },
  {
    q: 'Is produce offtake guaranteed?',
    a: 'Through Vera Veg Stores, qualifying growers can access contract offtake connecting farm output to premium retail, consumer, and institutional markets, subject to quality and GAP standards.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-primary-900">{q}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-stone-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="bg-stone-50 py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">Frequently Asked Questions</span>
            <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
              Clear answers to the most common questions regarding Vera AgriTech's infrastructure, systems, machinery, and training.
            </h2>
            <div className="mt-8 overflow-hidden rounded-3xl shadow-lg">
              <div className="relative">
                <img src={IMG.tomatoGreenhouse} alt="Vera protected vegetable cultivation system" className="h-64 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">
                  Clear decisions begin with better systems.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-900/5 lg:p-9">
            {FAQS.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
