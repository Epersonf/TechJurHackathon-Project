import { Conversation, State } from "../Conversation";

const processesList = ["Processo1", "Processo2", "Processo3"];

export default function MainMenu(message: string, conversation: Conversation): string {
  switch (message) {
  case "1":
    conversation.setState(State.MAIN_MENU);
    return conversation.getKey("processes_list").replace("%processesList", showAsList(processesList));
  case "2":
    conversation.setState(State.MAIN_MENU);
    return conversation.getKey("get_in_touch") + "\n" + conversation.getKey("returning_main_menu");
  }
  return conversation.getKey("main_menu");  
}

function showAsList(processesList: string[]): string {
  let build = "";
  processesList.forEach((e, i) => build += `${i + 1} - ${e}\n`);
  return build;
}