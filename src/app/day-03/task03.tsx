"use client";
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

function TaskThree() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState(""); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);


  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase()); // Serch Logic
  });

  return (
    <div className="p-10 max-w-2xl mx-auto font-sans">
      <h1 className="text-2xl font-bold text-center mb-5 text-purple-600">
        User Search 🔍
      </h1>

      {/* Search Input Box */}
      <input
        type="text"
        placeholder="Search users by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border-2 border-purple-300 rounded-lg mb-8 focus:outline-none focus:border-purple-600 text-white"
      />

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ul className="space-y-3">
          {/* We map filteredUsers  */}
          {filteredUsers.map((user) => (
            <li key={user.id} className="p-4 bg-white border rounded-lg shadow-sm flex justify-between items-center text-black">
              <span className="font-bold">{user.name}</span>
              <span className="text-gray-500 text-sm">{user.email}</span>
            </li>
          ))}
          
          {/* Serch data Empty*/}
          {filteredUsers.length === 0 && (
             <p className="text-center text-red-500">No users found!</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default TaskThree;