import { MongoClient } from 'mongodb';

let client;
let db;

export async function connectToDB() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db('todo-app');
  }
  return db;
}

