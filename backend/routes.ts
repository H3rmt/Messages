import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import getMessages from "./controllers/getMessages.ts";
import createMessage from "./controllers/createMessage.ts";
import getNewMessages from "./controllers/getNewMessages.ts";
import getAuthors from "./controllers/getAuthors.ts";
import createAuthor from "./controllers/createAuthor.ts";

const router = new Router();

router
  .get("/messages/all", getMessages)
  .get("/messages/getNew/:date", getNewMessages)
  .post("/messages/new", createMessage)
  .get("/authors/all", getAuthors)
  .post("/authors/new", createAuthor)

export default router;
