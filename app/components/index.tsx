

import CarCard from "./carCard";

const cars = [
  {
    image: "/Picture.svg",
    name: "BMW X3 2022",
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
  {
    image: "/Picture.svg",
    name: "Chevrolet Malibu 2018",
    rating: 4.50,
    reviews: 56,
    location: "თბილისი",
    price: 22,
    badge: "Delivery",
    isFavorite: true,
  },
];

const Index = () => {
  return (
    <section className="py-10 flex flex-col gap-5 ">
      <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-2xl font-bold text-foreground mb-4">
          პოპულარული
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-2xl font-bold text-foreground mb-4">
        ბიუჯეტური ავტომობილი
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-2xl font-bold text-foreground mb-4">
        ჯიპი
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Index;