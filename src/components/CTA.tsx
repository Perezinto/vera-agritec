import { Home, Tractor, Sprout, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  { icon: Home, title: 'Greenhouse Setups', desc: 'Turnkey localized steel-arched screen houses and hydroponics for reliable year-round vegetable harvesting.' },
  { icon: Tractor, title: 'Commercial Irrigation Machinery', desc: 'Precision automated drip manifolds, solar borehole pumping, and tractor-mounted bed forming implements.' },
  { icon: Sprout, title: 'High-Value Crop Supplies', desc: 'Contract offtake and wholesale delivery of premium tomatoes, peppers, and cucumbers to GAP standards.' },
];

export default function CTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Partner with us</span>
          <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
            Let's Partner on Climate-Smart Agriculture
          </h2>
          <p className="mt-4 text-stone-600">
            Whether you are expanding commercial farmland, setting up protected CEA infrastructure, or sourcing premium produce, partner with Africa's urban agriculture infrastructure company.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-3xl border border-stone-200 bg-stone-50 p-7 transition-all hover:border-primary-300 hover:bg-white hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary-900">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl bg-primary-900 shadow-xl lg:grid-cols-2">
          <div className="relative min-h-[300px]">
            <img src={IMG.hydroponic} alt="Technical hydroponic growing system" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-lg font-semibold text-white">The right infrastructure changes what a farm can produce.</p>
            </div>
          </div>
          <div className="p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white">Ready to transform your agricultural enterprise?</h3>
            <p className="mt-3 text-stone-300">
              Reach out to our engineering and agronomy team for site consultation and system design.
            </p>

            <div className="mt-8 space-y-4">
              <a href="mailto:hello@vera-agritech.com" className="flex items-center gap-3 text-stone-200 hover:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5" />
                </span>
                hello@vera-agritech.com
              </a>
              <a href="tel:+2348000000000" className="flex items-center gap-3 text-stone-200 hover:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Phone className="h-5 w-5" />
                </span>
                +234 800 000 0000
              </a>
              <div className="flex items-center gap-3 text-stone-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5" />
                </span>
                Lagos &bull; Abuja FCT &bull; Kaduna &bull; Ogun
              </div>
            </div>

            <a
              href="mailto:hello@vera-agritech.com"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-primary-950 transition-all hover:bg-accent-400"
            >
              Talk to Vera
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
