"use client";
import { removeFromCart } from "@/redux/CartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="m-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 mb-4 rounded-lg shadow-md bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[100px] h-[100px] object-cover"
            />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItems;
