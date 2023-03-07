import Surreal from "https://deno.land/x/surrealdb@v0.5.0/mod.ts";

let db: Surreal | undefined

async function getDB(): Promise<Surreal> {
  if(db == undefined) {
    db = new Surreal("http://127.0.0.1:8000/rpc"); // ws://127.0.0.1:8000/rpc
    await db.signin({
      user: "root",
      pass: "root",
    });
    await db.use("test", "test");
    console.log("started");
  }
  return db
}

export default getDB
