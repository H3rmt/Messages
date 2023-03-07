import getDB from "../db/database.ts";
import { CreateMessage, Message } from "../db/types.ts";

async function createM(message: CreateMessage) {
  const db = await getDB();
  const newMessage: Message = Object.assign(message, {id: crypto.randomUUID()})
  const created = await db.create("message", newMessage);
  console.log(created);
}

async function selectAll(): Promise<Message[]> {
  const db = await getDB();
  const messages: Message[] = await db.select("message");
  console.log(messages);
  return messages;
}

async function selectAfter(date: number): Promise<Message[]> {
  const db = await getDB();
  const messages: Message[] = await db.select("message");
  console.log(date);
  console.log(messages);
  const filtered: Message[] = messages.filter(m => m.date > date)
  console.log(filtered);
  console.log("UWUUW");
  
  return filtered;
}

async function deleteM(id: string) {
  const db = await getDB();
  const created = await db.delete(`${id}`);
  console.log(created);
}

// https://blog.logrocket.com/how-to-create-rest-api-deno-postgres/

export {
  createM,
  selectAll,
  deleteM,
  selectAfter
}