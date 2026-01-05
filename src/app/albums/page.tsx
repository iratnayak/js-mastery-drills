import Link from "next/link";
import React from "react";

interface Album {
  id: number;
  title: string;
}

async function AlbumPage() {
  // Create Server component featching API
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums: Album[] = await response.json();

  return (
    <div className="p-10 max-w-4xl font-sans mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        The Album Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="p-6 border-2 border-amber-500 text-xl font-bold rounded-xl hover:shadow-lg transition"
          >
            {album.title}
            <div className="text-sm font-mono py-2">
              <Link
                href={`/albums/${album.id}`}
                className="text-shadow-amber-200 hover:underline hover:text-yellow-600"
              >
                {" "}
                View Image →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumPage;
