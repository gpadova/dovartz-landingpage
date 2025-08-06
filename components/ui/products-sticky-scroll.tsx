"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Conforto e Climatização",
    description: (
      <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        <li>Iluminação</li>
        <li>Ar Condicionado</li>
        <li>Piso Aquecido</li>
        <li>Persianas</li>
        <li>Cortinas</li>
        <li>Lareira Elétrica</li>
        <li>Boiler</li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop&crop=faces"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-cover rounded-lg"
          alt="Conforto e Climatização"
        />
      </div>
    ),
  },
  {
    title: "Conveniência",
    description: (
      <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        <li>• Espelhos</li>
        <li>• Robôs de limpeza</li>
        <li>• Alimentador Pets</li>
        <li>• Monitor Caixa d'água</li>
        <li>• Monitor Gás</li>
        <li>• Portas e portões</li>
        <li>• Integração com Segurança</li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop&crop=faces"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-cover rounded-lg"
          alt="Conveniência"
        />
      </div>
    ),
  },
  {
    title: "Entretenimento",
    description: (
      <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        <li>• Televisão</li>
        <li>• Sistema de Som</li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=400&fit=crop&crop=faces"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-cover rounded-lg"
          alt="Entretenimento"
        />
      </div>
    ),
  },
  {
    title: "Áreas Molhadas / Lazer",
    description: (
      <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        <li>• Piscina</li>
        <li>• Banheira</li>
        <li>• Sauna</li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=400&fit=crop&crop=faces"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-cover rounded-lg"
          alt="Áreas Molhadas / Lazer"
        />
      </div>
    ),
  },
  {
    title: "Segurança e Acesso",
    description: (
      <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        <li>• Câmeras de segurança</li>
        <li>• Controle de acesso facial</li>
        <li>• Fechaduras digitais</li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=400&fit=crop&crop=faces"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-cover rounded-lg"
          alt="Segurança e Acesso"
        />
      </div>
    ),
  },
];

export const ProductsStickyScroll = () => {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
};
