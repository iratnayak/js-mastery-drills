"use client";

import React, { useState } from "react";

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

function TaskTwo() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoadData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=12"
      );
      const data = await response.json();
    } catch (err) {
      setError("Data Fetching error, Please check your internet connection!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-10 font-sans max-w-6xl mx-auto">
      <h1 className="font-bold font-mono text-cyan-400">
        Day 03 - Task 02 Data Fetching from Image Set
      </h1>
      <br />
      <div className="flex justify-center items-center">
        <button
          onClick={handleLoadData}
          disabled={loading}
          className={`font-mono font-bold p-5 text-black border border-cyan-400 rounded-2xl transition
            ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white hover:bg-cyan-400 hover:text-white hover:border-white"
            }`}
        >
          Load Photos
        </button>
        {error && <p className="text-red-500 font-bold">{error}</p>}
      </div>
    </div>
  );
}

export default TaskTwo;
