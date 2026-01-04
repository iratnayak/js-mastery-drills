import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

async function DayFour() {
  // Create Server Component Fetching Data
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <div className="p-10 max-w-4xl font-sans mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">
        Select a User to View Profile 👤
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-6 border-2 border-amber-950 rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-800 mb-4">{user.email}</p>
            <Link
              href={`/day-04/${user.id}`}
              className="text-blue-800 font-bold hover:underline"
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayFour;
