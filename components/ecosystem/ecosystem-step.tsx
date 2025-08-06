interface EcosystemStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

export function EcosystemStep({
  stepNumber,
  title,
  description,
}: EcosystemStepProps) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-2xl font-bold text-white">{stepNumber}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
