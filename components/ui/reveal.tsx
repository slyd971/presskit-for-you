type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div
      className={className ? `reveal-up ${className}` : "reveal-up"}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
