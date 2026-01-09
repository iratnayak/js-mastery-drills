"use client";

import React, { useState } from "react";

function CreatePost() {
  // 01. Manage State
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // 02. Submit Function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // refresh the page

    // 03. Clear State
    setError("");
    setSuccess(false);

    // Validation Title length check
    if (title.length < 5) {
      setError("Title must be at least 5 characters long");
      return;
    }

    // validation category not empty
    if (category.trim() === "") {
      setError("Category is required");
      return;
    }

    // validation author length check
    if (author.length < 3) {
      setError("Author must be at least 3 characters long");
      return;
    }

    // validation content length check
    if (content.length < 20) {
      setError("Content must be at least 20 characters long");
      return;
    }
    try {
      // parsing data to backend using fetch API
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, category, content }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Server response:", result);

        setSuccess(true);
        // Reset fields
        setTitle("");
        setAuthor("");
        setCategory("");
        setContent("");
      } else {
        setError("Something went wrong on the server.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div className="p-10 mx-w-xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-white mb-8">
        Create a New Post ✍️
      </h1>

      {error && (
        <div className="bg-red-500 text-white p-3 rounded-lg mb-4">{error}</div>
      )}
      {success && (
        <div className="bg-green-500 text-white p-3 rounded-lg mb-4">
          Post Created Successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-bold mb-1">Title</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg text-amber-500 focus:border-green-900 outline-none"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Category</label>
          <select
            className="w-full p-3 border rounded-lg text-amber-500 focus:border-green-900 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Health">Health</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block font-bold mb-1">Author</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg text-amber-500 focus:border-green-900 outline-none"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Content</label>
          <textarea
            className="w-full p-3 border rounded-lg text-amber-500 focus:border-green-800 outline-none h-32"
            placeholder="Write your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition">
          Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
