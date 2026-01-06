import React, { useState } from 'react'

function CreatePost() {
    // 01. Manage State
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 02. Submit Function
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() // refresh the page
        alert(`Post Created! \nTitle: ${title} \nContent: ${content}`);

        // 03. Clear State
        setTitle("");
        setContent("");
    }
  return (
    <div>page</div>
  )
}

export default CreatePost