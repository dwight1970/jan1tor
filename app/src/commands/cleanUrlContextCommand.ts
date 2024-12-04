import {
  Client,
  ContextMenuCommandBuilder,
  MessageContextMenuCommandInteraction,
  ApplicationCommandType,
} from "discord.js";
import urlCleaner from "../lib/urlCleaner";
import formatResponse from "../lib/urlCleaner/formatResponse";

const CleanUrlContextCommand = new ContextMenuCommandBuilder()
  .setName("Clean URLs inside message")
  // @ts-expect-error incorrect type definition on discord.js side
  .setType(ApplicationCommandType.Message)

export const cleanUrlContextInteraction = async (_client: Client, interaction: MessageContextMenuCommandInteraction) => {
  if (!interaction.isMessageContextMenuCommand()) return;
  const {content, author} = interaction.targetMessage;

  // ignore requests to clean own urls
  if (author.username === _client?.user?.username) {
    return await interaction.reply({
      ephemeral: true,
      content: 'Nope ;)',
    });
  }

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
};

export default CleanUrlContextCommand;
