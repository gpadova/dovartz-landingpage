import { AnimatedList } from "@/components/magicui/animated-list";
import {
  IconClipboardCheck,
  IconLayoutGrid,
  IconTools,
  IconDeviceMobile,
  IconHeadset,
  IconShieldLock,
} from "@tabler/icons-react";
import { WhatsappButton } from "./whatsapp-button";
import { EstimateButton } from "./estimate-button";

export function Process() {
  const steps = [
    {
      description: "Levantamento técnico e definição de escopo personalizado",
      color: "bg-chart-1",
      icon: <IconClipboardCheck className="w-6 h-6" />,
    },
    {
      description: "Projeto e dimensionamento dos sistemas de automação",
      color: "bg-chart-2",
      icon: <IconLayoutGrid className="w-6 h-6" />,
    },
    {
      description: "Instalação e integração de dispositivos inteligentes",
      color: "bg-chart-3",
      icon: <IconTools className="w-6 h-6" />,
    },
    {
      description: "Controle centralizado e interface personalizada",
      color: "bg-chart-4",
      icon: <IconDeviceMobile className="w-6 h-6" />,
    },
    {
      description: "Suporte técnico e manutenção especializada",
      color: "bg-chart-5",
      icon: <IconHeadset className="w-6 h-6" />,
    },
    {
      description: "Integração com sistemas de segurança",
      color: "bg-chart-1",
      icon: <IconShieldLock className="w-6 h-6" />,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
      <div className="flex flex-row items-center justify-between h-[600px] overflow-hidden">
        <div className="flex flex-col items-center justify-center w-1/2 px-8 py-10 gap-8">
          <h2 className="text-4xl font-bold">
            Assessoria completa da instalação à manutenção
          </h2>
          <h3 className="text-md text-gray-700">
            Automação inteligente e gestão integrada, oferecendo soluções
            completas para residências e empreendimentos, com foco em
            eficiência, segurança e alto desempenho em todos os ambientes.
          </h3>
          <div className="flex flex-row items-start w-full gap-4">
            <WhatsappButton className="text-black border border-black hover:bg-white/20 px-8 py-4" />
            <EstimateButton />
          </div>
        </div>
        <div className="w-1/2 p-10">
          <AnimatedList>
            {steps.map((step, index) => {
              return (
                <div
                  className="text-lg border border-gray-200 p-4 rounded-2xl flex flex-row items-center gap-4 shadow-md max-w-lg"
                  key={step.description}
                >
                  <div
                    className={`${step.color} p-3 rounded-xl text-white flex items-center justify-center`}
                  >
                    {step.icon}
                  </div>
                  {step.description}
                </div>
              );
            })}
          </AnimatedList>
        </div>
      </div>
    </div>
  );
}

// Assessoria completa da instalação à manutenção

// - Levantamento técnico e definição de escopo personalizado
// - Projeto e dimensionamento dos sistemas de automação
// - Instalação e integração de dispositivos inteligentes
// - Configuração de redes e conectividade
// - Controle centralizado e interface personalizada
// - Suporte técnico e manutenção especializada
// - Integração com sistemas de segurança
// Automação inteligente e gestão integrada, oferecendo soluções completas para residências e empreendimentos, com foco em eficiência, segurança e alto desempenho em todos os ambientes.
