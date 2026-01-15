"use client";
import { useRouter } from "next/navigation";
import React from "react";

function DeleteButton({ postId }: { postId: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this post?")) {
      const res = await fetch(`api/posts/${postId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-400 text-sm font-medium"
    >
      Delete
    </button>
  );
}

export default DeleteButton;
