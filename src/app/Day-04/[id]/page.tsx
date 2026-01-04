import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

interface Props {
  params: Promise<{ id: string }>;
}

async function UserProfile({ params }: Props) {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user: User = await response.json();

  return (
    <div className="p-10 max-w-2xl mx-auto mt-10 font-sans">
      <Link
        href={"/day-04"}
        className="text-blue-500 hover:underline inline-block mb-5"
      >
        ← Back to Users
      </Link>
      <div className="border-2 border-blue-500 rounded-2xl p-8 bg-white shadow-xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">{user.name}</h1>
        <p className="text-gray-500 text-lg mb-6">@{user.company.name}</p>
      </div>
      <div className="mt-4 space-y-2">
        <p>
          <strong>📧 Email:</strong> {user.email}
        </p>
        <p>
          <strong>📞 Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>🌐 Website:</strong> {user.website}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
