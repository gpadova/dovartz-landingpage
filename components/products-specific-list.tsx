"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { productsSpecificList } from "@/lib/data/products-specific-list";

export function ProductsSpecificList() {
  const cards = productsSpecificList.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className=" h-full py-10 sm:py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 sm:mb-12">
        Soluções Inteligentes para sua Casa.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
