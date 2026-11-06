import { ArrowUpRight, Bug, CloudRain, Droplets, Factory, Leaf, MapPin, PackageX, Phone, ShieldCheck, ShieldOff, Sprout, TrendingUp, Unplug, Warehouse, Wrench } from 'lucide-react';
import Layout from '@/components/Layout';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Calculator from '@/components/sections/Calculator';
import FAQ from '@/components/sections/FAQ';
import ProjectGallery, { type GalleryItem } from '@/components/sections/ProjectGallery';
import StatsGrid from '@/components/sections/StatsGrid';
import Testimonials from '@/components/sections/Testimonials';
import { IMG } from '@/data/images';
import { CONTACT } from '@/data/site';

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-forest-950">
      <img src={IMG.coveredStructure} alt="Vera AgriTech climate-smart screen house facility" className="absolute inset-0 h-full w-full animate-slow-zoom object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/75 to-forest-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />

      <div className="container-x relative grid min-h-[calc(100svh-120px)] items-center gap-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <h1 className="display text-balance text-5xl leading-[1.02] text-white sm:text-6xl lg:text-[5.25rem]">
              Building Climate-Smart Food Production Systems <span className="text-gold-400">Across African Cities</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-xl text-pretty text-lg text-white/80 sm:text-xl">
              Vera AgriTech builds sustainable, climate-resilient farming systems using screen houses, hydroponics and smart drip irrigation.
            </p>
          </Reveal>
          <Reveal delay={220} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Contact Us</Button>
            <Button href="#solutions" variant="outline-light">Explore Solutions</Button>
          </Reveal>
        </div>

        <Reveal delay={320} className="lg:col-span-4 lg:justify-self-end">
          <div className="w-full max-w-sm rounded-[1.75rem] bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300">Vera system / 01</span>
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" /></span>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <span className="text-sm text-white/70">Water efficiency</span>
              <span className="display text-5xl text-white">90%</span>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15"><div className="h-full w-[90%] rounded-full bg-gradient-to-r from-gold-300 to-gold-500" /></div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[{ k: 'System', v: 'Screen house' }, { k: 'Mode', v: 'Year-round' }].map((x) => (
                <div key={x.k} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">{x.k}</span>
                  <p className="mt-1 text-sm font-semibold text-white">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PARTNERS = [
  { name: 'Sterling Bank', role: 'Agric Finance Partner' },
  { name: 'SMEDAN', role: 'Enterprise Development' },
  { name: 'Rex Insurance', role: 'Agricultural Underwriting' },
  { name: 'IFAD', role: 'Development Partner' },
];

