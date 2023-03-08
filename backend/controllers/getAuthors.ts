import { Response } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { selectAll, deleteA } from "../repositories/authors.ts";

export default async ({ response }: {response: Response}) => {
  console.debug("getAuthors")

  // for (const m of await selectAll()) {
  //   deleteA(m.id)
  // }

  response.body = await selectAll();
};