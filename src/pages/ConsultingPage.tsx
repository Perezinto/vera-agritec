import Layout from '@/components/Layout';
import ImageHero from '@/components/sections/ImageHero';
import { ApproachSection, NumbersStrip, QuoteCTA, WhatWeDoSection } from '@/components/sections/ProgramSections';
import Button from '@/components/ui/Button';
import { IMG } from '@/data/images';

export default function ConsultingPage() {
  return (
    <Layout>
      <ImageHero
        eyebrow="Advisory & EPC"
        title="Make the Next Farm Decision Clearer"
        description="Practical consulting for investors, growers and teams building a more resilient agricultural business."
        image={IMG.frameInstall1}
        alt="Make the Next Farm Decision Clearer"
      >
        <Button href="/contact">Book a Consultation</Button>
      </ImageHero>
      <ApproachSection
        image={IMG.fieldTeam}
        alt="Assess"
        title="From ambition to an executable plan"
        description="We help make the moving parts legible: site, water, structure, crop, people, budget and route to market. Then we help turn the plan into work on the ground."
        points={['Site and opportunity assessment', 'Farm system design', 'Technical and commercial planning', 'Implementation support']}
      />
      <WhatWeDoSection
        cards={[
          { image: IMG.fieldTeam, title: 'Assess', desc: 'Understand the site, water, people and commercial opportunity.' },
          { image: IMG.coveredStructure, title: 'Design', desc: 'Shape a farm system that fits the crop and the business.' },
          { image: IMG.frameInstall1, title: 'Implement', desc: 'Coordinate the build, equipment and commissioning.' },
          { image: IMG.fieldTeam, title: 'Support', desc: 'Stay close as the operation learns and improves.' },
        ]}
      />
      <NumbersStrip stats={[{ value: '4', label: 'steps from brief to field' }, { value: '1', label: 'joined-up plan' }, { value: '365', label: 'days of support mindset' }]} />
      <QuoteCTA quote="“Good advice should make the next decision easier to take.”" cta="Book a Consultation" />
    </Layout>
  );
}
