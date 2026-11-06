import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  cta: string;
  href?: string;
};

export default function CTABand({ eyebrow, title, description, cta, href = '/contact' }: Props) {
  return (
    <section className="bg-cream pb-20 pt-4 sm:pb-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-gold-400 px-8 py-14 sm:px-14 sm:py-16">
          <svg viewBox="0 0 200 200" className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 text-gold-300" aria-hidden="true">
            <path fill="currentColor" d="M100 10c40 30 70 70 60 120-8 40-40 60-60 60s-52-20-60-60C30 80 60 40 100 10Z" />
          </svg>
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow className="!text-forest-800 [&>span]:!bg-forest-800">{eyebrow}</Eyebrow>
              <h2 className="display mt-5 text-balance text-4xl text-forest-950 sm:text-5xl">{title}</h2>
              {description && <p className="mt-5 text-lg text-forest-900/80">{description}</p>}
            </div>
            <Button href={href} variant="forest" className="shrink-0 self-start lg:self-auto">{cta}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
