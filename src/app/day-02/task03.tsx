

////
"use client";
import React, { useState } from "react";

function DayTow() {
  const [cart, setCart] = useState([
    { id: 1, name: "Apple MacBook", price: 200000 },
    { id: 2, name: "Samsung Galaxy", price: 150000 },
    { id: 3, name: "Sony Headphones", price: 30000 },
  ]);

  // Using Reduce to Calculate Total
  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  };
  return (
    <div className="p-10 font-sans max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-amber-700 mb-6">
        Day 02: Array Reduce
      </h1>
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <div className="space-y-3 mb-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-3 bg-gray-50 rounded"
            >
              <span>{item.name} - </span>
              <span className="font-mono font-bold">
                LKR {item.price.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-xl font-bold text-gray-700">Total Amount:</span>
          <span className="text-2xl font-bold text-green-600">
            LKR {calculateTotal().toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DayTow;
