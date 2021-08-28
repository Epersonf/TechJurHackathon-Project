enum State {
  TYPE_CPF,
  MAIN_MENU
}

export class Conversation {
  id: string;
  currentState: State = State.TYPE_CPF;
  history: State[] = [];

  constructor(id: string) {
    this.id = id;
    this.setState(State.TYPE_CPF);
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