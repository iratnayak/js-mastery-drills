"use client";
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

export default function EditPostForm({ post }: { post: any }) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [category, setCategory] = useState(post.category);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch(`/api/posts/${post.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, content, category }),
        });
    
        if (res.ok) {
          router.push("/");
          router.refresh();
        }
      };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 text-white"
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 text-white h-32"
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        className="w-full p-2 rounded bg-gray-700 text-white"
      >
        <option value="Tech">Tech</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Education">Education</option>
      </select>
      <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded font-bold w-full transition">
        Update Post
      </button>
    </form>
  );
}
