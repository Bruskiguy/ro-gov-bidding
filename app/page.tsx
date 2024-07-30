import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { FilterSidebar } from "./components/FilterSidebar";
import { Feed } from "./components/Feed";
import testData from "../testData.json";
import { Card, ContractDetails } from "./components/Card";

const data = testData as unknown as ContractDetails[]; //todo later, this is dangerous. assumes json shape is same as Typescript shape.

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Nav />
      <div className="flex">
        <FilterSidebar />
        <Main>
          {data.map((item, index) => (
            <Card card={item} key={index} />
          ))}
        </Main>
      </div>
      <Footer />
    </div>
  );
}
