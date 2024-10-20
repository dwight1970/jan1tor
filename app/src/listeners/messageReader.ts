import { Client } from "discord.js";
import hasLinks from "../lib/helpers/hasLinks";
import urlCleaner from "../lib/urlCleaner";

const messageReader = (client: Client): void => {
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // ignore own messages

    console.log(message);
    if (hasLinks(message.toString())) {
      const cleanedUrls = urlCleaner(message.toString());

      if (cleanedUrls) {
        await message.reply({content: cleanedUrls });
      }
    }
  });
}

export default messageReader;
