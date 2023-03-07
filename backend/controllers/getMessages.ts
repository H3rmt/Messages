import { Response } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { selectAll, deleteM } from "../repositories/messages.ts";

export default async ({ response }: {response: Response}) => {
  console.debug("getMessages")

  // for (const m of await selectAll()) {
  //   deleteM(m.id)
  // }

  response.body = await selectAll();
};