import { Client } from "discord.js";
import hasLinks from "../lib/helpers/hasLinks";
import urlCleaner from "../lib/urlCleaner";

const messageReader = (client: Client): void => {
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // ignore own messages

    if (hasLinks(message.toString())) {
      const cleanedUrls = urlCleaner(message.toString());

      if (cleanedUrls) {
        const response = `URL(s) cleaned of tracking params:\n
          ${cleanedUrls.map((item) => `- ${item}`).join('\n')}
          `;
        await message.reply({content: response});
      }
    }
  });
}

export default messageReader;
