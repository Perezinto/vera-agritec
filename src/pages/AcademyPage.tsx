import Layout from '@/components/Layout';
import ImageHero from '@/components/sections/ImageHero';
import { ApproachSection, NumbersStrip, QuoteCTA, WhatWeDoSection } from '@/components/sections/ProgramSections';
import Button from '@/components/ui/Button';
import { IMG } from '@/data/images';

export default function AcademyPage() {
  return (
    <Layout>
      <ImageHero
        eyebrow="Vera Agribusiness Academy"
        title="Learn the Work Behind the Farm"
        description="Practical training for the people who build, operate and grow climate-smart farms."
        image={IMG.fieldTeam}
        alt="Learn the Work Behind the Farm"
      >
        <Button href="/contact">Join Training</Button>
      </ImageHero>
      <ApproachSection
        image={IMG.hydroponic}
        alt="Hydroponics & Soilless Cultivation"
        title="Learning that meets the field"
        description="Our sessions are built around doing: understanding systems, reading crops, making decisions and keeping a farm moving. Training is practical, visual and grounded in the work operators face every day."
        points={['Hands-on learning', 'Field-based demonstrations', 'Clear technical language', 'Support that continues after class']}
      />
      <WhatWeDoSection
        cards={[
          { image: IMG.hydroponic, title: 'Hydroponics & Soilless Cultivation', desc: 'Understand systems, nutrients, crops and daily checks.' },
          { image: IMG.coveredStructure, title: 'Screen House Engineering', desc: 'Learn the structure, materials, climate and maintenance basics.' },
          { image: IMG.tomatoProduction3, title: 'Farm Operations', desc: 'Build the routines that keep a commercial farm on track.' },
          { image: IMG.fieldTeam, title: 'Agribusiness', desc: 'Connect production decisions to cost, market and margin.' },
        ]}
      />
      <NumbersStrip stats={[{ value: '500+', label: 'farmers and operators reached*' }, { value: '4', label: 'learning tracks' }, { value: '100%', label: 'practical focus' }]} />
      <QuoteCTA quote="“The most useful training is the kind that changes what happens tomorrow morning.”" cta="Join Training" />
    </Layout>
  );
}
