import { replaceAll } from "../../util/StringUtil";
import { Conversation, State } from "../Conversation";

export default function TypeCPF(message: string, conversation: Conversation): string {
  const cpf: string = replaceAll(replaceAll(message, "-", ""), ".", "");
  
  if (validateCPF(cpf)) {
    if (isRegistered(cpf)) {
      conversation.setState(State.MAIN_MENU);
      return conversation.getKey("found_you") + " " + conversation.getKey("main_menu");
    } else {
      conversation.setState(State.REGISTER);
      return conversation.getKey("not_registered");
    }
  }
  return conversation.getKey("invalid_cpf") + " " + conversation.getKey("ask_cpf");  
}

function isRegistered(cpf: string): boolean {
  return true;
}

function validateCPF(strCPF: string): boolean {
  let sum;
  let remainder;
  sum = 0;
  if (strCPF == "00000000000") return false;

  for (let i = 1; i<=9; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;

  if ((remainder == 10) || (remainder == 11))  remainder = 0;
  if (remainder != parseInt(strCPF.substring(9, 10)) ) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  remainder = (sum * 10) % 11;

  if ((remainder == 10) || (remainder == 11))  remainder = 0;
  if (remainder != parseInt(strCPF.substring(10, 11) ) ) return false;
  return true;
}