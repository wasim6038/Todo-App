import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import TodoDeleteBtn from "./TodoDeleteBtn";
import { getTodos } from "@/app/action";

export default async function TodoList() {
  const todos = await getTodos();

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="flex justify-between items-center p-4 my-3 border-grey-300 border rounded-lg gap-5"
        >
          <div>
            <h2 className="text-xl font-bold">{todo.title}</h2>
            <p>{todo.description}</p>
          </div>

          <div className="flex gap-3">
            <TodoDeleteBtn id={todo._id.toString()} />
            <Link href={`/editTodo/${todo._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
