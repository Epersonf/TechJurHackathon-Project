enum State {
  TYPE_CPF,
  MAIN_MENU
}

export class Conversation {
  id: string;
  author: string;
  currentState: State = State.TYPE_CPF;
  history: State[] = [];

  constructor(id: string, author: string) {
    this.id = id;
    this.author = author;
    this.setState(State.TYPE_CPF);
  }

  sendInput(message: string): string {
    return `Olá, ${this.author}, eu sou ${process.env.BOT_NAME}! Digite seu CPF para eu consultar seu registro na ABC Advocacia:`;
  }

  setState(newState: State): void {
    this.currentState = newState;
    this.history.push(newState);
  }

  backState(): void {
    if (this.history.length <= 1) return;
    this.currentState = this.history[this.history.length - 2];
    this.history.pop();
  }
}