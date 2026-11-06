import { CloudRain, Bug, PackageX, Unlink } from 'lucide-react';
import { IMG } from '../data/images';
import { useReveal } from '../hooks/useReveal';

const ISSUES = [
  { icon: CloudRain, title: 'Erratic Seasonal Rains', desc: 'Unpredictable rain makes open-field production harder to plan.' },
  { icon: Bug, title: 'Pest Vulnerability', desc: 'Unprotected crops remain exposed to damaging pests and disease.' },
  { icon: PackageX, title: 'Post-Harvest Losses', desc: 'Produce can be lost before it reaches urban markets.' },
  { icon: Unlink, title: 'Disconnected Supply Channels', desc: 'Farmers need stronger connections to local markets and buyers.' },
];

export default function Vulnerabilities() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">The problem we solve</span>
          <h2 className="mt-3 text-3xl font-bold text-primary-900 sm:text-4xl">
            Vulnerabilities in Conventional Open-Field Farming
          </h2>
          <p className="mt-4 text-stone-600">
            Vera AgriTech addresses the four critical bottlenecks limiting agricultural productivity and food resilience in Nigeria.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ISSUES.map((issue) => {
            const Icon = issue.icon;
            return (
              <div
                key={issue.title}
                className="group rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all hover:border-primary-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warm-100 text-warm-700 transition-colors group-hover:bg-warm-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold text-primary-900">{issue.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{issue.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img src={IMG.fieldTeam} alt="Open-field crop vulnerability" className="h-72 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">
              Open-field crops remain exposed to heatwaves, flash flooding, and insect vectors, creating volatile market prices.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img src={IMG.steelArch} alt="Localized high-durability steel arched screen house" className="h-72 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">
              Localized, high-durability steel arched screen houses engineered for tropical longevity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
