type LogoProps = {
  className?: string;
  variant?: 'full' | 'mark';
};

export default function Logo({ className = '', variant = 'full' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.svg"
        alt="Vera AgriTech"
        className={variant === 'mark' ? 'h-11 w-16 object-cover object-top' : 'h-14 w-[150px] object-contain'}
      />
    </div>
  );
}
