import { MessageStrategy } from "../../types";
import { Message } from "discord.js";

class EmojiReactStrategy implements MessageStrategy {
  async match(_message: Message): Promise<boolean> {
    // @todo implement db getters
    return false;
  }

  async execute(_message: Message): Promise<void> {
    // @todo implement emoji response with .react
  }
}

export default EmojiReactStrategy;
