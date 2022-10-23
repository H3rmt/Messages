import Surreal from "https://deno.land/x/surrealdb@v0.5.0/mod.ts";

const db = new Surreal("ws://127.0.0.1:8000/rpc");
await db.signin({
  user: "root",
  pass: "root",
});
await db.use("test", "test");

await db.ping()

const created = await db.create("person", {
  title: "Founder & CEO",
  name: {
    first: "Tobie",
    last: "Morgan Hitchcock",
  },
  marketing: false,
});

console.log(created);

db.close();
