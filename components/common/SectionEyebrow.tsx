import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  className: string;
};

export default function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest ${className}`}>
      {children}
    </p>
  );
}
