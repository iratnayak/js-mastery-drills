"use client";
import React, { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  website: string;
}

function TaskOne() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoadData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Data Fetching error, Please check your internet connection!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 font-sans mx-w-6xl mx-auto">
      <h2 className="font-bold font-mono text-center text-amber-700">
        Click The Button and Get The Data for Users
      </h2>
      <br />
      <div className="flex justify-center items-center">
        <button
          onClick={handleLoadData}
          disabled={loading}
          className={`font-mono p-5 text-black border border-amber-700 rounded-2xl transition
            ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white hover:bg-amber-700 hover:text-white"
            }`}
        >
          Load Users
        </button>
        {error && <p className="text-red-500 font-bold">{error}</p>}
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition bg-white border-gray-500"
          >
            <h2 className="mb-2 text-xl font-bold text-green-800">
              {user.name}
            </h2>
            <p className="mb-4 text-yellow-800 text-sm break-all">
              {user.email}
            </p>
            <a
              href={`http://${user.website}`}
              className="text-gray-500  hover:underline text-sm font-medium mb-1"
              target="_blank"
            >
              {user.website}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskOne;
