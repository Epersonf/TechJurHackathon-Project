import { getTelegramKey } from "../text_states/LocalizationReader";

enum State {
  INITIAL,
  TYPE_CPF,
  MAIN_MENU
}

export class Conversation {
  id: string;
  author: string;
  currentState: State = State.TYPE_CPF;
  history: State[] = [];
  getKey: (a: string) => string;

  constructor(id: string, author: string, getKey: (a: string) => string) {
    this.id = id;
    this.author = author;
    this.setState(State.INITIAL);
    this.getKey = getKey;
  }

  sendInput(message: string): string {
    return this.getKey("ask_cpf");
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