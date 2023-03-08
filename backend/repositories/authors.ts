import getDB from "../db/database.ts";
import { CreateAuthor, Author } from "../db/types.ts";

async function createA(author: CreateAuthor): Promise<Author> {
  const db = await getDB();
  const newAuthor: Author = Object.assign(author, {id: crypto.randomUUID()})
  const created = await db.create("user", newAuthor);
  return created
  // console.log(created);
}

async function selectAll(): Promise<Author[]> {
  const db = await getDB();
  const authors: Author[] = await db.select("user");
  // console.log(authors);
  return authors;
}

async function deleteA(id: string) {
  const db = await getDB();
  const created = await db.delete(`${id}`);
  // console.log(created);
}

export {
  createA,
  selectAll,
  deleteA
}