import { Message, CreateMessage } from "../db/types.ts";

let messages: Message[] = [];

async function createM(message: CreateMessage) {
  const newMessage: Message = Object.assign(message, {id: crypto.randomUUID()})
  messages.push(newMessage);
  console.log("created: ", newMessage);
}

async function selectAll(): Promise<Message[]> {
  return messages;
}

async function deleteM(id: string) {
  messages = messages.filter((mess) => mess.id != id);
  console.log(messages);
}

// https://blog.logrocket.com/how-to-create-rest-api-deno-postgres/

export { createM, deleteM, selectAll };
