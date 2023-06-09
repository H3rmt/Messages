import { Response } from "https://deno.land/x/oak@v12.1.0/mod.ts";

export default ({ response }: {response: Response}) => {
  response.status = 404;
  response.body = { msg: "Not Found" };
};
