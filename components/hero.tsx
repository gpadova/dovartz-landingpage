import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contants";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsappButton } from "./whatsapp-button";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop={false}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero/living-room.mov"
      >
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Tecnologia invisível. Conforto{" "}
          <span className="text-primary">inesquecível.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90">
          Com a Dovartz Smart Home, você tem soluções completas de automação
          inteligente que garantem o melhor em conforto e segurança.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Solicitar Orçamento
            </Button>
          </Link>
          <WhatsappButton />
        </div>
      </div>
    </section>
  );
}
