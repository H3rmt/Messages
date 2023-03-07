import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./routes.ts";
import _404 from "./controllers/404.ts";
import errorHandler from "./controllers/errorHandler.ts";

const app = new Application();

app.use(
  oakCors({
    origin: true,   
    // origin: /^.+localhost:(7103|5127)$/,
    optionsSuccessStatus: 200,
  }),
);

// app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on ${APP_HOST}:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
