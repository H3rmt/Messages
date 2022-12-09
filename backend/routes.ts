import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import getMessages from "./controllers/getMessages.ts";
import createMessage from "./controllers/createMessage.ts";

const router = new Router();

router
  .get("/messages", getMessages)
  .post("/messages", createMessage);

export default router;
