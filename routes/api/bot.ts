import { webhookCallback } from "grammy/mod.ts";
import { HandlerContext } from "$fresh/server.ts";
import bot from "../../bot/bot.ts";
const handleUpdate = webhookCallback(bot, "std/http");
export const handler = {
  async POST(req: Request, _ctx: HandlerContext): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname.slice(1) === bot.token) {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
    return new Response("didn't handled");
  },
};
