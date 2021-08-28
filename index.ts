import { initializeBot } from "./telegram/Telegram";
import dotenv from "dotenv";
import { initializeIntima } from "./intima-ai/Intima";
dotenv.config();

initializeBot(process.env.TELEGRAM_TOKEN || "null");

initializeIntima(process.env.INTIMA_TOKEN || "null");