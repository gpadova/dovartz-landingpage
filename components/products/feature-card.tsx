import { cn } from "@/lib/utils";

export const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-3 sm:p-4 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};
