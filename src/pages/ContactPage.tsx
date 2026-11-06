import { useState } from 'react';
import { Check, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import Layout from '@/components/Layout';
import ImageHero from '@/components/sections/ImageHero';
import { ApproachSection, NumbersStrip, WhatWeDoSection } from '@/components/sections/ProgramSections';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import { IMG } from '@/data/images';

const field = 'w-full rounded-2xl border-0 bg-cream px-5 py-4 text-forest-900 ring-1 ring-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-400';

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact-form" className="section-y bg-cream">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-forest-900 p-8 text-white sm:p-12 lg:col-span-5">
          <div className="grain pointer-events-none absolute inset-0" />
          <div className="relative">
            <Eyebrow tone="light">03 — Contact</Eyebrow>
            <h2 className="display mt-5 text-4xl sm:text-5xl">Tell us about your next step.</h2>
            <ul className="mt-10 space-y-5 text-white/80">
              <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold-400" />Lagos · Abuja · Kaduna · Ibadan</li>
              <li><a href="mailto:hello@veraagritech.com" className="flex gap-3 hover:text-white"><Mail className="h-5 w-5 shrink-0 text-gold-400" />hello@veraagritech.com</a></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold-400" />+234 800 VERA AGRI</li>
            </ul>
            <a href="https://wa.me/2348008372247" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-[2rem] bg-white p-8 ring-1 ring-stone-200 sm:p-12 lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <input required placeholder="Name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <input placeholder="Phone" className={field} />
            <select defaultValue="" required className={`${field} appearance-none`}>
              <option value="" disabled>Area of interest</option>
              <option>Screen houses</option>
              <option>Hydroponics</option>
              <option>Irrigation &amp; machinery</option>
              <option>Training</option>
              <option>Consulting</option>
            </select>
            <textarea rows={6} placeholder="Tell us a little about your project" className={`${field} resize-none sm:col-span-2`} />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-forest-700 sm:col-span-2 sm:justify-self-start">
              {sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />} Send enquiry
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <Layout>
      <ImageHero
        eyebrow="Start a Conversation"
        title="Let's Build Smarter Agriculture Together"
        description="Tell us what you are growing, building or figuring out. We will help you find the right next step."
        image={IMG.fieldTeam}
        alt="Let's Build Smarter Agriculture Together"
      >
        <Button href="#contact-form">Send Enquiry</Button>
      </ImageHero>
      <ApproachSection
        image={IMG.coveredStructure}
        alt="Request a quote"
        title="Bring us the real brief"
        description="A site, a crop, a water challenge, a training need or a big idea—we are ready to listen."
        points={['Project quotes', 'Farm setup requests', 'Equipment information', 'Training and consultations']}
      />
      <WhatWeDoSection
        cards={[
          { image: IMG.coveredStructure, title: 'Request a quote', desc: 'Share the outline of your project and we will come back with a clear next step.' },
          { image: IMG.fieldTeam, title: 'Talk to Vera', desc: 'For a fast response, connect with our team on WhatsApp.' },
        ]}
      />
      <NumbersStrip stats={[{ value: '24h', label: 'target response window' }, { value: '4', label: 'regional touchpoints' }, { value: '1', label: 'clear next step' }]} />
      <ContactForm />
    </Layout>
  );
}
