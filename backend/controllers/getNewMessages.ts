import { Context, Request, Response } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { getQuery } from "https://deno.land/x/oak@v12.1.0/helpers.ts"
import { selectAfter } from "../repositories/messages.ts";

export default async (ctx: Context) => {
  const query = getQuery(ctx, { mergeParams: true });
  const date = Number(query['date'])
  // console.debug("getNewMessages")
  ctx.response.body = await selectAfter(date);
};

// client
// 13327463107680

// db
// 1682989358674