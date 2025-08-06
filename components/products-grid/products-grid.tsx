import { ProductCard } from "./product-card";

const productsWithImages = [
  {
    name: "Iluminação",
    image: "/products/ilumination.jpg",
    category: "Conforto e Climatização",
    description:
      "Programe cenas e horários para criar ambientes perfeitos com iluminação personalizada e eficiente.",
  },
  {
    name: "Ar Condicionado",
    image: "/products/air-conditioner.webp",
    category: "Conforto e Climatização",
    description:
      "Mantenha a temperatura ideal automaticamente, economizando energia e aumentando o conforto.",
  },
  {
    name: "Piso Aquecido",
    image: "/products/heated-floor.jpg",
    category: "Conforto e Climatização",
    description:
      "Aqueça os ambientes de forma invisível e confortável, ideal para dias frios e banheiros aconchegantes.",
  },
  {
    name: "Persianas",
    image: "/products/persianas.jpg",
    category: "Conforto e Climatização",
    description:
      "Controle a entrada de luz natural e proteja sua privacidade com automação simples e precisa.",
  },
  {
    name: "Cortinas",
    image: "/products/cortinas.jpg",
    category: "Conforto e Climatização",
    description:
      "Abra ou feche suas cortinas com um toque ou por comando de voz, integrando conforto e praticidade.",
  },
  {
    name: "Lareira Elétrica",
    image: "/products/eletric-fire.webp",
    category: "Conforto e Climatização",
    description:
      "Adicione calor e charme ao ambiente sem fumaça, com controle remoto e design moderno.",
  },
  {
    name: "Boiler",
    image: "/products/boiler.jpg",
    category: "Conforto e Climatização",
    description:
      "Garanta água quente sempre que precisar, com agendamento e monitoramento remoto.",
  },
  {
    name: "Televisão",
    image: "/products/tv.jpg",
    category: "Entretenimento",
    description:
      "Integre sua TV ao sistema de automação para criar experiências cinematográficas com um toque.",
  },
  {
    name: "Sistema de Som",
    image: "/products/hometheater.jpg",
    category: "Entretenimento",
    description:
      "Curta som ambiente em todos os cômodos com controle centralizado e qualidade profissional.",
  },
  {
    name: "Piscina",
    image: "/products/swimming-pool.jpeg",
    category: "Áreas Molhadas / Lazer",
    description:
      "Gerencie temperatura, iluminação e filtragem da sua piscina direto do seu smartphone.",
  },
  {
    name: "Banheira",
    image: "/products/bath-tub.jpeg",
    category: "Áreas Molhadas / Lazer",
    description:
      "Tenha sua banheira pronta com temperatura ideal antes mesmo de chegar em casa.",
  },
  {
    name: "Sauna",
    image: "/products/sauna.jpeg",
    category: "Áreas Molhadas / Lazer",
    description:
      "Controle o tempo e o calor da sauna pelo app e tenha relaxamento sob medida.",
  },
  {
    name: "Câmeras de segurança",
    image: "/products/cameras.jpg",
    category: "Segurança e Acesso",
    description:
      "Acompanhe sua casa ao vivo de qualquer lugar com câmeras integradas ao sistema de segurança.",
  },
  {
    name: "Controle de acesso facial",
    image: "/products/facial-access.webp",
    category: "Segurança e Acesso",
    description:
      "Desbloqueie portas com reconhecimento facial seguro e eficiente, sem precisar de chaves.",
  },
  {
    name: "Fechaduras digitais",
    image: "/products/smart-lock.png",
    category: "Segurança e Acesso",
    description:
      "Feche ou abra portas pelo celular com autenticação segura e registro de acessos.",
  },
  {
    name: "Espelhos",
    image: "/products/mirror.jpeg",
    category: "Conveniência",
    description:
      "Espelhos inteligentes com iluminação LED, informações úteis e integração com assistentes de voz.",
  },
  {
    name: "Robôs de limpeza",
    image: "/products/cleaning-robot.jpg",
    category: "Conveniência",
    description:
      "Mantenha o ambiente limpo com robôs programáveis que limpam sua casa automaticamente.",
  },
  {
    name: "Alimentador Pets",
    image: "/products/pet-feeder.webp",
    category: "Conveniência",
    description:
      "Alimente seu pet em horários programados mesmo à distância com notificações e controle total.",
  },
  {
    name: "Monitor Caixa d'água",
    image: "/products/water-storage.jpg",
    category: "Conveniência",
    description:
      "Monitore o nível de água em tempo real e evite transtornos por falta de abastecimento.",
  },
  {
    name: "Monitor Gás",
    image: "/products/gas-monitor.webp",
    category: "Conveniência",
    description:
      "Receba alertas imediatos sobre vazamentos de gás e aumente a segurança da sua casa.",
  },
  {
    name: "Portas e portões",
    image: "/products/doors.jpeg",
    category: "Conveniência",
    description:
      "Abra e feche portões remotamente com segurança, agilidade e controle de acessos.",
  },
  {
    name: "Integração com Segurança",
    image: "/products/integrated.png",
    category: "Conveniência",
    description:
      "Integre sensores, alarmes e câmeras para um sistema de segurança centralizado e eficiente.",
  },
];
export function ProductsGrid() {
  return (
    <div className="py-20">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Transformando sua casa com tecnologia inteligente
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Na Dovartz Smart Home, realizamos a instalação e configuração de todos
          os módulos de automação. Garantimos que cada detalhe funcione
          perfeitamente para transformar sua casa em um lar inteligente.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  max-w-7xl mx-auto">
        {productsWithImages.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            image={product.image}
            category={product.category}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
