"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function EstimateButton({ className }: { className?: string }) {
  return (
    <Button
      size="lg"
      className={cn("bg-primary hover:bg-primary/90 text-white", className)}
      onClick={() => {
        window.scrollTo({
          top: document.getElementById("contact")?.offsetTop,
          behavior: "smooth",
        });
      }}
    >
      Solicitar Orçamento
    </Button>
  );
}
