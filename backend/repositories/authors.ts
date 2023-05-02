import getDB from "../db/database.ts";
import { Author, CreateAuthor, DBAuthor } from "../db/types.ts";

async function createA(author: CreateAuthor): Promise<DBAuthor> {
  const db = await getDB();
  const newAuthor: DBAuthor = Object.assign(author, {
    id: crypto.randomUUID(),
  });
  const created = await db.create("user", newAuthor);
  return created;
  // console.log(created);
}

async function getAuthor(id: string): Promise<DBAuthor | undefined> {
  const db = await getDB();
  const author: DBAuthor | undefined = (await db.select(id))[0];
  return author;
}

async function selectAll(): Promise<DBAuthor[]> {
  const db = await getDB();
  const authors: DBAuthor[] = await db.select("user");
  // console.log(authors);
  return authors;
}

async function deleteA(id: string) {
  const db = await getDB();
  const deleted = await db.delete(`${id}`);
  // console.log(deleted);
}

export { createA, deleteA, getAuthor, selectAll };
