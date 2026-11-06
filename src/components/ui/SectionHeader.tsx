import type { ReactNode } from 'react';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';

type SectionHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
  className?: string;
  aside?: ReactNode;
};

export default function SectionHeader({ eyebrow, title, description, tone = 'dark', align = 'left', className = '', aside }: SectionHeaderProps) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-forest-900';
  const descColor = tone === 'light' ? 'text-white/70' : 'text-stone-600';
  const center = align === 'center';
  return (
    <div className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between ${center ? 'items-center text-center lg:flex-col lg:items-center' : ''} ${className}`}>
      <Reveal className={`max-w-3xl ${center ? 'mx-auto' : ''}`}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2 className={`display mt-5 text-balance text-4xl sm:text-5xl lg:text-[3.5rem] ${titleColor}`}>{title}</h2>
        {description && <p className={`mt-6 max-w-2xl text-pretty text-lg ${descColor} ${center ? 'mx-auto' : ''}`}>{description}</p>}
      </Reveal>
      {aside && <Reveal delay={120}>{aside}</Reveal>}
    </div>
  );
}
