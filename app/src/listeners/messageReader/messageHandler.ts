import { MessageStrategy } from "./types";
import { Message } from "discord.js";

class MessageHandler {
  private strategies: MessageStrategy[] = [];

  register(strategy: MessageStrategy) {
    this.strategies.push(strategy);
  }

  handle(message: Message) {
    for (const strategy of this.strategies) {
      if (strategy.match(message)) {
        strategy.execute(message);
        return;
      }
    }
  }
}

export default MessageHandler;
