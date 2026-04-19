import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "bg-white text-ink hover:bg-sand shadow-soft",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  ghost:
    "text-white/84 hover:text-white",
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
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
