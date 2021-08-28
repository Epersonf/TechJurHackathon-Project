import telegramKeys from "./telegram.json";

interface Dictionary<T> {
  [Key: string]: T;
}

let telegramDict: Dictionary<string> | null = null;

export function getTelegramKey(key: string): string {
  if (telegramDict == null) {
    telegramDict = telegramKeys as Dictionary<string>;
  }
  return telegramDict[key];
}