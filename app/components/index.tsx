

import CarCard from "./carCard";

const popularCars = [
  {
    image: "/Picture.svg",
    name: "BMW rewrwerwX3 2dasdasdas022",
    rating: 4.91,
    reviews: 56,
    location: "თბილისი",
    price: 30,
    badge: "მიყვანით",
    isFavorite: false,
  },
  {
    image: "/Picture.svg",
    name: "Land Rover Range Rover Evoque 2016",
    rating: 4.91,
    reviews: 56,
    location: "თბილისი",
    price: 30,
    isFavorite: false,
  },
  {
    image: "/Picture.svg",
    name: "Honda Civic 2019",
    rating: 4.75,
    reviews: 5,
    location: "თბილისი",
    price: 25,
    isFavorite: false,
  },
];
const budgetCars = [
  {
    image: "/Picture.svg",
    name: "Honda Civic 2019",
    rating: 4.75,
    reviews: 5,
    location: "თბილისი",
    price: 25,
    isFavorite: false,
  },
  {
    image: "/Picture.svg",
    name: "Chevrolet Malibu 2018",
    rating: 4.5,
    reviews: 56,
    location: "თბილისი",
    price: 22,
    isFavorite: true,
  },
  {
    image: "/Picture.svg",
    name: "Chevrolet Malibu 2018",
    rating: 4.5,
    reviews: 56,
    location: "თბილისი",
    price: 22,
    isFavorite: true,
  },
];
const suvCars = [
  {
    image: "/Picture.svg",
    name: "Toyota Ladasdasdd Cruiser",
    rating: 4.95,
    reviews: 80,
    location: "თბილისი",
    price: 60,
    badge: "Premium",
    isFavorite: true,
  },
  {
    image: "/Picture.svg",
    name: "Toyota Land Cruiser",
    rating: 4.95,
    reviews: 80,
    location: "თბილისი",
    price: 60,
    badge: "Premium",
    isFavorite: true,
  },
  {
    image: "/Picture.svg",
    name: "Toyota Land Crudasdasiser",
    rating: 4.95,
    reviews: 80,
    location: "თბილისი",
    price: 60,
    badge: "Premium",
    isFavorite: true,
  },
];
const Index = () => {
  return (
    <section className="py-10 flex  flex-col gap-10">
      {/* Popular */}
      <div className="max-w-7xl mx-auto w-full px-6 pl-16">
  <h1 className="text-2xl font-bold mb-4">პოპულარული</h1>
  <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
    {popularCars.map((car, i) => (
      <CarCard key={i} {...car} />
    ))}
  </div>
</div>


      {/* Budget */}
      <div className="max-w-7xl mx-auto w-full px-6 pl-16">
        <h1 className="text-2xl font-bold mb-4">ბიუჯეტური ავტომობილი</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {budgetCars.map((car, i) => (
            <CarCard key={i} {...car} />
          ))}
        </div>
      </div>

      {/* SUV */}
      <div className="max-w-7xl mx-auto w-full px-6 pl-16">
        <h1 className="text-2xl font-bold mb-4">ჯიპი</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {suvCars.map((car, i) => (
            <CarCard key={i} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Index;




