import Intimaai from "@brainy-digital/intima.ai-sdk-node/index";

export let intimaai: Intimaai;

export function initializeIntima(token: string): void {
  intimaai = new Intimaai(token);
}
