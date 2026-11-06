import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

const GALLERY = [
  { img: IMG.tomatoGreenhouse, title: 'Vine Tomato Cultivation' },
  { img: IMG.greenhouseCovered, title: 'Finished Screen House Structure' },
  { img: IMG.frameInstall, title: 'Metal Frame Installation' },
  { img: IMG.hydroponic, title: 'Greenhouse Crop Production' },
  { img: IMG.fieldTeam, title: 'Arch Screen House Project' },
  { img: IMG.tomatoCrates, title: 'Hydroponic Irrigation Line' },
  { img: IMG.maizeField, title: 'Screen House Canopy' },
  { img: IMG.pepperHarvest, title: 'Aggregated Veg Harvest' },
  { img: IMG.renderArch, title: 'Greenhouse Metal Arch Frame' },
  { img: IMG.renderNursery, title: 'Seedling Nursery Setup' },
  { img: IMG.renderDosing, title: 'Drip Dosing Rig Setup' },
  { img: IMG.aerialPlan, title: 'Site Plan Aerial' },
];

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="bg-white py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Project archive / 2026</span>
          <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
            Built environments. Real production systems.
          </h2>
          <p className="mt-4 text-stone-600">
            Explore Vera's screen houses, crop systems, irrigation lines, and technical project studies.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <div
              key={g.title}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ${
                i % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <img
                src={g.img}
                alt={g.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i % 5 === 0 ? 'h-48 sm:h-full sm:min-h-[260px]' : 'h-40 sm:h-48'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold text-white">{g.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
