import {
  ChatInputCommandInteraction,
  Client,
  MessageContextMenuCommandInteraction,
  SlashCommandBuilder
} from "discord.js";

const CleanUrlChatCommand = new SlashCommandBuilder()
  .setName("clear-url")
  .setDescription("Cleans URLs from tracking parameters")
  .addStringOption(option => option
    .setName("url")
    .setDescription("URL or any message containing URL(s)")
    .setRequired(true)
  );

export const cleanUrlChatInteraction = async (_client: Client, interaction: ChatInputCommandInteraction) => {
    const content = "@todo implement";
    //interaction.options;

    await interaction.reply({
      ephemeral: true,
      content
    });
}

export default CleanUrlChatCommand;
