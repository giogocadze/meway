import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Index from "./components";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <SearchBar />
      <Index />
      <div>
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
}
