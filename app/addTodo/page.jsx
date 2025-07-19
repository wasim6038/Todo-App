import { createTodo } from "@/app/addTodo/action";

export default function addTodo() {
  return (
    <form action={ createTodo } className="flex flex-col gap-3">
      <input
        className="border border-grey-300 px-6 py-2 rounded"
        type="text"
        name="title"
        placeholder="Enter Todo Title"
      />

      <input
        className="border border-grey-300 px-6 py-2 rounded"
        type="text"
        name="description"
        placeholder="Enter Todo Description"
      />

      <button className="bg-green-500 text-white px-4 py-1 rounded w-fit hover:bg-green-600">
        Add Todo
      </button>
    </form>
  );
}
