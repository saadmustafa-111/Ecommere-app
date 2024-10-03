"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
const Header = ({}) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search) {
      router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };
  return (
    <div className=" m-2 p-8 mx-2 bg-slate-950 text-white border-l   rounded-bl-2xl  rounded-br-2xl w-full ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-[25px] font-bold  cursor-pointer">
            Product Store
          </h1>
          <form action="" onSubmit={handleSearchSubmit}>
            {" "}
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="search your products here......"
              className="px-4 py-1 rounded-xl outline-none bg-white text-black "
            />
          </form>
          <button
            type="submit"
            className="ml-2 px-4 p-2 hover:scale bg-blue-500 text-white rounded-xl transition-transform transform hover:scale-105"
          >
            <FaSearch />
          </button>
        </div>
        <nav className="flex space-x-5 ">
          <Link href="/dashboard" className="hover:underline">
            Mens's
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Womens
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Accessories
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Sales
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Link href="/itemscart">
            {" "}
            <FaShoppingCart size={23} className="cursor-pointer" />
          </Link>
          <GrFavorite size={23} />
        </div>
      </div>
    </div>
  );
};

export default Header;
