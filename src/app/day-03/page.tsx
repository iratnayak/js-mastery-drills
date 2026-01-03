"use client";
import React, { useEffect, useState } from "react";

// 1. Arrange data type
interface User {
  id: string;
  name: string;
  email: string;
  website: string;
}

function DayThree() {
  // 2. Set for state users, loading, error
  const [users, setUsers] = useState<User[]>([]); // Manage the users data
  const [loading, setLoading] = useState(true); // Manage the loading
  const [error, setError] = useState(""); // Manage Errror

  // 3. Fetching Data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // A. Call API Key
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // B. Change The Data Like JSON
        const data = await response.json();
        // C. Add to State
        setUsers(data);
      } catch (err) {
        setError(
          "Failed to featching data, Please check your internet connection!"
        );
      } finally {
        // However Stop The Loading
        setLoading(false);
      }
    };
    fetchUser();
  }, []); // Why I'm using [] becuse I need to load the data only for page refresh

  // 4. Loading UI
  if (loading)
    return (
      <div className="p-10 flex justify-center text-blue-600 text-xl font-bold animate-pulse">
        Loading Users...
      </div>
    );

  // 5. Error
  if (error)
    return (
      <div className="p-10 text-red-500 text-xl font-bold text-center">
        Error: {error}
      </div>
    );

  // 6. Success UI
  return (
    <div className="p-10 font-sans max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-500 mb-8 text-center">
        Day - 03 API Fetching
      </h1>

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

export default DayThree;
