import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "primaryOnLight" | "secondaryOnLight";
  className?: string;
  // Flèche qui glisse de 4 px au survol : réservée au CTA principal.
  arrow?: boolean;
};

// Surfaces plates : bordure 1 px, pas d'ombre. Au survol, seul le fond (et 2 px de lift) change.
const styles = {
  primary:
    "border border-white bg-white text-ink hover:-translate-y-0.5 hover:border-sand hover:bg-sand",
  secondary:
    "border border-steel bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.08]",
  ghost:
    "text-white/[0.84] hover:-translate-y-0.5 hover:text-white",
  primaryOnLight:
    "border border-ink-editorial bg-ink-editorial text-white hover:-translate-y-0.5 hover:border-surface-760 hover:bg-surface-760",
  secondaryOnLight:
    "border border-ink-editorial/[0.24] bg-white text-ink-editorial hover:-translate-y-0.5 hover:border-ink-editorial hover:bg-sand",
};

export function Button({
  href = "#",
  children,
  variant = "primary",
  className,
  arrow = false,
}: ButtonProps) {
  // Lien externe (WhatsApp) : nouvel onglet, comme « Écrire sur WhatsApp ».
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "button-cycle cta-shine group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-[0.01em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        styles[variant],
        className,
      )}
    >
      {children}
      {arrow ? <ArrowRight className="cta-arrow h-4 w-4 shrink-0" aria-hidden="true" /> : null}
    </Link>
  );
}
