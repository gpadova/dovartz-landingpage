"use client";

import { WHATSAPP_URL } from "@/lib/contants";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function WhatsappButton({ className }: { className?: string }) {
  return (
    <Button
      size="lg"
      className={cn(
        "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4",
        className
      )}
      onClick={() => {
        window.open(WHATSAPP_URL, "_blank");
      }}
    >
      <FaWhatsapp className="mr-2" />
      WhatsApp
    </Button>
  );
}
