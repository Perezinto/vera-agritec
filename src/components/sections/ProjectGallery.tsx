import { useState } from 'react';

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  kind: 'real' | 'render';
};

type Props = {
  items: GalleryItem[];
  includeAll?: boolean;
  realLabel: string;
  renderLabel: string;
  numbered?: boolean;
};

export default function ProjectGallery({ items, includeAll = false, realLabel, renderLabel, numbered = false }: Props) {
  const filters = [
    ...(includeAll ? [{ id: 'all', label: 'All' }] : []),
    { id: 'real', label: 'Real Projects' },
    { id: 'render', label: '3D System Renders' },
  ];
  const [filter, setFilter] = useState(filters[0].id);
  const visible = items.filter((i) => filter === 'all' || i.kind === filter);

  return (
    <div>
      <div className="inline-flex flex-wrap gap-1 rounded-full bg-white p-1.5 ring-1 ring-stone-200">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${filter === f.id ? 'bg-forest-800 text-white shadow' : 'text-stone-600 hover:text-forest-800'}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((item, i) => {
          const n = items.indexOf(item) + 1;
          const feature = i % 6 === 0;
          return (
            <figure
              key={item.title}
              className={`group relative overflow-hidden rounded-[1.75rem] bg-forest-900 ${feature ? 'sm:col-span-2 sm:row-span-2' : ''}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
              <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-white">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-300">{item.kind === 'real' ? realLabel : renderLabel}</span>
                  <h3 className={`display mt-1 ${feature ? 'text-3xl' : 'text-xl'}`}>{item.title}</h3>
                  {numbered && <span className="mt-1 block text-xs text-white/60">Vera AgriTech</span>}
                </div>
                {numbered && <span className="text-xs font-bold text-white/70">{String(n).padStart(2, '0')}</span>}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
