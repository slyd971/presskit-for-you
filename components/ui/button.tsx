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
    "border border-white/[0.16] bg-white/[0.055] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:border-white/[0.24] hover:bg-white/[0.095] hover:shadow-[0_18px_52px_rgba(0,0,0,0.22)]",
  ghost:
    "text-white/[0.84] hover:-translate-y-0.5 hover:text-white",
  primaryOnLight:
    "bg-[#10141d] text-white shadow-[0_18px_50px_rgba(13,16,22,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:bg-[#1d2430] hover:shadow-[0_24px_70px_rgba(13,16,22,0.2)]",
  secondaryOnLight:
    "border border-ink/20 bg-ink/[0.035] text-ink shadow-[inset_0_1px_0_rgba(13,16,22,0.05)] hover:-translate-y-0.5 hover:border-ink/28 hover:bg-ink/[0.07]",
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
        "cta-shine group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
