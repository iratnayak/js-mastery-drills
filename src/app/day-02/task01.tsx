"use client";
import React, { useState } from "react";

function TaskOne() {
  const [cart, setCart] = useState([
    { id: 1, name: "Monitor", price: 50000, qty: 2 },
    { id: 2, name: "Mouse", price: 5000, qty: 5 },
    { id: 3, name: "Keyboard", price: 10000, qty: 1 },
  ]);

  const calculateGrandTotal = () => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);
  };

  return (
    <div className="p-10 font-sans max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-amber-600 mb-6">
        Task - 01 - Array Reduce
      </h1>
      <div className="border rounded-lg bg-white border-amber-600 text-black p-6">
        <h2 className="font-semibold text-xl mb-4">Your Cart</h2>
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between p-3 rounded">
              <span>{item.name}</span>
              <span>{item.qty}</span>
              <span className="font-mono font-bold">
                LKR{item.price.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center border-t pt-4">
          <span className="text-xl font-bold text-gray-700">
            Total Amount:{" "}
          </span>
          <span className="text-2xl font-bold text-green-600">
            LKR {calculateGrandTotal().toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskOne;
