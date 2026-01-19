import DeleteButton from "@/components/DeleteButton";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const revalidate = 0;

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">Latest Posts 📚</h1>
        <Link
          href="/create-post"
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-bold transition"
        >
          + Create Post
        </Link>
      </div>

      {posts.length === 0 && (
        <p className="text-gray-500">No posts found. Start by creating one!</p>
      )}

      <div className="grid gap-6">
        {posts.map((post: any) => (
          <div key={post.id} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-bold text-green-400">{post.title}</h2>
              <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{post.category}</span>
            </div>
            <p className="text-gray-300 mb-4 line-clamp-3">{post.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>By {post.author}</span>
              <div className="flex gap-4 items-center mt-4">
                <Link href={`/edit-post/${post.id}`} className="text-blue-500 hover:text-blue-300 text-sm font-medium">Edit</Link>
              </div>
              <DeleteButton postId={post.id}/>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
          </div>
        ))}
      </div>

    </main>
  );
}
