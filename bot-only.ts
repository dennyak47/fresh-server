import bot from "./bot/bot.ts";
await bot.api.deleteWebhook();
bot.start();
