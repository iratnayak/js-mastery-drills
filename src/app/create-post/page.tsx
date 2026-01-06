"use client";

import React, { useState } from 'react'

function CreatePost() {
    // 01. Manage State
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    // 02. Submit Function
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() // refresh the page
        alert(`Post Created! \nTitle: ${title} \nAuthor: ${author} \nContent: ${content}`);

        // 03. Clear State
        setTitle("");
        setAuthor("");
        setContent("");
    }
  return (
    <div className='p-10 mx-w-xl mx-auto font-sans'>
        <h1 className='text-3xl font-bold text-white mb-8'>Create a New Post ✍️</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label className='block font-bold mb-1'>Title</label>
                <input
                type='text'
                className='w-full p-3 border rounded-lg text-amber-500 focus:border-green-900 outline-none'
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </div>
            <div>
                <label className='block font-bold mb-1'>Author</label>
                <input
                type='text'
                className='w-full p-3 border rounded-lg text-amber-500 focus:border-green-900 outline-none'
                placeholder="Enter Author Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                />
            </div>
            <div>
                <label className='block font-bold mb-1'>Content</label>
                <textarea
                className='w-full p-3 border rounded-lg text-amber-500 focus:border-green-800 outline-none h-32'
                placeholder='Write your content here...'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                />
            </div>
            <button className='bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition'>Publish Post</button>
        </form>
    </div>
  )
}

export default CreatePost