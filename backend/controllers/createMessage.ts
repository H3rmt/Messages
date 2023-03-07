import { createM } from "../repositories/messages.ts";
import { Request, Response } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { CreateMessage } from "../db/types.ts";

export default async ({ request, response }: { request: Request, response: Response }) => {
  console.debug("createMessage")
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "no Message Body" };
    return;
  }

  const message: CreateMessage = await request.body({ type: "json" }).value;

  // TODO check author

  const id = await createM(message);

  response.body = { msg: "Message created", id };
};
