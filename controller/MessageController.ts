import { Conversation } from "../conversation/Conversation";
import { getTelegramKey } from "../text_states/LocalizationReader";

type SendMessageFunction = (a: string) => void;

interface Dictionary<T> {
  [Key: string]: T;
}

const getKeyFuncs: Dictionary<(a: string) => string>  = {
  "Telegram": getTelegramKey
};

const activeConversations: Dictionary<Conversation> = {};

export function onReceiveMessage(id: string, author: string, message: string, source: string, sendMessage: SendMessageFunction): void {
  console.log(`Received from ${author} this: ${message}`);
  if (activeConversations[id] == undefined) {
    activeConversations[id] = new Conversation(id, author, getKeyFuncs[source]);
  }
  sendMessage(activeConversations[id].sendInput(message)
    .replace("%author", author)
    .replace("%botName", process.env.BOT_NAME || "LawBot")
    .replace("%firmName", process.env.FIRM_NAME || "ABC")
  );
}