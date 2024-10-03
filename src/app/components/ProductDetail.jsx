"use client"; // Ensure this component is treated as a client component
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "@/redux/CartSlice";
import { useParams } from "next/navigation"; // Import useParams

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from URL parameters
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        // Check if id is available
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addtoCart(product));
      alert(`${product.title} added to cart!`);
    }
  };

  return (
    <div className="m-10 p-4">
      {product ? (
        <div className="border  p-5 rounded-lg shadow-xl bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="w-[400px] mx-auto h-[400px] object-cover"
          />
          <h2 className="text-[25px] font-semibold mt-3">{product.title}</h2>
          <p className="text-[15px] mt-2 text-gray-500">
            {product.description}
          </p>
          <p className="text-xl font-semibold mt-3">
            {product.price.toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Loading Product Details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
