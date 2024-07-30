import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { FilterSidebar } from "./components/FilterSidebar";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Nav />
      <div className="flex">
        <FilterSidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
