'use server';

import { connectToDB } from '@/libs/mongodb';
import { ObjectId } from 'mongodb';

// READ
export async function getTodos() {
    const db = await connectToDB();
    const todos = db.collection('todos');

    return await todos.find().toArray();
}

// DELETE
export async function deleteTodo(id) {
  const db = await connectToDB();
  const todos = db.collection('todos');

  await todos.deleteOne({ _id: new ObjectId(id) });
}
