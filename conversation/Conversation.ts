enum State {
  TYPE_CPF,
  MAIN_MENU
}

export class Conversation {
  id: string;
  currentState: State;
  history: State[] = [];

  constructor(id: string) {
    this.id = id;
  }

  setState(newState: State): void {
    this.currentState = newState;
    this.history.push(newState);
  }

  backState(): void {
    this.currentState = this.history[this.history.length - 2];
    this.history.pop();
  }
}