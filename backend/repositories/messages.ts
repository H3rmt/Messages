import getDB from "../db/database.ts";
import { Message } from "../db/types.ts";

async function createM(message: Message) {
  const db = await getDB();
  const created = await db.create("message", message);
  console.log(created);
}

async function selectAll(): Promise<Message[]> {
  const db = await getDB();
  const messages: Message[] = await db.select("message");
  return messages;
}

async function deleteM(id: number) {
  const db = await getDB();
  const created = await db.delete(`message:${id}`);
  console.log(created);
}

// https://blog.logrocket.com/how-to-create-rest-api-deno-postgres/

export {
  createM,
  selectAll,
  deleteM
}