import React, { useEffect, useState } from 'react'

// Arrange Data Type
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

function DayThree() {
  // State Trio
  const [users, setUsers] = useState<User[]>([]); // Data
  const [loading, setLoading] = useState(true); // Is that loading?
  const [error, setError] = useState(""); // Is that error?

  // Data Fetching
  useEffect(() => {
    const fetchUsers = async () => {
      try {

      } catch (err) {
        setError("Failed to fetch data");
      }
    }
  })
  return (
    <div>page</div>
  )
}

export default DayThree