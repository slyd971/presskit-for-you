import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.055] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}
