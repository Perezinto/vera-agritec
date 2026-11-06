import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Infrastructure from './components/Infrastructure';
import Mission from './components/Mission';
import IntegratedModel from './components/IntegratedModel';
import Vulnerabilities from './components/Vulnerabilities';
import ControlledEnvironments from './components/ControlledEnvironments';
import Solutions from './components/Solutions';
import Comparison from './components/Comparison';
import Calculator from './components/Calculator';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return <Page><Hero /><Infrastructure /><Mission /><IntegratedModel /><Gallery /><CTA /></Page>;
}

function SolutionsPage() {
  return <Page><div className="pt-20"><Vulnerabilities /><ControlledEnvironments /><Solutions /></div><CTA /></Page>;
}

function ModelPage() {
  return <Page><div className="pt-20"><Infrastructure /><Mission /><IntegratedModel /><Comparison /></div></Page>;
}

function CalculatorPage() {
  return <Page><div className="pt-20"><Comparison /><Calculator /></div></Page>;
}

function GalleryPage() {
  return <Page><div className="pt-20"><Gallery /><Testimonial /></div></Page>;
}

function FAQPage() {
  return <Page><div className="pt-20"><FAQ /></div><CTA /></Page>;
}

function ContactPage() {
  return <Page><div className="pt-20"><CTA /></div></Page>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/solutions') return <SolutionsPage />;
  if (path === '/model') return <ModelPage />;
  if (path === '/calculator') return <CalculatorPage />;
  if (path === '/gallery') return <GalleryPage />;
  if (path === '/faq') return <FAQPage />;
  if (path === '/contact') return <ContactPage />;
  return <HomePage />;
}
