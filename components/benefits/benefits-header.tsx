import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export function BenefitsHeader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center sm:items-start gap-2 px-2 sm:px-0 pb-6 sm:pb-0",
        className
      )}
    >
      <Badge className="rounded-2xl" variant="outline">
        Smart Home
      </Badge>

      <h1 className="font-medium text-foreground text-4xl lg:text-5xl leading-tight text-center sm:text-left max-w-[360px] sm:max-w-lg">
        Benefícios
      </h1>

      <p className="text-muted-foreground text-base leading-[18.2px]">
        Aproveite os benefícios da automação inteligente para sua residência ou
        empreendimento.
      </p>
    </div>
  );
}
