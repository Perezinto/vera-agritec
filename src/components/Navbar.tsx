import { useEffect, useState } from 'react';
import { Mail, MapPin, Menu, Phone, Sprout, X } from 'lucide-react';
import Logo from './Logo';
import Button from './ui/Button';
import { CONTACT, NAV } from '@/data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className={`overflow-hidden bg-forest-900 text-white/80 transition-all duration-300 ${scrolled ? 'max-h-0' : 'max-h-12'}`}>
        <div className="container-x flex items-center justify-between gap-4 py-2.5 text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold-400" />{CONTACT.location}</span>
            <span className="hidden items-center gap-2 md:inline-flex"><Sprout className="h-3.5 w-3.5 text-forest-300" />{CONTACT.tagline}</span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white"><Mail className="h-3.5 w-3.5 text-gold-400" />{CONTACT.email}</a>
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-gold-300"><Phone className="h-3.5 w-3.5 text-gold-400" />{CONTACT.phone}</a>
          </div>
        </div>
      </div>

      <div className={`border-b transition-all duration-300 ${scrolled ? 'border-stone-200/80 bg-white/90 shadow-[0_12px_40px_-24px_rgba(16,48,42,0.35)] backdrop-blur-xl' : 'border-transparent bg-white'}`}>
        <nav className="container-x flex items-center justify-between gap-6 py-2">
          <a href="/" className="shrink-0" aria-label="Vera AgriTech home">
            <Logo className={`transition-all duration-300 ${scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-[76px]'}`} />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = path === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${active ? 'text-forest-800' : 'text-stone-600 hover:text-forest-800'}`}
                  >
                    {item.label}
                    <span className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-400 transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0'}`} />
                  </a>
                </li>
              );
            })}
          </ul>

          <Button href="/contact" className="hidden lg:inline-flex">Contact Us</Button>

          <button onClick={() => setOpen(true)} className="rounded-full p-2.5 text-forest-900 ring-1 ring-stone-200 lg:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <div className={`fixed inset-0 z-50 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-forest-950/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
        <div className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-cream p-6 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <Logo className="h-14" />
            <button onClick={() => setOpen(false)} className="rounded-full p-2.5 text-forest-900 ring-1 ring-stone-300" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="mt-10 flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="display block border-b border-stone-200 py-4 text-3xl text-forest-900">{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3 text-sm text-stone-600">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2"><Mail className="h-4 w-4 text-forest-500" />{CONTACT.email}</a>
            <a href={CONTACT.phoneHref} className="flex items-center gap-2"><Phone className="h-4 w-4 text-forest-500" />{CONTACT.phone}</a>
            <Button href="/contact" className="mt-4 w-full">Contact Us</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
