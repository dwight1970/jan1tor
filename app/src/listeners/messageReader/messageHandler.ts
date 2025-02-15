import { MessageStrategy } from "./types";
import { Message } from "discord.js";

class MessageHandler {
  private strategies: MessageStrategy[] = [];

  register(strategy: MessageStrategy) {
    this.strategies.push(strategy);
  }

  async handle(message: Message) {
    for (const strategy of this.strategies) {
      if (await strategy.match(message)) {
        return await strategy.execute(message);
      }
    }
  }
}

export default MessageHandler;
