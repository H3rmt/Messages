import { Message } from "../db/types.ts";

let messages: Message[] = [];

async function createM(message: Message) {
  messages.push(message);
  console.log("created");
}

async function selectAll(): Promise<Message[]> {
  return messages;
}

async function deleteM(id: number) {
  messages = messages.filter((mess) => mess.id != id);
  console.log(messages);
}

// https://blog.logrocket.com/how-to-create-rest-api-deno-postgres/

export { createM, deleteM, selectAll };
