import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  kicker?: string;
  title?: string;
  description?: string;
}

export function Section({ 
  children, 
  className, 
  id, 
  kicker, 
  title, 
  description 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "relative py-16 lg:py-24",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {(kicker || title || description) && (
          <div className="text-center mb-12 lg:mb-16">
            {kicker && (
              <div className="text-primary font-display text-sm font-bold tracking-[0.2em] uppercase mb-4">
                {kicker}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}