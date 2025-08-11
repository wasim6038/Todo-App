import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import TodoDeleteBtn from "./TodoDeleteBtn";
import { getTodos } from "@/app/action";

export default async function TodoList() {
  const todos = await getTodos();

  return (
    <div className="animate-fadeIn">
      {todos.map((todo, index) => (
        <div
          key={todo._id}
          className="flex justify-between items-center p-4 my-3 border-grey-300 border rounded-lg gap-5
                     shadow-md bg-white/80 backdrop-blur-sm
                     transform transition-all duration-300
                     hover:scale-[1.02] hover:shadow-lg animate-slideUp"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <div>
            <h2 className="text-xl font-bold text-gray-800">{todo.title}</h2>
            <p className="text-gray-600">{todo.description}</p>
          </div>

          <div className="flex gap-3">
            <TodoDeleteBtn id={todo._id.toString()} />
            <Link href={`/editTodo/${todo._id}`}>
              <HiPencilAlt
                size={24}
                className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
