import { CalendarCheck, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import ImageHero from '@/components/sections/ImageHero';
import ProjectGallery, { type GalleryItem } from '@/components/sections/ProjectGallery';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { IMG } from '@/data/images';

const PROJECTS = [
  {
    img: IMG.pepperLettuce,
    alt: 'Bell pepper production in a protected greenhouse',
    label: 'Project 01 / Ibadan',
    title: 'Ibadan Bell Pepper Project',
    desc: 'A 0.5-hectare commercial system built around 10 arched steel screen houses, drip irrigation and coco peat substrate.',
    facts: ['18.5 tonnes annual yield', '90% water reduction', '95% less chemical pesticide', 'Yellow & red bell peppers'],
    finance: [{ k: 'CapEx:', v: '₦12,500,000' }, { k: 'Annual recurring revenue:', v: '₦22,200,000' }],
    cta: 'Request Case Study PDF',
  },
  {
    img: IMG.lettuceProduction,
    alt: 'Premium lettuce production in a controlled greenhouse',
    label: 'Project 02 / Urban production',
    title: 'Hydroponic Lettuce Pilot',
    desc: 'An urban vertical NFT system using a 150 square metre footprint to produce premium lettuce for restaurants and supermarkets in Ibadan.',
    facts: ['450 heads weekly', '25-day crop cycle', 'Vertical NFT system', '150 m² footprint'],
    finance: [],
    cta: 'Inquire About Vertical Kits',
  },
];

const GALLERY: GalleryItem[] = [
  { src: IMG.tomatoProduction3, alt: 'Vine tomato cultivation', title: 'Vine tomato cultivation', kind: 'real' },
  { src: IMG.frameInstall1, alt: 'Metal frame installation', title: 'Metal frame installation', kind: 'real' },
  { src: IMG.hydroponic, alt: 'Hydroponic irrigation', title: 'Hydroponic irrigation', kind: 'real' },
  { src: IMG.coveredStructure, alt: 'Screen house canopy', title: 'Screen house canopy', kind: 'real' },
  { src: IMG.renderStructure, alt: '3D system render', title: '3D system render', kind: 'render' },
];

export default function ProjectsPage() {
  return (
    <Layout>
      <ImageHero
        eyebrow="Social Proof & Performance"
        title={<>Featured projects <span className="text-gold-400">&amp; case studies.</span></>}
        description="Explore Vera's real-world agricultural engineering installations and evidence-backed outcomes."
        image={IMG.coveredStructure}
        alt="Vera AgriTech screen house installation"
        aside={<span className="inline-flex rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">Ibadan and beyond</span>}
      />

      <section className="section-y bg-cream">
        <div className="container-x">
          <SectionHeader eyebrow="Active installations" title="Systems in the real world." description="The work is the proof: structures, water systems, crops and operators working together." />
          <div className="mt-16 space-y-10">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} className="grid overflow-hidden rounded-[2rem] bg-white ring-1 ring-stone-200 lg:grid-cols-2">
                <div className={`relative min-h-[320px] ${i % 2 ? 'lg:order-2' : ''}`}>
                  <img src={p.img} alt={p.alt} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="flex flex-col p-8 sm:p-12">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-600">{p.label}</span>
                  <h3 className="display mt-3 text-4xl text-forest-900">{p.title}</h3>
                  <p className="mt-4 text-lg text-stone-600">{p.desc}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {p.facts.map((f) => (
                      <li key={f} className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-forest-900"><Check className="h-4 w-4 shrink-0 text-forest-500" />{f}</li>
                    ))}
                  </ul>
                  {p.finance.length > 0 && (
                    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-forest-900 px-5 py-4 text-sm text-white/70">
                      {p.finance.map((f, j) => (
                        <span key={f.k} className="flex items-center gap-4">
                          {j > 0 && <span className="text-white/30">|</span>}
                          <span>{f.k} <span className="font-bold text-gold-300">{f.v}</span></span>
                        </span>
                      ))}
                    </div>
                  )}
                  <Button href="/contact" variant="forest" className="mt-8 self-start">{p.cta}</Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeader eyebrow="Visual project gallery" title="See the systems take shape." />
          <Reveal className="mt-12">
            <ProjectGallery items={GALLERY} realLabel="Real project" renderLabel="3D system render" />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 pt-4 sm:pb-24 bg-white">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-forest-900 px-8 py-14 text-white sm:px-14">
            <div className="grain pointer-events-none absolute inset-0" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <Eyebrow tone="light">Visit the work</Eyebrow>
                <h2 className="display mt-5 text-4xl sm:text-5xl">Schedule a site visit.</h2>
                <p className="mt-5 text-lg text-white/70">Inspect active farm sites or see Vera's screen house technology in action in Ibadan.</p>
              </div>
              <Button href="/contact" className="shrink-0 self-start lg:self-auto"><CalendarCheck className="h-4 w-4" />Schedule Farm Site Visit</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
