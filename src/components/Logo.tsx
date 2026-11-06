import { IMG } from '@/data/images';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = 'h-16 sm:h-[72px]' }: LogoProps) {
  return <img src={IMG.logo} alt="Vera AgriTech" className={`w-auto object-contain ${className}`} />;
}
