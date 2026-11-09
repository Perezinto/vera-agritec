import { useState } from 'react';
import { BadgeCheck, Check, MapPin } from 'lucide-react';
import Logo from './Logo';

const SOLUTIONS = [
  'Screen Houses & Greenhouses',
  'Hydroponic & Soilless Kits',
  'Irrigation & Farm Machinery',
  'Commercial Crop Production',
  'Training & Technical Advisory',
  'Agribusiness Consulting',
];

const LINKS = [
  { label: 'About & Mission', href: '/#about' },
  { label: 'Integrated Value Chain', href: '/#value-chain' },
  { label: 'Controlled Environments', href: '/#innovation' },
  { label: 'The Vera Difference', href: '/#difference' },
  { label: 'Yield Calculator', href: '/#calculator' },
  { label: 'Project Gallery', href: '/#projects' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white/70">
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="/" className="inline-flex items-center gap-4 rounded-2xl bg-white px-4 py-2">
              <Logo className="h-16" />
            </a>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">Agricultural Technology &amp; Engineering</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Africa's Urban Agriculture Infrastructure Company. Building climate-smart food production systems across African cities using low-cost screen houses, advanced hydroponics, and smart drip irrigation.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white">
              <BadgeCheck className="h-4 w-4 text-gold-400" /> Certified Agricultural Engineering Contractor
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-white">Solutions &amp; Infrastructure</h4>
            <ul className="mt-6 space-y-3 text-sm">
              {SOLUTIONS.map((s) => (
                <li key={s}><a href="/#solutions" className="transition-colors hover:text-gold-300">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-white">Navigation</h4>
            <ul className="mt-6 space-y-3 text-sm">
              {LINKS.map((l) => (
                <li key={l.label}><a href={l.href} className="transition-colors hover:text-gold-300">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-white">Quarterly Agronomy Bulletins</h4>
            <p className="mt-6 text-sm leading-relaxed">Subscribe for field updates on screen house performance, pest exclusion, and commercial vegetable harvest yields.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setJoined(true);
              }}
              className="mt-5 flex rounded-full border border-white/15 bg-white/5 p-1.5 focus-within:border-gold-400/60"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@veraagritech.com"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button type="submit" className="inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-bold text-forest-900 transition-colors hover:bg-gold-300">
                {joined && <Check className="h-4 w-4" />}Join
              </button>
            </form>
            <div className="mt-6 flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <p><span className="font-semibold text-white">Regional Hubs:</span><br />Lagos • Abuja FCT • Kaduna • Ogun</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vera AgriTech. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Engineering Terms</span>
            <span>Site Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
