import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "primaryOnLight" | "secondaryOnLight";
  className?: string;
};

const styles = {
  primary:
    "bg-white text-ink shadow-[0_18px_50px_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(13,16,22,0.14)] hover:-translate-y-0.5 hover:bg-sand hover:shadow-[0_24px_70px_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(13,16,22,0.14)]",
  secondary:
    "border border-[#7B869A] bg-white/[0.04] text-white shadow-[0_14px_42px_rgba(4,8,20,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.08] hover:shadow-[0_18px_52px_rgba(0,0,0,0.2)]",
  ghost:
    "text-white/[0.84] hover:-translate-y-0.5 hover:text-white",
  primaryOnLight:
    "bg-[#10141d] text-white shadow-[0_18px_50px_rgba(13,16,22,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:bg-[#1d2430] hover:shadow-[0_24px_70px_rgba(13,16,22,0.2)]",
  secondaryOnLight:
    "border border-ink/[0.24] bg-white text-ink shadow-[0_12px_34px_rgba(13,16,22,0.08),inset_0_1px_0_rgba(255,255,255,0.72)] hover:-translate-y-0.5 hover:border-ink/[0.36] hover:bg-sand hover:shadow-[0_16px_42px_rgba(13,16,22,0.1)]",
};

export function Button({
  href = "#",
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "button-cycle cta-shine group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-[0.01em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
