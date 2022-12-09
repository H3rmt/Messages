import { createM } from "../repositories/testmessages.ts";
import { Request, Response } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { Message } from "../db/types.ts";

export default async ({ request, response }: { request: Request, response: Response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "no Message Body" };
    return;
  }

  const body = await request.body({ type: "json" }).value;
  const message: Message = JSON.parse(await body)

  console.log(await request.body({ type: "json" }).value);
  console.log(message);

  // TODO check author

  const id = await createM(message);

  response.body = { msg: "Message created", id };
};
