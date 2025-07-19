'use server';

import { connectToDB } from '@/libs/mongodb';
import { redirect } from 'next/navigation';

export async function createTodo(formData) {
    const title = formData.get('title');
    const description = formData.get('description');
    const db = await connectToDB();
    const todos = db.collection('todos');

    await todos.insertOne({ title, description });

    redirect('/');
}