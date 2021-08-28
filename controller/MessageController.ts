import { Conversation } from "../conversation/Conversation";

type SendMessageFunction = (a: string) => void;

interface Dictionary<T> {
  [Key: string]: T;
}

const conversations: Dictionary<Conversation> = {};

export function onReceiveMessage(id: string, author: string, message: string, sendMessage: SendMessageFunction): void {
  console.log(`Received from ${author} this: ${message}`);
  if (conversations[id] == undefined) {
    conversations[id] = new Conversation(id, author);
  }
  sendMessage(conversations[id].sendInput(message));
}