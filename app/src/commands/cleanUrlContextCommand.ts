import {
  Client,
  ContextMenuCommandBuilder,
  MessageContextMenuCommandInteraction,
  ApplicationCommandType, MessageFlagsBitField,
} from "discord.js";
import urlCleaner from "../lib/urlCleaner";
import formatResponse from "../lib/urlCleaner/formatResponse";

const CleanUrlContextCommand = new ContextMenuCommandBuilder()
  .setName("Clean URLs inside message")
  .setType(ApplicationCommandType.Message)

export const cleanUrlContextInteraction = async (_client: Client, interaction: MessageContextMenuCommandInteraction) => {
  if (!interaction.isMessageContextMenuCommand()) return;
  const {content, author} = interaction.targetMessage;

  // ignore requests to clean own urls
  if (author.username === _client?.user?.username) {
    return;
  }

  urlCleaner(content)
    .then(async (cleanedUrls) => {
      if (!cleanedUrls?.length) {
        return await interaction.reply({
          flags: ['Ephemeral'],
          content: 'Unable to clean any links inside that message, sorry :(',
        });
      }

      return await interaction.reply({
        flags: ['Ephemeral', 'SuppressEmbeds'],
        content: formatResponse(cleanedUrls)
      });
    });
};

export default CleanUrlContextCommand;
