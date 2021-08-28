import { Context, Telegraf } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import { onReceiveMessage } from "../controller/MessageController";

export function initializeBot(token: string): void {
  const bot: Telegraf<Context<Update>> = new Telegraf(token);
  
  bot.start((content) => {
    console.log(content.from.first_name);
  });

  bot.on("text", (content, next) => {
    const from = content.from;
    let buildName: string = from.first_name;
    if (from.last_name)
      buildName += " " + from.last_name;
    onReceiveMessage(`${from.id}-Telegram`, buildName, content.message.text, (s: string) => content.reply(s));

    next();
  });

  bot.launch();
}
