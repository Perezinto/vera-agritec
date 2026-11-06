import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
};

export default function Eyebrow({ children, tone = 'dark', className = '' }: EyebrowProps) {
  const color = tone === 'light' ? 'text-gold-300' : 'text-forest-500';
  const line = tone === 'light' ? 'bg-gold-300' : 'bg-gold-500';
  return (
    <span className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] ${color} ${className}`}>
      <span className={`h-px w-8 ${line}`} />
      {children}
    </span>
  );
}
