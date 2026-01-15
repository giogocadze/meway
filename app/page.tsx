import Image from "next/image";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <SearchBar />
    </div>
  );
}
