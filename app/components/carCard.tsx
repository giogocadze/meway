import Image, { StaticImageData } from "next/image";
import { Heart, Star, MapPin } from "lucide-react";

interface CarCardProps {
  image: StaticImageData | string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  price: number;
  badge?: string;
  isFavorite?: boolean;
}


const CarCard = ({
  image,
  name,
  rating,
  reviews,
  location,
  price,
  badge,
}: CarCardProps) => {
  return (
    <div className="group w-full">

      {/* Image */}
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-3">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

      
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
          <span className="text-sm font-medium">{rating.toFixed(2)}</span>
          <span className="text-sm text-gray-500">({reviews})</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          {badge ? (
            <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-500 text-white">
              {badge}
            </span>
          ) : (
            <span />
          )}
          <div>
            <span className="font-semibold text-gray-900">${price}</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