function Partners() {
  return (
    <section id="partners" className="border-b border-stone-200 bg-white">
      <div className="container-x flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
          <ShieldCheck className="h-4 w-4 text-forest-500" /> Strategic Partners &amp; Institutional Collaborators
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PARTNERS.map((p) => (
            <div key={p.name} className="rounded-2xl bg-cream px-5 py-4 ring-1 ring-stone-200">
              <p className="display text-lg text-forest-900">{p.name}</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-stone-500">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="section-y relative overflow-hidden bg-forest-900">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <SectionHeader tone="light" eyebrow="Measured impact" title="Infrastructure built for more resilient production." aside={<ArrowUpRight className="hidden h-14 w-14 text-gold-400 lg:block" strokeWidth={1.25} />} />
        <div className="mt-14">
          <StatsGrid
            stats={[
              { value: '125+', label: 'Screen Houses Installed' },
              { value: '500+', label: 'Farmers Trained' },
              { value: '300+', label: 'Youth & Women Empowered' },
              { value: '90%', label: 'Water Savings Achieved' },
              { value: '3x–5x', label: 'Higher Crop Yields' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-y bg-cream">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <img src={IMG.tomatoProduction3} alt="Vera AgriTech high-yield tomato cultivation inside protected screen house" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <span className="inline-block rounded-full bg-gold-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-forest-900">Commercial Crop Viability</span>
              <p className="mt-3 max-w-md text-lg font-semibold text-white">Transforming conventional open-field uncertainty into predictable year-round commercial output.</p>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-[2rem] border border-gold-400/50 sm:-right-6 sm:-top-6" />
        </Reveal>

        <div className="lg:col-span-6 lg:pl-6">
          <Reveal>
            <Eyebrow>Our Positioning</Eyebrow>
            <h2 className="display mt-5 text-5xl text-forest-900 sm:text-6xl">
              Growing Smarter.
              <span className="mt-1 block text-forest-400">Feeding the Future.</span>
            </h2>
            <p className="mt-7 text-lg text-stone-600">Vera AgriTech transforms traditional farming into a productive, climate-smart and commercially viable enterprise.</p>
          </Reveal>
          <Reveal delay={120} className="mt-10 rounded-[1.75rem] bg-white p-7 ring-1 ring-stone-200">
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-600"><Sprout className="h-4 w-4" />Changing Africa's Agricultural Narrative</span>
            <h3 className="display mt-3 text-2xl text-forest-900">Our Stated Mission</h3>
            <p className="mt-3 text-stone-600">Strengthen food security and improve livelihoods across African cities through localized engineering, farmer empowerment, and resilient urban food systems.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const STAGES = [
  { img: IMG.coveredStructure, alt: 'Localized screen house infrastructure', title: 'Climate-Smart Infrastructure', desc: 'Localized screen houses and hydroponics for year-round yields.' },
  { img: IMG.pepperProduction, alt: 'Precision agronomy seedling nursery and nutrient inputs', title: 'Precision Agronomy & Input Supply', desc: 'Training, disease-resistant seeds and nutrient formulations.' },
  { img: IMG.pepperCrates, alt: 'Vera Veg Stores guaranteed premium produce offtake', title: 'Guaranteed Offtake — Vera Veg Stores', desc: 'Connecting farm output to premium retail, consumer and institutional markets.' },
];

function ValueChain() {
  return (
    <section id="value-chain" className="section-y bg-white">
      <div className="container-x">
        <SectionHeader eyebrow="Integrated Value Chain" title="Vera's 3-Part Integrated Model" description="A closed-loop commercial system connecting protective engineering, agronomic discipline, and secured market distribution." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {STAGES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="group flex flex-col overflow-hidden rounded-[2rem] bg-cream ring-1 ring-stone-200 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(16,48,42,0.45)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="display absolute left-5 top-4 text-7xl text-white/90 drop-shadow">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-600">Stage {String(i + 1).padStart(2, '0')}</span>
                <h3 className="display mt-2 text-2xl text-forest-900">{s.title}</h3>
                <p className="mt-3 flex-1 text-stone-600">{s.desc}</p>
                <Button href="/contact" variant="link" className="mt-6 self-start">Learn More</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const CHALLENGES = [
  { icon: CloudRain, title: 'Erratic Seasonal Rains', desc: 'Unpredictable rain makes open-field production harder to plan.' },
  { icon: Bug, title: 'Pest Vulnerability', desc: 'Unprotected crops remain exposed to damaging pests and disease.' },
  { icon: PackageX, title: 'Post-Harvest Losses', desc: 'Produce can be lost before it reaches urban markets.' },
  { icon: Unplug, title: 'Disconnected Supply Channels', desc: 'Farmers need stronger connections to local markets and buyers.' },
];

function Challenge() {
  return (
    <section id="challenge" className="section-y bg-cream">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>The Challenge</Eyebrow>
            <h2 className="display mt-5 text-balance text-4xl text-forest-900 sm:text-5xl">Vulnerabilities in Conventional Open-Field Farming</h2>
            <p className="mt-6 max-w-xl text-lg text-stone-600">Vera AgriTech addresses the four critical bottlenecks limiting agricultural productivity and food resilience in Nigeria:</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-700"><c.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-lg font-bold text-forest-900">{c.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={150} className="relative overflow-hidden rounded-[2rem] lg:col-span-5">
          <img src={IMG.fieldTeam} alt="Open-field crop vulnerability to extreme African seasonal climate" className="aspect-[4/5] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 text-white">
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300"><ShieldOff className="h-4 w-4" />Open-Field Fragility</span>
            <p className="mt-3 text-base text-white/90">Open-field crops remain exposed to heatwaves, flash flooding, and insect vectors, creating volatile market prices.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const INNOVATIONS = [
  { icon: TrendingUp, title: '3x–5x Higher Yields', desc: 'Higher crop yields in a controlled environment.' },
  { icon: Droplets, title: '90% Water Efficiency', desc: 'Efficient water delivery through smart irrigation.' },
  { icon: ShieldCheck, title: 'Reduced Crop Risks', desc: 'Protection from changing growing conditions.' },
  { icon: Leaf, title: 'Reduced Pesticide Reliance', desc: 'Less reliance on pesticides through protected cultivation.' },
];

function Innovation() {
  return (
    <section id="innovation" className="section-y relative overflow-hidden bg-forest-900 text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="relative lg:col-span-6">
          <img src={IMG.frameInstall2} alt="Vera AgriTech localized high-durability steel arched screen house infrastructure" className="aspect-[4/5] w-full rounded-[2rem] object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-gold-400 p-6 text-forest-950 shadow-2xl sm:left-auto sm:right-[-1.5rem] sm:w-80">
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]"><Factory className="h-4 w-4" />Engineered in Nigeria</span>
            <p className="mt-2 text-sm font-medium">Localized, high-durability steel arched screen houses engineered for tropical longevity.</p>
          </div>
        </Reveal>
        <div className="mt-6 lg:col-span-6 lg:mt-0 lg:pl-8">
          <Reveal>
            <Eyebrow tone="light">Our Innovation</Eyebrow>
            <h2 className="display mt-5 text-5xl sm:text-6xl">Controlled Environments</h2>
            <p className="mt-6 text-lg text-white/70">Vera AgriTech develops localized, high-durability steel arched screen houses for climate-smart, year-round vegetable production:</p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
            {INNOVATIONS.map((x, i) => (
              <Reveal key={x.title} delay={i * 80} className="bg-forest-900 p-6">
                <x.icon className="h-6 w-6 text-gold-400" />
                <h3 className="mt-4 text-lg font-bold">{x.title}</h3>
                <p className="mt-2 text-sm text-white/65">{x.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SOLUTIONS = [
  { img: IMG.coveredStructure, alt: 'Commercial high-wire screen house structure in African agricultural site', title: 'Screen Houses & Greenhouses', desc: 'Localized steel-arched protective structures with anti-insect netting for year-round vegetable yields.', cta: 'Get Screen House Quote' },
  { img: IMG.hydroponic, alt: 'Commercial hydroponic Dutch bucket and NFT gutter cultivation line', title: 'Hydroponic & Soilless Kits', desc: 'Closed-loop Dutch bucket and NFT channel systems delivering up to 90% water savings.', cta: 'Request Hydroponic Setup' },
  { img: IMG.maizeBean1, alt: 'Precision drip irrigation and agricultural field mechanization', title: 'Irrigation & Farm Machinery', desc: 'Automated drip fertigation manifolds, solar borehole pumping, and tractor-drawn bed shapers.', cta: 'Inquire About Machinery' },
  { img: IMG.tomatoProduction3, alt: 'Commercial crop production in a Vera protected screen house facility', title: 'Commercial Crop Production', desc: 'High-density production of vine tomatoes, sweet peppers, and cucumbers to international GAP standards.', cta: 'Sourcing & Supply Contract' },
  { img: IMG.fieldTeam, alt: 'Agronomic technical training session in commercial greenhouse', title: 'Training & Technical Advisory', desc: 'Practical field training and capacity development for commercial growers, youth, and women.', cta: 'Join Training Waitlist' },
  { img: IMG.renderSitePlan, alt: 'Agricultural consulting and farm project masterplanning', title: 'Agribusiness Consulting', desc: 'Turnkey agricultural engineering feasibility, site layout design, and operational advisory.', cta: 'Book Consultation' },
];

function Solutions() {
  return (
    <section id="solutions" className="section-y bg-cream">
      <div className="container-x">
        <SectionHeader eyebrow="Solutions" title="Comprehensive Climate-Smart Solutions" description="From physical infrastructure to operational agronomy and commercial offtake, explore our integrated offerings." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100} className="group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[2rem] bg-forest-900">
              <img src={s.img} alt={s.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/0" />
              <span className="absolute right-6 top-6 text-xs font-bold text-white/70">{String(i + 1).padStart(2, '0')}</span>
              <div className="relative p-7 text-white">
                <h3 className="display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-white/75">{s.desc}</p>
                <Button href="/contact" variant="link-light" className="mt-6">{s.cta}</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const COMPARISON = [
  { metric: 'Water Consumption', trad: 'High furrow/flood loss (up to 80% evaporation & runoff waste)', vera: '90% water savings via closed-loop drip and recirculating hydroponics' },
  { metric: 'Yield per Square Meter', trad: 'Low density (2–4 kg/m² open-field baseline with seasonal failure)', vera: '3x–5x higher yield (12–20+ kg/m² year-round vertical training)' },
  { metric: 'Pest & Insect Protection', trad: 'High vulnerability to whiteflies, Tuta absoluta & fungal blights', vera: '95% physical exclusion via 40–50 mesh anti-insect barrier netting' },
  { metric: 'Climate Resilience', trad: 'Exposed to flash floods, scorching tropical heat & drought stress', vera: 'Protected microclimate with diffused shade screens & ventilation' },
  { metric: 'Substrate / Soil Degradation', trad: 'Soil compaction, nematode buildup, and chemical salinity accumulation', vera: 'Zero soil pathogen risk using inert, reusable cocopeat & perlite media' },
];

function Difference() {
  return (
    <section id="difference" className="section-y bg-white">
      <div className="container-x">
        <SectionHeader eyebrow="The Vera Difference" title="Traditional Open-Field vs. Vera Smart Agriculture" description="A side-by-side comparison illustrating why controlled environment infrastructure delivers superior commercial economics." />

        <Reveal className="relative mt-14 h-56 overflow-hidden rounded-[2rem] sm:h-72">
          <img src={IMG.coveredStructure} alt="Protected agricultural infrastructure for controlled crop production" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 to-forest-950/20" />
          <p className="display absolute bottom-8 left-8 max-w-md text-3xl text-white sm:text-4xl">From exposed fields to engineered growing environments.</p>
        </Reveal>

        <Reveal className="mt-8 overflow-hidden rounded-[2rem] ring-1 ring-stone-200">
          <div className="hidden grid-cols-12 bg-forest-900 text-xs font-bold uppercase tracking-[0.18em] text-white md:grid">
            <div className="col-span-3 p-6">Evaluation Metric</div>
            <div className="col-span-4 p-6 text-white/60">Traditional Open-Field</div>
            <div className="col-span-5 bg-gold-400 p-6 text-forest-950">Vera Smart Agriculture</div>
          </div>
          {COMPARISON.map((row) => (
            <div key={row.metric} className="grid border-t border-stone-200 first:border-t-0 md:grid-cols-12">
              <div className="p-6 font-bold text-forest-900 md:col-span-3">{row.metric}</div>
              <div className="flex gap-3 px-6 pb-4 text-sm text-stone-500 md:col-span-4 md:p-6">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                <span><span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400 md:hidden">Traditional Open-Field</span>{row.trad}</span>
              </div>
              <div className="flex gap-3 bg-gold-50 p-6 text-sm font-medium text-forest-900 md:col-span-5">
                <ShieldCheck className="h-4 w-4 shrink-0 text-forest-500" />
                <span><span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-gold-700 md:hidden">Vera Smart Agriculture</span>{row.vera}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const GALLERY: GalleryItem[] = [
  { src: IMG.tomatoProduction3, alt: 'Vine tomato cultivation inside commercial screen house', title: 'Vine Tomato Cultivation', kind: 'real' },
  { src: IMG.coveredStructure, alt: 'Finished screen house structural enclosure', title: 'Finished Screen House Structure', kind: 'real' },
  { src: IMG.frameInstall1, alt: 'Hot-dip galvanized metal frame installation on agricultural site', title: 'Metal Frame Installation', kind: 'real' },
  { src: IMG.hydroponic, alt: 'High-density greenhouse crop production', title: 'Greenhouse Crop Production', kind: 'real' },
  { src: IMG.fieldTeam, alt: 'Arch screen house project installation', title: 'Arch Screen House Project', kind: 'real' },
  { src: IMG.tomatoCrates, alt: 'Hydroponic automated irrigation line setup', title: 'Hydroponic Irrigation Line', kind: 'real' },
  { src: IMG.maizeBean2, alt: 'Protective screen house canopy and insect netting', title: 'Screen House Canopy', kind: 'real' },
  { src: IMG.pepperCrates, alt: 'Aggregated vegetable harvest ready for cold chain dispatch', title: 'Aggregated Veg Harvest', kind: 'real' },
  { src: IMG.renderStructure, alt: 'Greenhouse metal arch frame 3D structural engineering model', title: 'Greenhouse Metal Arch Frame', kind: 'render' },
  { src: IMG.renderLettuce, alt: 'Seedling nursery setup 3D layout render', title: 'Seedling Nursery Setup', kind: 'render' },
  { src: IMG.renderExterior, alt: 'Automated precision drip dosing rig 3D schematic render', title: 'Drip Dosing Rig Setup', kind: 'render' },
];

function Projects() {
  return (
    <section id="projects" className="section-y bg-cream">
      <div className="container-x">
        <SectionHeader eyebrow="Project archive / 2026" title="Built environments. Real production systems." description="Explore Vera's screen houses, crop systems, irrigation lines, and technical project studies." />
        <Reveal className="mt-12">
          <ProjectGallery items={GALLERY} includeAll realLabel="Real Project" renderLabel="3D System Render" numbered />
        </Reveal>
      </div>
    </section>
  );
}

const CONVERSIONS = [
  { icon: Warehouse, title: 'Greenhouse Setups', desc: 'Turnkey localized steel-arched screen houses and hydroponics for reliable year-round vegetable harvesting.' },
  { icon: Wrench, title: 'Commercial Irrigation Machinery', desc: 'Precision automated drip manifolds, solar borehole pumping, and tractor-mounted bed forming implements.' },
  { icon: Sprout, title: 'High-Value Crop Supplies', desc: 'Contract offtake and wholesale delivery of premium tomatoes, peppers, and cucumbers to GAP standards.' },
];

function FinalCTA() {
  return (
    <section id="final-cta" className="section-y relative overflow-hidden bg-forest-900 text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <SectionHeader tone="light" eyebrow="Section 14 — Direct Conversion Paths" title="Let's Partner on Climate-Smart Agriculture" description="Whether you are expanding commercial farmland, setting up protected CEA infrastructure, or sourcing premium produce, partner with Africa's urban agriculture infrastructure company." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {CONVERSIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="flex flex-col rounded-[1.75rem] bg-white/5 p-8 ring-1 ring-white/10 transition-colors hover:bg-white/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400 text-forest-950"><c.icon className="h-6 w-6" /></span>
              <h3 className="display mt-6 text-2xl">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm text-white/70">{c.desc}</p>
              <Button href="/contact" variant="link-light" className="mt-6 self-start">Enquire About {c.title}</Button>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5 flex flex-col gap-6 rounded-[1.75rem] bg-gold-400 p-8 text-forest-950 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h3 className="display text-3xl">Ready to transform your agricultural enterprise?</h3>
            <p className="mt-2 text-forest-900/80">Reach out to our engineering and agronomy team for site consultation and system design.</p>
          </div>
          <Button href="/contact" variant="forest" className="shrink-0">Contact Vera AgriTech</Button>
        </Reveal>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section id="contact" className="section-y bg-cream">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-[2.25rem] bg-white ring-1 ring-stone-200 lg:grid-cols-2">
          <Reveal className="relative min-h-[360px]">
            <img src={IMG.hydroponic} alt="Technical hydroponic growing system inside a protected agricultural structure" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
            <div className="absolute inset-x-8 bottom-8 text-white">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">Build with Vera</span>
              <p className="display mt-3 text-3xl">The right infrastructure changes what a farm can produce.</p>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <Eyebrow>Start a conversation</Eyebrow>
            <h2 className="display mt-5 text-4xl text-forest-900 sm:text-5xl">Let's build smarter agriculture.</h2>
            <p className="mt-5 text-lg text-stone-600">Talk to Vera about greenhouse setups, commercial irrigation machinery, high-value crop supplies, training, or agribusiness consulting.</p>
            <div className="mt-8 space-y-4 text-stone-700">
              <p className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest-500" />{CONTACT.address}</p>
              <a href={CONTACT.phoneHref} className="flex gap-3 font-semibold text-forest-900 hover:text-forest-500"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-forest-500" />{CONTACT.phone}</a>
            </div>
            <Button href="/contact" variant="forest" className="mt-10 self-start">Contact Vera AgriTech</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Partners />
      <Impact />
      <About />
      <ValueChain />
      <Challenge />
      <Innovation />
      <Solutions />
      <Difference />
      <Calculator />
      <Projects />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ContactBlock />
    </Layout>
  );
}
