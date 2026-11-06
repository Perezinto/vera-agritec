import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

type Variant = 'gold' | 'forest' | 'light' | 'outline-light' | 'outline-dark' | 'link' | 'link-light';

const styles: Record<Variant, string> = {
  gold: 'rounded-full bg-gold-400 px-6 py-3.5 text-forest-900 shadow-[0_10px_30px_-12px_rgba(231,169,61,0.8)] hover:bg-gold-300',
  forest: 'rounded-full bg-forest-800 px-6 py-3.5 text-white shadow-[0_10px_30px_-12px_rgba(23,63,53,0.7)] hover:bg-forest-700',
  light: 'rounded-full bg-white px-6 py-3.5 text-forest-900 hover:bg-cream',
  'outline-light': 'rounded-full border border-white/30 px-6 py-3.5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10',
  'outline-dark': 'rounded-full border border-forest-800/20 px-6 py-3.5 text-forest-900 hover:border-forest-800 hover:bg-forest-800 hover:text-white',
  link: 'text-forest-800 underline-offset-[6px] hover:text-forest-500 hover:underline',
  'link-light': 'text-gold-300 underline-offset-[6px] hover:text-gold-200 hover:underline',
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: 'arrow' | 'up' | 'none';
};

export default function Button({ href, children, variant = 'gold', className = '', icon = 'arrow' }: ButtonProps) {
  const Icon = icon === 'up' ? ArrowUpRight : ArrowRight;
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group inline-flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      {icon !== 'none' && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </a>
  );
}
