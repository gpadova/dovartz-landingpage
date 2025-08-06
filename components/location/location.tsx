import { BrazilMap } from "./brazil-map";

export function Location() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between px-12 sm:py-12 max-w-6xl mx-auto">
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <BrazilMap />
      </div>
      <div className="w-full sm:w-1/2 p-4 gap-4 flex flex-col justify-center items-center">
        <h2 className="text-4xl max-w-md">Estamos em Florianópolis e região</h2>
        <p className="text-md text-gray-800 font-medium max-w-md ">
          Com orgulho, projetamos e implementamos sistemas de automação
          residencial em toda a Ilha da Magia e região continental.
        </p>
      </div>
    </div>
  );
}
