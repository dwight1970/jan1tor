import type { Message } from "discord.js";

export interface MessageStrategy {
  match(message: Message): Promise<boolean>;
  execute(message: Message): Promise<void>;
}
