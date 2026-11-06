import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Model', href: '/model' },
  { label: 'Calculator', href: '/calculator' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(window.location.pathname !== '/');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.location.pathname !== '/' || window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_24px_-12px_rgba(0,0,0,0.18)]' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="/" className="shrink-0"><Logo /></a>
        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${scrolled ? 'text-stone-700 hover:bg-primary-50 hover:text-primary-700' : 'text-white/90 hover:bg-white/10 hover:text-white'}`}>
              {item.label}
            </a>
          ))}
        </div>
        <a href="/contact" className="group hidden items-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 hover:shadow-md lg:inline-flex">
          Partner with Vera <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <button onClick={() => setOpen((v) => !v)} className={`lg:hidden ${scrolled ? 'text-stone-800' : 'text-white'}`} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-stone-900/5">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-stone-700 hover:bg-primary-50 hover:text-primary-700">{item.label}</a>
              ))}
              <a href="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-5 py-3 text-sm font-semibold text-white">Partner with Vera <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
