import Link from "next/link";

interface Post {
  id: number;
  body: string;
  title: string;
}

interface Props {
  params: Promise<{ id: string }>;
}

async function BlogTitle({ params }: Props) {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: Post = await response.json();

  return (
    <div className="p-10 max-w-2xl mx-auto mt-10 font-sans">
      <Link
        href={"/posts"}
        className="text-blue-500 hover:underline inline-block mb-5"
      >
        ← Back to Blog
      </Link>
      <div className="border-2 border-blue-500 rounded-2xl p-8 bg-white shadow-xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">{post.title}</h1>
        <p className="text-gray-500 text-lg mb-6">{post.body}</p>
      </div>
    </div>
  );
}

export default BlogTitle;
