import {
  Client,
  ContextMenuCommandBuilder,
  MessageContextMenuCommandInteraction,
  ApplicationCommandType,
} from "discord.js";
import urlCleaner from "../lib/urlCleaner";

const CleanUrlContextCommand = new ContextMenuCommandBuilder()
  .setName("clean-url-context")
  // @ts-expect-error incorrect type definition on discord.js side
  .setType(ApplicationCommandType.Message)

export const cleanUrlContextInteraction = async (_client: Client, interaction: MessageContextMenuCommandInteraction) => {
  if (!interaction.isMessageContextMenuCommand()) return;
  const {content} = interaction.targetMessage;
  const cleanedUrls = urlCleaner(content);

  if (!cleanedUrls) {
    return await interaction.reply({
      ephemeral: true,
      content: 'Unable to clean any links inside that message, sorry :(',
    });
  }

  const response = `URL(s) cleaned of tracking params:\n
          ${cleanedUrls.map((item) => `- ${item}`).join('\n')}
          `;

  return await interaction.reply({
    ephemeral: true,
    content: response
  });
};

export default CleanUrlContextCommand;
