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
  isFavorite = false,
}: CarCardProps) => {
  return (
    <div className="group w-full max-w-70">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl aspect-4/3 mb-3">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <button
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm ${
            isFavorite ? "text-red-500" : ""
          }`}
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorite ? "fill-current text-red-500" : "text-gray-500"
            }`}
          />
        </button>
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
