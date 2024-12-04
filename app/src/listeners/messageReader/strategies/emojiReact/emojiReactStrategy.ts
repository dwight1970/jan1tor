import { MessageStrategy } from "../../types";
import { Message } from "discord.js";

class EmojiReactStrategy implements MessageStrategy {
  match(_message: Message): boolean {
    // @todo implement db getters
    return false;
  }

  execute(_message: Message) {
    // @todo implement emoji response with .react
  }
}

export default EmojiReactStrategy;
