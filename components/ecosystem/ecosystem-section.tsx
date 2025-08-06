import { Button } from "@/components/ui/button";
import { EcosystemStep } from "./ecosystem-step";

const steps = [
  {
    stepNumber: 1,
    title: "Escolha as melhores soluções para sua casa",
    description: "Estamos prontos para guiá-lo na escolha ideal.",
  },
  {
    stepNumber: 2,
    title: "Aproveite a tecnologia para o seu conforto e bem-estar",
    description:
      "Nossas soluções garantem praticidade e segurança no seu dia a dia.",
  },
  {
    stepNumber: 3,
    title: "Aumente o valor de mercado do seu imóvel",
    description:
      "A automação residencial é um diferencial no mercado imobiliário.",
  },
];

export function EcosystemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore o ecossistema de automação residencial
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de soluções de automação que se adaptam às
            suas necessidades. Descubra como cada tecnologia pode transformar
            seu lar em um espaço inteligente e conectado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <EcosystemStep
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
}
