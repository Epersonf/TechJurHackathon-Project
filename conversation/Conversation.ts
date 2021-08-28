import MainMenu from "./conversation_screens/MainMenu";
import TypeCPF from "./conversation_screens/TypeCPF";

export enum State {
  INITIAL_STATE,
  TYPE_CPF,
  MAIN_MENU,
  REGISTER,
  SHOW_PROCESS_STATE
}

export class Conversation {
  id: string;
  author: string;
  cpf: string;
  currentState: State = State.TYPE_CPF;
  history: State[] = [];
  getKey: (a: string) => string;

  constructor(id: string, author: string, getKey: (a: string) => string) {
    this.id = id;
    this.author = author;
    this.setState(State.INITIAL_STATE);
    this.getKey = getKey;
    this.cpf = "";
  }

  sendInput(message: string): string {
    switch (this.currentState) {
    case State.INITIAL_STATE:
      this.setState(State.TYPE_CPF);
      return this.getKey("salutation") + " " + this.getKey("ask_cpf");
    case State.TYPE_CPF:
      return TypeCPF(message, this);
    case State.MAIN_MENU:
      return MainMenu(message, this);
    }
    return this.getKey("error");
  }

  setCPF(cpf: string): void {
    this.cpf = cpf;
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