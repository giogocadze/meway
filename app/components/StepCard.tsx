import Image from "next/image";

interface StepCardProps {
  stepNumber: number;
  image: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const StepCard = ({
  stepNumber,
  image,
  title,
  description,
  isLast = false,
}: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Image */}
      <div className="mb-6 relative h-40 w-full overflow-hidden rounded-lg shadow-md">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Step indicator */}
      <div className="relative mb-6 flex items-center justify-center mr-60">
        {/* Circle */}
        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
          {stepNumber}
        </div>

        {/* Line to next step */}
        {!isLast && (
          <div className="absolute left-full top-1/2 ml-6 h-0.5 w-53 -translate-y-1/2 bg-blue-200" />
        )}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
