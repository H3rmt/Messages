import { createA } from "../repositories/authors.ts";
import { Request, Response } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { CreateAuthor } from "../db/types.ts";
import { setOnline } from "../repositories/online.ts";

export default async (
  { request, response }: { request: Request; response: Response },
) => {
  console.debug("createAuthor");
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "no Message Body" };
    return;
  }

  const createAuthor: CreateAuthor = await request.body({ type: "json" }).value;

  const author = await createA(createAuthor);
  setOnline(author.id);

  response.body = { msg: "Author created", data: Object.assign(author, {online: true}) };
};
