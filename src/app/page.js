import Image from "next/image";
import Product from "./components/Product";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-center ">
      <Header />
      <Product />
    </div>
  );
}
