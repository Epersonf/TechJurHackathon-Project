import { Conversation } from "../conversation/Conversation";

type SendMessageFunction = (a: string) => void;

interface Dictionary<T> {
  [Key: string]: T;
}

const conversations: Dictionary<Conversation> = {};

export function onReceiveMessage(id: string, author: string, message: string, sendMessage: SendMessageFunction): void {
  console.log(`Received from ${author} this: ${message}`);
  sendMessage(`Olá, ${author}, eu sou ${process.env.BOT_NAME}! Digite seu CPF para eu consultar seu registro na ABC Advocacia:`);
  conversations[id] = new Conversation(id);
}