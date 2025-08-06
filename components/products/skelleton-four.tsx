import { Globe } from "./globe";

interface SkeletonFourProps {
  children: string[];
}

export const SkeletonFour = ({ children }: SkeletonFourProps) => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />

      {/* You can now use the children array here */}
      <div className="absolute top-4 left-4 text-white z-[200]">
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
  );
};
