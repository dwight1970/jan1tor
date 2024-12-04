import {
  ChatInputCommandInteraction,
  Client, EmbedBuilder,
  SlashCommandBuilder
} from "discord.js";
import { isIP } from 'node:net';

const DiggaChatCommand = new SlashCommandBuilder()
  .addStringOption(option => option
    .setName("ip-or-hostname")
    .setDescription("IP or hostname")
    .setRequired(true)
  )
  .addStringOption(option => option
    .setName("public")
    .setDescription("yes/no")
    .setRequired(false)
  )
  .setName("digga")
  .setDescription("Performs few lookups on given IP or hostname");

const validateAddress = (ipOrHostname: string) => {
  if (isIP(ipOrHostname)) {

  }
};

export const diggaChatInteraction = async (_client: Client, interaction: ChatInputCommandInteraction) => {
  const content = interaction.options.getString('ip-or-hostname');
  const isPublic = interaction.options.getString('public');
  if (!content) return;


  // const embed = new EmbedBuilder()
  //   .setTitle("Embed Title")
  //   .setDescription("This is an embed message with a color bar.")
  //   .setColor(0x00ff00) // Hex color or named color
  //   .setURL("https://example.com")
  //   .setFooter({ text: "This is a footer text" })
  //   .setTimestamp();
  //
  // if (interaction.channel && interaction.channel.isTextBased() && interaction.channel.isSendable()) {
  //   interaction.channel.send({ embeds: [embed] });
  // }
  // urlCleaner(content)
  //   .then(async (cleanedUrls) => {
  //     if (!cleanedUrls) {
  //       return await interaction.reply({
  //         ephemeral: true,
  //         content: 'Unable to clean any links inside that message, sorry :(',
  //       });
  //     }
  //
  //     return await interaction.reply({
  //       ephemeral: true,
  //       content: formatResponse(cleanedUrls)
  //     });
  //   });
}

export default DiggaChatCommand;
