export function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[.27em] font-['Montserrat'] leading-none ${className}`}>
      <span className="sr-only">Móveis do SG</span>
      <span aria-hidden="true" className="flex flex-col gap-[.25em] text-[.31em] font-semibold tracking-[.12em]">
        <span>MÓVEIS</span>
        <span>DO</span>
      </span>
      <span aria-hidden="true" className="h-[.85em] w-px bg-[#C8A484]" />
      <span aria-hidden="true" className="text-[1em] font-bold tracking-[-.085em]">SG</span>
    </span>
  );
}
