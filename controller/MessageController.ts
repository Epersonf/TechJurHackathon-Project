type SendMessageFunction = (a: string) => void;

export function onReceiveMessage(id: string, author: string, message: string, sendMessage: SendMessageFunction): void {
  console.log(`Received from ${author} this: ${message}`);
  sendMessage(`Olá, ${author}, eu sou ${process.env.BOT_NAME}!`);
}