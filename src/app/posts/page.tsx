import Link from "next/link";
import React from "react";

interface Post {
  id: number;
  body: string;
}

async function BlogPost() {
  // Create Server Component Fetching Data
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return (
    <div className="p-10 max-w-4xl font-sans mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">
        Blog Post System
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 border-2 border-amber-950 rounded-xl hover:shadow-lg transition"
          >
            <p className="text-gray-800 mb-4">{post.body}</p>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-800 font-bold hover:underline"
            >
              View Title →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
