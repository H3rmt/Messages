import getDB from "../db/database.ts";
import { CreateMessage, Message } from "../db/types.ts";

async function createM(message: CreateMessage): Promise<Message> {
  const db = await getDB();
  const newMessage: Message = Object.assign(message, {id: crypto.randomUUID(), date: new Date().getTime()})
  // console.log(newMessage);
  const created = await db.create("message", newMessage);
  return created
}

async function selectAll(): Promise<Message[]> {
  const db = await getDB();
  const messages: Message[] = await db.select("message");
  // console.log(messages); 
  return messages;
}

async function selectAfter(date: number): Promise<Message[]> {
  const db = await getDB();
  const messages: Message[] = await db.select("message");
  const filtered: Message[] = messages.filter(m => m.date > date)
  // console.log(filtered);
  
  return filtered;
}

async function deleteM(id: string) {
  const db = await getDB();
  const delted = await db.delete(`${id}`);
  // console.log(created);
}

// https://blog.logrocket.com/how-to-create-rest-api-deno-postgres/

export {
  createM,
  selectAll,
  deleteM,
  selectAfter
}