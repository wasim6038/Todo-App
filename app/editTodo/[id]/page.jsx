import EditTodo from "@/components/EditTodo";
import { connectToDB } from "@/libs/mongodb";
import { ObjectId } from "mongodb";

export async function getTodoById(id) {
  const db = await connectToDB();
  const todos = db.collection('todos');
  return await todos.findOne({ _id: new ObjectId(id) });
}

export default async function editTodo({ params }) {
    const id = await params.id;
    const todo = await getTodoById(id);

    const serializedTodo = {
        ...todo,
        _id: todo._id.toString(),
    };
    return <EditTodo todo={serializedTodo} />;
}