import Link from "next/link";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Prop {
  params: Promise<{ id: string }>;
}

async function List({ params }: Prop) {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const todos: Todo = await response.json();

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <Link
        href={"/todos"}
        className="text-amber-500 hover:underline mb-5 inline-block"
      >
        {" "}
        ← Back to Todo
      </Link>
      <h1 className="text-2xl font-bold mb-8">List No: {id} - List</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="border-2 p-2 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2 capitalize">
            {todos.title}
          </h2>
          <p
            className={`text-sm font-bold ${
              todos.completed ? "text-green-600" : "text-orange-500"
            }`}
          >
            Status: {todos.completed ? "Completed" : "Pending"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default List;
