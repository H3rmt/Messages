import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import getMessages from "./controllers/getMessages.ts";
import createMessage from "./controllers/createMessage.ts";
import getNewMessages from "./controllers/getNewMessages.ts";

const router = new Router();

router
  .get("/messages/all", getMessages)
  .get("/messages/getNew/:date", getNewMessages)
  .post("/messages/new", createMessage);

export default router;
