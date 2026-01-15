import StepCard from "./StepCard";

const steps = [
  {
    stepNumber: 1,
    image: "/Auction.svg",
    title: "მოძებნე სათანადო მანქანა",
    description:
      "იპოვეთ მანქანების ფართო არჩევანი, რომელიც თქვენს მოგზაურობას მოერგება კომპაქტური საქალაქო მანქანებიდან დაწყებული, ფართო SUV-ებით დამთავრებული. გამოიყენეთ დახვენილი კატეგორიები, რათა ბუსტად ის იპოვოთ, რაც გჭირდებათ და იქ, სადაც გჭირდებათ.",
  },
  {
    stepNumber: 2,
    image: "/Auction.svg",
    title: "დაკავშნე სასურველი თარიღები",
    description:
      "აირჩიე გამგზავრებისა და დაბრუნების თარიღები, შეამოწმე ხელმისაწვდომობა და დაადასტურე შენი ჯავშანი რამდენიმე ნაბიჯით.",
  },
  {
    stepNumber: 3,
    image: "/Auction.svg",
    title: "გადაიხადე ონლაინ უსაფრთხოდ",
    description:
      "დაასრულე დაკავშნა უსაფრთხოდ, დაშიფრული გადახდით. გამოიყენე ნებით აღჭურვილი მეთოდები, რათა პრობლემების გარეშე დაადასტურო შენი მგზავრობა რამდენიმე ნაბში.",
  },
  {
    stepNumber: 4,
    image:"/Auction.svg",
    title: "დაუკავშირდი მფლობელს",
    description:
      "დაბუსტე დეტალები, დასვი კითხვები და შეათანხმე ნამოვადის დრო პირადაპირ მფლობელთან. ეს არის გარანტია იმისა, რომ შენი მგზავრობა სრულიად მშვიდად დაინყება.",
  },
];
const HowItWorks = () => {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            დაიქირავე ავტომობილი 4 ნაბიჯში
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            თქვენთვის შექმნილი გამარტივებული პროცესი საშუალებას მოგცემთ, მარტივი
            ნაბიჯების დახმარებით, საქართველოში მანქანა მარტივად და სწრაფად
            იქირაოთ!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {steps.map((step, index) => (
            <StepCard
              key={step.stepNumber}
              {...step}
              isLast={index === steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
