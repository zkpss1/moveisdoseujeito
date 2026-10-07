import logo from '../assets/images/logo_seu_jeito_transparent.png';

export function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Móveis do Seu Jeito"
      draggable={false}
      className={`block object-cover object-[center_60%] ${className}`}
    />
  );
}
