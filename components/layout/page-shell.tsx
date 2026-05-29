import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return <div className={cn("mx-auto w-full max-w-8xl min-w-0 px-5 sm:px-6 md:px-8", className)}>{children}</div>;
}
