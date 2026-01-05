import Link from "next/link";

interface List {
  id: number;
  title: string;
  completed: boolean;
}

async function TodoList() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=20"
  );
  const lists: List[] = await response.json();

  return (
    <div className="p-10 max-w-6xl font-sans mx-auto">
      <h1 className="text-center font-bold text-3xl mb-10 text-blue-600">
        To Do List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {lists.map((list) => (
          <div
            key={list.id}
            className="p-5 border-2 rounded-xl shadow-sm hover:shadow-xl transition px-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2 capitalize">
                {list.title}
              </h2>
              <p
                className={`text-sm font-bold ${
                  list.completed ? "text-green-600" : "text-orange-500"
                }`}
              >
                {list.completed ? "✅ Completed" : "⏳ Pending"}
              </p>
            </div>
            <div className="mt-4 text-sm font-mono">
              <Link
                href={`/todos/${list.id}`}
                className="text-blue-500 hover:text-blue-800 font-bold"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
