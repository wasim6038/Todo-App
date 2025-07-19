'use server';

import { connectToDB } from '@/libs/mongodb';
import { ObjectId } from 'mongodb';
import { redirect } from 'next/navigation';

export async function updateTodo(id, formData) {
    const title = formData.get('title');
    const description = formData.get('description');

    const db = await connectToDB();
    const todos = db.collection('todos');

    await todos.updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, description } }
    );

    redirect('/');
}
