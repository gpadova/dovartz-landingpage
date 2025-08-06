"use client";

import { Button } from "./ui/button";

export function EstimateButton() {
  return (
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90 text-white"
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
