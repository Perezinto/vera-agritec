import { Check, Globe2, Handshake } from 'lucide-react';
import Layout from '@/components/Layout';
import CTABand from '@/components/sections/CTABand';
import SplitHero from '@/components/sections/SplitHero';
import StatsGrid from '@/components/sections/StatsGrid';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import { IMG } from '@/data/images';

const STEPS = [
  { title: 'Climate-Smart Infrastructure', desc: 'Localized structures and controlled growing environments.' },
  { title: 'Precision Agronomy & Input Supply', desc: 'Practical crop, nutrient and water management.' },
  { title: 'Guaranteed Offtake — Vera Veg Stores', desc: 'A route from farm output to local markets.' },
];

export default function AboutPage() {
  return (
    <Layout>
      <SplitHero
        eyebrow="About Vera AgriTech"
        title={<>Growing smarter.<span className="block text-gold-400">Feeding the future.</span></>}
        description="Vera AgriTech transforms traditional farming into a highly productive, climate-smart and commercially viable enterprise."
        image={IMG.pepperCrates}
        alt="Vera AgriTech greenhouse design"
        caption={{ label: 'The Vera approach', text: 'Engineering, agronomy and markets' }}
      >
        <div className="grid max-w-md grid-cols-2 gap-6 border-t border-white/15 pt-6">
          <div><p className="font-bold text-gold-300">Infrastructure</p><p className="mt-1 text-sm text-white/60">Built for local conditions</p></div>
          <div><p className="font-bold text-gold-300">Production</p><p className="mt-1 text-sm text-white/60">Designed for the market</p></div>
        </div>
      </SplitHero>

      <section className="section-y bg-cream">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4"><Eyebrow>Why Vera exists</Eyebrow></Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="display text-balance text-4xl text-forest-900 sm:text-6xl">Changing Africa's agricultural narrative.</h2>
              <p className="mt-6 max-w-2xl text-lg text-stone-600">Vera believes Africa's agricultural challenge is linked to limited access to innovation, technology and profitable markets.</p>
            </Reveal>
            <Reveal delay={120} className="mt-12 grid items-center gap-8 rounded-[2rem] bg-white p-6 ring-1 ring-stone-200 sm:grid-cols-2 sm:p-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-600">Our mission</span>
                <p className="display mt-3 text-2xl text-forest-900 sm:text-3xl">Strengthen food security and improve livelihoods across African cities.</p>
              </div>
              <img src={IMG.fieldTeam} alt="Agricultural team working in a field" className="aspect-[4/3] w-full rounded-3xl object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="display mt-5 text-5xl text-forest-900 sm:text-6xl">A farm is a system.</h2>
            <p className="mt-6 text-lg text-stone-600">Vera connects infrastructure, agronomic discipline and market access so production works beyond the first harvest.</p>
          </Reveal>
          <div className="relative lg:col-span-7">
            <div className="absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-gold-400 via-forest-300 to-forest-800" />
            <div className="space-y-6">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} delay={i * 100} className="relative flex gap-6">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-800 text-sm font-bold text-gold-300 ring-8 ring-white">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1 rounded-3xl bg-cream p-6 ring-1 ring-stone-200">
                    <h3 className="display text-2xl text-forest-900">{s.title}</h3>
                    <p className="mt-2 text-stone-600">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[2rem]">
            <img src={IMG.tomatoProduction3} alt="Tomato production inside a controlled growing environment" className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]" />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Our innovation</Eyebrow>
            <h2 className="display mt-5 text-balance text-5xl text-forest-900 sm:text-6xl">Designed for African growing conditions.</h2>
            <p className="mt-6 text-lg text-stone-600">Vera uses localized, high-durability steel arched screen houses, hydroponics and controlled agricultural systems.</p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[{ v: '90%', l: 'Water efficiency' }, { v: '3x–5x', l: 'Higher yields' }].map((x) => (
                <div key={x.l} className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
                  <p className="display text-5xl text-forest-800">{x.v}</p>
                  <p className="mt-2 text-sm text-stone-600">{x.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-forest-900">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow tone="light">Impact</Eyebrow>
            <h2 className="display mt-5 text-4xl text-white sm:text-5xl">What the work makes possible.</h2>
          </Reveal>
          <div className="mt-12">
            <StatsGrid
              stats={[
                { value: '125+', label: 'Screen houses installed' },
                { value: '500+', label: 'Farmers trained' },
                { value: '300+', label: 'Youth and women empowered' },
                { value: '90%', label: 'Water savings achieved' },
                { value: '3x–5x', label: 'Higher crop yields' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-gold-100 to-gold-300">
              <img src={IMG.founder} alt="Dr. Nurudeen S. Lawal" className="aspect-[4/5] w-full object-cover object-top" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="display mt-5 text-5xl text-forest-900 sm:text-6xl">Meet the founder.</h2>
            <h3 className="mt-4 text-xl font-bold text-forest-500">Dr. Nurudeen S. Lawal</h3>
            <p className="mt-6 text-lg text-stone-600">An agripreneur and agricultural engineer, Dr. Lawal is a COREN-registered engineer with 20+ years' experience and a Ph.D. in Agricultural and Environmental Engineering from the University of Ibadan.</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {['Irrigation engineering', 'Soil and water conservation', 'Soilless crop nutrition'].map((t) => (
                <li key={t} className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-forest-900 ring-1 ring-stone-200"><Check className="h-4 w-4 text-forest-500" />{t}</li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-gold-400 pl-4 text-sm text-stone-500">His stated experience includes managing World Bank-funded projects.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Alignment</Eyebrow>
            <h2 className="display mt-5 text-5xl text-forest-900 sm:text-6xl">Built with a wider purpose.</h2>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {['IFAD', 'SMEDAN', 'Sterling Bank', 'Rex Insurance'].map((p) => (
                <div key={p} className="flex items-center gap-3 rounded-2xl bg-white px-5 py-5 ring-1 ring-stone-200">
                  <Handshake className="h-5 w-5 text-gold-600" />
                  <span className="display text-xl text-forest-900">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="rounded-[2rem] bg-forest-900 p-8 text-white lg:col-span-5 lg:self-end">
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300"><Globe2 className="h-4 w-4" />SDG alignment</span>
            <ul className="mt-6 divide-y divide-white/10">
              {['SDG 2 — Zero Hunger', 'SDG 13 — Climate Action', 'SDG 15 — Life on Land'].map((s) => (
                <li key={s} className="display py-5 text-2xl">{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABand eyebrow="Start with the right conversation" title="Partner with Vera." cta="Contact Us" />
    </Layout>
  );
}
