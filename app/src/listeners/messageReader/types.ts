import type { Message } from "discord.js";

export interface MessageStrategy {
  match(message: Message): boolean;
  execute(message: Message): void;
}
