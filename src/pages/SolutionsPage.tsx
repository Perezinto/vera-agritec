import { Check, Droplets, Bug, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';
import CTABand from '@/components/sections/CTABand';
import SplitHero from '@/components/sections/SplitHero';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { IMG } from '@/data/images';

const SYSTEMS = [
  { img: IMG.frameInstall2, label: 'Protected structures', title: 'Screen Houses & Greenhouses', desc: 'Cost-effective, wind-resistant steel arched screen houses and plastic greenhouse tunnels tailored to tropical conditions.', cta: 'Get a Quote for Your Screen House' },
  { img: IMG.hydroponic, label: 'Controlled growing', title: 'Hydroponic & Soilless Kits', desc: 'Grow bags, coco peat substrates, nutrient dosing rigs and vertical farming structures for controlled production.', cta: 'Get a Quote for Hydroponic Setup' },
  { img: IMG.irrigation, label: 'Water and equipment', title: 'Irrigation & Farm Machinery', desc: 'Drip irrigation, fertilizer dosing injectors, gravity feeding tanks and crop irrigation control systems.', cta: 'Request Machinery Catalog' },
];

const SERVICES = [
  { img: IMG.tomatoProduction3, title: 'Commercial Crop Production', desc: 'Consistent, year-round harvest of premium high-value crops.', cta: 'Inquire About Produce Buyback' },
  { img: IMG.fieldTeam, title: 'Training & Technical Advisory', desc: 'Practical training for cooperatives, youth, women and urban individuals.', cta: 'View Training' },
  { img: IMG.renderSitePlan, title: 'Agribusiness Consulting', desc: 'Feasibility audits, farm layout mapping, investment planning and crop productivity advisory.', cta: 'Book a Consultation' },
];

const NUMBERS = [
  { icon: Droplets, value: '90%', title: 'Water savings', desc: 'Closed-loop and precision irrigation systems use water more intelligently.' },
  { icon: TrendingUp, value: '3x–5x', title: 'Higher yields', desc: 'Controlled environments support more productive crop systems.' },
  { icon: Bug, value: '95%', title: 'Pest/insect protection', desc: 'Protected structures create a stronger barrier around the crop.' },
];

export default function SolutionsPage() {
  return (
    <Layout>
      <SplitHero
        eyebrow="Solutions"
        title="Our climate-smart agricultural solutions."
        description="Commercial crop production, structural engineering, equipment supplies and agricultural capacity training."
        image={IMG.tomatoCrates}
        alt="Vera AgriTech protected agricultural structure"
        caption={{ label: 'From site to harvest', text: 'One connected production system' }}
      >
        <div className="flex flex-wrap gap-2">
          {['Structures', 'Water systems', 'Crop production'].map((t) => (
            <span key={t} className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80 ring-1 ring-white/20">{t}</span>
          ))}
        </div>
      </SplitHero>

      <section className="section-y bg-cream">
        <div className="container-x">
          <SectionHeader eyebrow="Products and systems" title="Infrastructure that earns its place on the farm." />
          <div className="mt-16 space-y-20 lg:space-y-28">
            {SYSTEMS.map((s, i) => (
              <div key={s.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal className={`relative lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
                  <div className="overflow-hidden rounded-[2rem]">
                    <img src={s.img} alt={s.title} className="aspect-[16/11] w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-forest-900 backdrop-blur">{s.label}</span>
                </Reveal>
                <Reveal delay={120} className="lg:col-span-5">
                  <span className="display text-8xl text-gold-400/60">{String(i + 1).padStart(2, '0')}</span>
                  <p className="-mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-forest-500">{String(i + 1).padStart(2, '0')} / System</p>
                  <h3 className="display mt-3 text-4xl text-forest-900 sm:text-5xl">{s.title}</h3>
                  <p className="mt-5 text-lg text-stone-600">{s.desc}</p>
                  <Button href="/contact" variant="outline-dark" className="mt-8">{s.cta}</Button>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeader eyebrow="Services" title="Support from first plan to daily operation." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="group flex flex-col overflow-hidden rounded-[2rem] bg-cream ring-1 ring-stone-200">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-5 top-5 rounded-full bg-forest-900/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur">Vera service</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="display text-2xl text-forest-900">{s.title}</h3>
                  <p className="mt-3 flex-1 text-stone-600">{s.desc}</p>
                  <Button href="/contact" variant="link" className="mt-6 self-start">{s.cta}</Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Commercial crop production</Eyebrow>
            <h2 className="display mt-5 text-balance text-5xl text-forest-900 sm:text-6xl">A better route from growing to market.</h2>
            <p className="mt-6 text-lg text-stone-600">Vera currently identifies bell peppers, vine tomatoes, cucumbers and culinary herbs as premium high-value crops for consistent, year-round harvest.</p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {['Bell peppers', 'Vine tomatoes', 'Cucumbers', 'Culinary herbs'].map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 font-semibold text-forest-900 ring-1 ring-stone-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest-800 text-white"><Check className="h-3.5 w-3.5" /></span>{c}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="forest" className="mt-10">Inquire About Produce Buyback</Button>
          </Reveal>
          <Reveal delay={120} className="relative overflow-hidden rounded-[2rem]">
            <img src={IMG.tomatoProduction3} alt="High-value tomato crop production" className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-6 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">Premium crop production</span>
          </Reveal>
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-forest-900 text-white">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <SectionHeader tone="light" eyebrow="Why Vera" title="The numbers behind the system." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-3">
            {NUMBERS.map((n, i) => (
              <Reveal key={n.title} delay={i * 100} className="bg-forest-900 p-8 sm:p-10">
                <n.icon className="h-6 w-6 text-gold-400" />
                <p className="display mt-6 text-6xl text-gold-400 sm:text-7xl">{n.value}</p>
                <h3 className="mt-4 text-lg font-bold">{n.title}</h3>
                <p className="mt-2 text-sm text-white/65">{n.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 sm:pt-24 bg-cream" />
      <CTABand eyebrow="Build the right system" title="Build a climate-smart production system." cta="Request a Quote" />
    </Layout>
  );
}
