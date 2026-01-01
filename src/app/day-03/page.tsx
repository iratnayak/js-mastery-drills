"use client";
import { useState, useEffect } from "react";

// 1. Data Type එක (අපිට එන Data වල හැඩය)
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

export default function DayThree() {
  // 2. The State Trio (Data, Loading, Error)
  const [users, setUsers] = useState<User[]>([]); // Data ටික
  const [loading, setLoading] = useState(true); // Loading ද?
  const [error, setError] = useState(""); // Error එකක්ද?

  // 3. Fetching Logic (Data ගන්න තැන)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // A. API එකට Call කරනවා (මේක බොරු Users ලා දෙන Free API එකක්)
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // B. Data ටික JSON විදිහට කඩාගන්නවා
        const data = await response.json();

        // C. State එකට දානවා
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch data. Please check internet.");
      } finally {
        // D. මොනවා වුණත් අන්තිමට Loading එක නවත්වනවා
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // [] දැම්මාම මේක Run වෙන්නේ Page එක Load වෙනකොට විතරයි.

  // 4. Loading UI (බඩු එනකම්)
  if (loading)
    return (
      <div className="p-10 flex justify-center text-blue-600 text-xl font-bold animate-pulse">
        ⏳ Loading Users...
      </div>
    );

  // 5. Error UI (වැරදුණොත්)
  if (error)
    return (
      <div className="p-10 text-red-600 text-xl font-bold text-center">
        ❌ Error: {error}
      </div>
    );

  // 6. Success UI (Data ටික පෙන්වීම)
  return (
    <div className="p-10 font-sans max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-8 text-center">
        Day 03: API Data Fetching
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white border-gray-200"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {user.name}
            </h2>
            <p className="text-gray-600 mb-1">📧 {user.email}</p>
            <a
              href={`http://${user.website}`}
              target="_blank"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              🌐 {user.website}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
