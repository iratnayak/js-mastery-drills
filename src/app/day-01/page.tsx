"use client";
import React, { useState } from "react";

function DayOne() {
  // Created Filter Array.
  const [users, setUsers] = useState(["Amal", "Kamal", "Nimal", "Sunil"]);
  // Closuer private counter
  const [count, setCount] = useState(0);

  // Async Event Loop
  const [logs, setLogs] = useState<string[]>([]);

  // Stale Closure Challenge
  const [score, setScore] = useState(0);

  const runAsyncTest = () => {
    setLogs((prev) => [...prev, "1. Start"]); // Synchronous

    setTimeout(() => {
      setLogs((prev) => [...prev, "3. Timeout (Macrotask)"]); // Macrotask
    }, 0);

    Promise.resolve().then(() => {
      setLogs((prev) => [...prev, "2. Promise (Microtask)"]); // Macrotask
    });

    setLogs((prev) => [...prev, "4. End"]); // Synchronous
  };

  // Deleting 'Nimal' function
  const removeNimal = () => {
    const newUsers = users.filter((name) => name !== "Nimal");
    setUsers(newUsers);
  };

  // Get Snapshort after 3s
  const handleSnapshot = () => {
    setTimeout(() => {
      alert(`Snaphot taken! Score was: ${score}`);
    }, 3000);
  };

  return (
    <div className="p-10 space-y-8 max-w-xl mx-auto font-sans">
      <h1 className="text-2xl font-bold text-shadow-amber-100">
        Day 01: JS Fundamentals
      </h1>

      {/* Section 1: Arrays */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h2 className="font-semibold mb-2">1. Immutability (Filter)</h2>
        <div className="flex gap-2 mb-4">
          {/* Section 1: Map Arrays */}
          {users.map((user, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 text-black rounded-full"
            >
              {user}
            </span>
          ))}
        </div>
        <button
          onClick={removeNimal}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove Nimal
        </button>
      </div>

      {/* Section 2: Closures/State */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h2 className="font-semibold mb-2">2. Closure/State</h2>
        <p className="mb-2">Count: {count}</p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Increment
        </button>
      </div>

      {/* Section 3: Event Loop */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h2 className="font-semibold mb-2">3. Event Loop Test</h2>
        <button
          onClick={runAsyncTest}
          className="bg-purple-600 text-white px-4 py-2 rounded mb-2 hover:bg-purple-700"
        >
          Run Async Logic
        </button>
        <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
          {logs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>
      </div>

      {/* Section 4: The Closure Trap */}
      <div className="p-4 border rounded-lg shadow-sm">
        <h2 className="font-semibold mb-2">
          4. The Closure Trap (Stale State)
        </h2>
        <div className="text-4xl font-bold text-center mb-4">{score}</div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setScore((s) => s + 1)}
            className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-400 active:scale-95"
          >
            Increase Score
          </button>
          <button
            onClick={handleSnapshot}
            className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-600 active:scale-95 shadow-md"
          >
            Snapshot (Wait 3s)
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">Instructions: Click 📸, then quickly click ➕ many times. <br/>
        Watch what the alert says!</p>
      </div>
    </div>
  );
}

export default DayOne;
