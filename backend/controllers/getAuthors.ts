import { Response } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { deleteA, selectAll } from "../repositories/authors.ts";
import { isOnline } from "../repositories/online.ts";

export default async ({ response }: { response: Response }) => {
  // console.debug("getAuthors")

  // for (const m of await selectAll()) {
  //   deleteA(m.id)
  // }

  const authors = await selectAll();
  response.body = authors.map((author) => {
    return Object.assign(author, { online: isOnline(author.id) });
  });
};
