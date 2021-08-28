import { initializeBot } from "./telegram/Telegram";
import dotenv from "dotenv";
dotenv.config();

initializeBot(process.env.TELEGRAM_TOKEN || "null");