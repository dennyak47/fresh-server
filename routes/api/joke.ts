import { HandlerContext } from "$fresh/server.ts";
// import * as postgres from "postgres/mod.ts";
// // Get the connection string from the environment variable "DATABASE_URL"
// const databaseUrl = Deno.env.get("DATABASE_URL")!;
// console.log("databaseUrl", databaseUrl);

// // Create a database pool with three connections that are lazily established
// const pool = new postgres.Pool(databaseUrl, 3, true);

// // Connect to the database
// const connection = await pool.connect();
// try {
//   // Create the table
//   await connection.queryObject`
//     CREATE TABLE IF NOT EXISTS todos (
//       id SERIAL PRIMARY KEY,
//       title TEXT NOT NULL
//     )
//   `;
//   console.log("create table success");
// } finally {
//   // Release the connection back into the pool
//   connection.release();
//   console.log("disconnect database");
// }
// Jokes courtesy of https://punsandoneliners.com/randomness/programmer-jokes/
const JOKES = [
  "Why do Java developers often wear glasses? They can't C#.",
  "A SQL query walks into a bar, goes up to two tables and says “can I join you?”",
  "Wasn't hard to crack Forrest Gump's password. 1forrest1.",
  "I love pressing the F5 key. It's refreshing.",
  "Called IT support and a chap from Australia came to fix my network connection.  I asked “Do you come from a LAN down under?”",
  "There are 10 types of people in the world. Those who understand binary and those who don't.",
  "Why are assembly programmers often wet? They work below C level.",
  "My favourite computer based band is the Black IPs.",
  "What programme do you use to predict the music tastes of former US presidential candidates? An Al Gore Rhythm.",
  "An SEO expert walked into a bar, pub, inn, tavern, hostelry, public house.",
];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const randomIndex = Math.floor(Math.random() * JOKES.length);
  const body = JOKES[randomIndex];
  return new Response(body);
};
