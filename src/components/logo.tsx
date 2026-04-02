interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="512" height="512" rx="112" fill="#506052" />
      <path
        d="M140 368V152L256 284L372 152V368"
        stroke="white"
        strokeWidth="36"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface LogoProps {
  showMark?: boolean;
  markSize?: number;
  className?: string;
  textClassName?: string;
}

export default function Logo({
  showMark = true,
  markSize = 32,
  className,
  textClassName,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      {showMark && <LogoMark size={markSize} />}
      <span
        className={`font-bold tracking-tight text-on-surface font-[family-name:var(--font-manrope)] ${textClassName ?? "text-2xl"}`}
      >
        Maeven
      </span>
    </span>
  );
}
