"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProductCard({
  name,
  image,
  category,
  description,
}: {
  name: string;
  image: string;
  category: string;
  description: string;
}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-cover"
        )}
      >
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-50"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {category}
            </p>
          </div>
        </div>
        <div className="text content">
          <h2 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {name}
          </h2>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
