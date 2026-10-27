import { useState } from "react";
import Discover from "../components/Discover";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="flex-1 px-4 py-8 md:px-12 xl:px-20">
      <Hero />
      <SearchBar />
      <Discover currentPage={currentPage} />

      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
    </main>
  );
}
export default Home;
