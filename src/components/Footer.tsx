import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import Logo from './Logo';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Our Model', href: '/model' },
  { label: 'Calculator', href: '/calculator' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
];

const SOLUTIONS = ['Screen Houses', 'Hydroponic Kits', 'Irrigation Machinery', 'Crop Production', 'Training', 'Consulting'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <footer className="bg-primary-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:gap-12">
          <div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <Logo />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-400">
              Africa's Urban Agriculture Infrastructure Company. Building climate-smart food production systems across African cities using low-cost screen houses, advanced hydroponics, and smart drip irrigation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Solutions &amp; Infrastructure</h4>
            <ul className="mt-4 space-y-2.5">
              {SOLUTIONS.map((s) => (
                <li key={s}>
                  <a href="/solutions" className="text-sm text-stone-400 transition-colors hover:text-accent-400">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-stone-400 transition-colors hover:text-accent-400">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Quarterly Agronomy Bulletins</h4>
            <p className="mt-4 text-sm text-stone-400">
              Subscribe for field updates on screen house performance, pest exclusion, and commercial vegetable harvest yields.
            </p>
            <form onSubmit={submit} className="mt-5">
              <div className="flex overflow-hidden rounded-full bg-white/5 p-1 ring-1 ring-white/15 focus-within:ring-accent-400/50">
                <span className="flex items-center pl-3 text-stone-400">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent px-3 text-sm text-white placeholder:text-stone-500 focus:outline-none"
                />
                <button type="submit" className="flex items-center gap-1.5 rounded-full bg-accent-500 px-4 py-2 text-xs font-semibold text-primary-950 transition-colors hover:bg-accent-400">
                  <Send className="h-3.5 w-3.5" />
                  Subscribe
                </button>
              </div>
              {sent && <p className="mt-3 text-xs text-accent-400">Thanks for subscribing — we'll be in touch.</p>}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-stone-500">© 2026 Vera AgriTech. All rights reserved.</p>
          <p className="text-xs text-stone-500">Lagos • Abuja FCT • Kaduna • Ogun</p>
        </div>
      </div>
    </footer>
  );
}
