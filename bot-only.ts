import bot from "./bot/bot.ts";
console.log("deleting web hook");
await bot.api.deleteWebhook();
console.log("delete web hook successfully");
console.log("starting bot");
bot.start();
