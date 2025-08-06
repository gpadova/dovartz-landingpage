import Image from "next/image";
import { Grid } from "../ui/grid";
import { cn } from "@/lib/utils";

interface SkeletonOneProps {
  children: string[];
}

export const SkeletonOne = ({ children }: SkeletonOneProps) => {
  const gridCols = gridColsMatcher(children.length);
  return (
    <div className="flex py-8 px-2 h-full w-full gap-8">
      <div className={cn("grid gap-10 md:gap-2 max-w-7xl mx-auto", gridCols)}>
        {children.map((item, index) => (
          <div
            key={`${index}-${item}`}
            className=" px-4 py-6 rounded-2xl overflow-hidden border border-neutral-200"
          >
            <p className="text-base font-normal text-neutral-800 dark:text-white relative">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export function gridColsMatcher(length: number) {
  switch (length) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-1 sm:grid-cols-2";
    case 3:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    case 4:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    case 5:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
    case 6:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6";
    default:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  }
}
