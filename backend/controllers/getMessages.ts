import { Response } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { selectAll } from "../repositories/testmessages.ts";

export default async ({ response }: {response: Response}) => {
  response.body = await selectAll();
};