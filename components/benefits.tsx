import { Card, CardContent } from "@/components/ui/card";
import { BenefitsHeader } from "./benefits/benefits-header";
import { Icons } from "./icons";
import Image from "next/image";
import { BenefitsVideo } from "./benefits/benefits-video";

const features = [
  {
    icon: <Icons.home className="size-6 text-primary" fill="var(--primary)" />,
    title: "Conforto personalizado",
    description:
      "Controle luzes, climatização, cortinas e som com apenas um toque ou comando de voz.",
  },
  {
    icon: (
      <Icons.shield fill="var(--primary)" className="size-6 text-primary" />
    ),
    title: "Segurança reforçada",
    description:
      "Sensores inteligentes, câmeras e fechaduras eletrônicas aumentam a proteção do seu lar.",
  },
  {
    icon: <Icons.lightbulb className="size-6 text-primary" />,
    title: "Eficiência energética",
    description:
      "Sistemas programáveis reduzem o consumo de energia, como luzes e ar-condicionado que desligam automaticamente.",
  },
  {
    icon: <Icons.clock className="size-6 text-primary" />,
    title: "Praticidade no dia a dia",
    description:
      "Agendamentos, rotinas automatizadas e integração entre dispositivos facilitam sua rotina.",
  },
  {
    icon: <Icons.building className="size-6 text-primary" />,
    title: "Valorização do imóvel",
    description:
      "Imóveis automatizados são mais atrativos no mercado, com tecnologia integrada como diferencial.",
  },
  {
    icon: <Icons.accessibility className="size-6 text-primary" />,
    title: "Acessibilidade",
    description:
      "Recursos como controle por voz e automações programadas ajudam pessoas com mobilidade reduzida.",
  },
];

export function Benefits() {
  return (
    <div className="flex flex-col bg-background w-full">
      <BenefitsHeader className="flex sm:hidden" />
      <div className="bg-background flex flex-col md:flex-row items-start justify-center w-full gap-12 sm:pb-12 sm:min-h-screen sm:pr-12">
        <BenefitsVideo />
        <div className="flex flex-col w-full items-start gap-2 sm:pr-4 px-6 sm:px-0">
          <BenefitsHeader className="hidden sm:block" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-0 w-full">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="w-full border-none shadow-none max-w-xs bg-white rounded-2xl"
              >
                <CardContent className="flex flex-col items-start gap-4 p-0">
                  <div className="flex items-center bg-primary/10 justify-center size-12 bg-badge-bg rounded-[6.14px]">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="font-bold text-foreground text-2xl leading-[97%]">
                      {feature.title}
                    </h3>
                    <p className="text-[#7B7B7B] text-md sm:text-lg font-normal leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
