"use client";

import React, { useState } from "react";

function TaskTwo() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Kamal", hours: 5, rate: 1000 },
    { id: 2, name: "Nimal", hours: 2, rate: 2000 },
    { id: 3, name: "Sunil", hours: 10, rate: 500 },
  ]);

  const calculateTotalOT = () => {
    return employees.reduce((acc, item) => {
      return acc + item.hours * item.rate;
    }, 0);
  };
  return (
    <div className="p-10 font-sans max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-cyan-400">
        Array Reduce Task - 02 Salary Calculation
      </h1>
      <div className="border  p-6 rounded-lg shadow-lg bg-white">
        <h2 className="flex justify-center items-center text-xl font-bold text-fuchsia-950 ">
          Employees Table
        </h2>
        <div className="space-y-2 mb-6">
          {employees.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-3 text-amber-900 rounded"
            >
              <span>{item.name}</span>
              <span>{item.hours} H</span>
              <span className="font-mono">
                LKR {item.rate.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-black pt-4">
          <span className="text-black">Total Amount of Salary:</span>
          <span className="text-green-900 font-bold">
            LKR {calculateTotalOT().toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskTwo;
