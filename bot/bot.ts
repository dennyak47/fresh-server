import { Bot } from "grammy/mod.ts";

// Create bot object
const bot = new Bot(Deno.env.get("BOT_TOKEN")!); // <-- place your bot token inside this string

// Listen for messages
bot.command("start", (ctx) => ctx.reply("Welcome! Send me a photo!"));
bot.on("message:text", (ctx) => ctx.reply("That is text and not a photo! 新发布"));
bot.on("message:photo", (ctx) => ctx.reply("Nice photo! Is that you?"));
bot.on("edited_message", (ctx) =>
  ctx.reply("Ha! Gotcha! You just edited this!", {
    reply_to_message_id: ctx.editedMessage.message_id,
  })
);

// bot.start();
export default bot;
