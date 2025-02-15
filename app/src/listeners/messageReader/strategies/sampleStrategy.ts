import { MessageStrategy } from "../types";
import type { Message } from "discord.js";

class SampleStrategy implements MessageStrategy {
  async match(message: Message): Promise<boolean> {
    const lowerCaseTarget = message.content.toLowerCase();
    const words = ['text1', 'text2', 'text3'];

    // Count how many words from the array are present in the target string
    const matchCount = words.filter((word) => lowerCaseTarget.includes(word.toLowerCase())).length;

    // Check if at least two words are matched
    return matchCount >= 2;
  }

  async execute(message: Message): Promise<void> {
    await message.react('😼');
  }
}

export default SampleStrategy;
