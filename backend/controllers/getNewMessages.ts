import { Request, Response } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { getQuery } from "https://deno.land/x/oak@v12.1.0/helpers.ts"
import { selectAfter } from "../repositories/messages.ts";
import { Context } from "https://deno.land/x/oak@v12.1.0/context.ts";

export default async (ctx: Context) => {
  const query = getQuery(ctx, { mergeParams: true });
  const date = Number(query['date'])
  // console.debug("getNewMessages")
  ctx.response.body = await selectAfter(date);
};