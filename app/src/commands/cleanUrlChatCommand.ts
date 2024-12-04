import {
  ChatInputCommandInteraction,
  Client,
  SlashCommandBuilder
} from "discord.js";
import urlCleaner from "../lib/urlCleaner";
import formatResponse from "../lib/urlCleaner/formatResponse";

const CleanUrlChatCommand = new SlashCommandBuilder()
  .addStringOption(option => option
    .setName("url")
    .setDescription("URL or any message containing URL(s)")
    .setRequired(true)
  )
  .setName("clear-url")
  .setDescription("Cleans URLs from tracking parameters")

export const cleanUrlChatInteraction = async (_client: Client, interaction: ChatInputCommandInteraction) => {
  const content = interaction.options.getString('url');
  if (!content) return;

  urlCleaner(content)
    .then(async (cleanedUrls) => {
      if (!cleanedUrls) {
        return await interaction.reply({
          ephemeral: true,
          content: 'Unable to clean any links inside that message, sorry :(',
        });
      }

      return await interaction.reply({
        ephemeral: true,
        content: formatResponse(cleanedUrls)
      });
    });
}

export default CleanUrlChatCommand;
