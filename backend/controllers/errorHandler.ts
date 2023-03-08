import { Response } from "https://deno.land/x/oak@v12.1.0/mod.ts";

export default async (
  { response }: { response: Response },
  nextFn: () => Promise<unknown>,
) => {
  try {
    await nextFn();
  } catch (err) {
    response.status = 500;
    response.body = { msg: err.message };
  }
};
