import { MessageStrategy } from "../types";
import { Message } from "discord.js";

class SampleStrategy implements MessageStrategy {
  match(message: Message): boolean {
    const lowerCaseTarget = message.content.toLowerCase();
    const words = ['text1', 'text2', 'text3'];

    // Count how many words from the array are present in the target string
    const matchCount = words.filter((word) => lowerCaseTarget.includes(word.toLowerCase())).length;

    // Check if at least two words are matched
    return matchCount >= 2;
  }

  execute(message: Message) {
    message.react('😼');
  }
}

export default SampleStrategy;
