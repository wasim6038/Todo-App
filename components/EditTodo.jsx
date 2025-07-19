"use client";
import { updateTodo } from "@/app/editTodo/[id]/action";

export default function EditTodo({ todo }) {
  const updateTodoWithId = updateTodo.bind(null, todo._id);
  return (
    <form
      action={updateTodoWithId}
      className="flex flex-col gap-3"
    >
      <input
        className="border border-grey-300 px-6 py-2 rounded"
        type="text"
        name="title"
        placeholder="Enter Todo Title"
        defaultValue={todo.title}
        required
      />

      <input
        className="border border-grey-300 px-6 py-2 rounded"
        type="text"
        name="description"
        placeholder="Enter Todo Description"
        defaultValue={todo.description}
        required
      />

      <button className="bg-green-500 text-white px-4 py-1 rounded w-fit hover:bg-green-600">
        Update Todo
      </button>
    </form>
  );
}
