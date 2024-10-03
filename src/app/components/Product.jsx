"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "@/redux/CartSlice";
import Link from "next/link";

const Product = () => {
  const [products, setProduct] = useState([]);
  const [filterProducts, setFilterProducts] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
      setFilterProducts(response.data);
    };
    fetchProducts();
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addtoCart(product));
    alert(`${product.title} added to cart!`);
  };

  // const handleSearch = (searchitem) => {
  //     if (searchitem === "") {
  //         setFilterProducts(product);
  //     } else {
  //         const filteredproduct = product.filter((product => {
  //             product.title.toLowerCase().includes(search.toLowerCase())
  //         }));
  //         setFilterProducts(filteredproduct);
  //     }
  // }
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-between gap-6 ">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-xl bg-white"
          >
            <Link href={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-[200px] h-[200px] mx-auto"
              />
              <h2 className="text-[25px] font-semibold mt-3">
                {product.title}
              </h2>
              <p className="text-[15px] mt-2 text-gray-500">
                {product.description}
              </p>
              <p className="text-xl font-semibold mt-3">
                {product.price.toFixed(2)}
              </p>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading Products....</p>
      )}
    </div>
  );
};

export default Product;
