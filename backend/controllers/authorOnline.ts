import { Request, Response } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { setOnline } from "../repositories/online.ts";

export default async (
  { request, response }: { request: Request; response: Response },
) => {
  // console.debug("setOnline");
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "no Message Body" };
    return;
  }

  const id: string = await request.body({ type: "json" }).value;
  setOnline(id);

  response.body = { msg: "Author online" };
};
