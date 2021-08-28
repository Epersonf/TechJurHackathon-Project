import { Context, Telegraf } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import { onReceiveMessage } from "../controller/MessageController";

export function initializeBot(token: string): void {
  const bot: Telegraf<Context<Update>> = new Telegraf(token);
  
  bot.on("text", (content, next) => {
    const from = content.from;

    onReceiveMessage(`${from.id}-Telegram`, `${from.first_name} ${from.last_name}`, content.message.text, (s: string) => content.reply(s));

    next();
  });

  bot.launch();
}
