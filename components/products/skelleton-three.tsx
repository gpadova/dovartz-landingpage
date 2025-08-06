import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Image from "next/image";

interface SkeletonThreeProps {
  children: string[];
}

export const SkeletonThree = ({ children }: SkeletonThreeProps) => {
  return (
    <a
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <Image
            src="https://assets.aceternity.com/fireship.jpg"
            alt="header"
            width={400}
            height={200}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />

          {/* You can now use the children array here */}
          <div className="absolute bottom-4 left-4 text-white z-[200]">
            {children.map((item, index) => (
              <div
                key={index}
                className="text-sm mb-1 bg-black/50 px-2 py-1 rounded"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};
