import {
  ChatInputCommandInteraction,
  Client,
  SlashCommandBuilder
} from "discord.js";

enum EmojiReactCommandType {
  LIST = 'list',
  SET = 'set',
}

const EmojiReactChatCommand = new SlashCommandBuilder()
  .addStringOption(option => option
    .setName("command")
    .setDescription("set|list")
    .setRequired(true)
  )
  .addStringOption(option => option
    .setName("string to react")
    .setRequired(false)
  )
  .addStringOption(option => option
    .setName("emoji")
    .setRequired(false)
  )
  .setName("emoji-react")
  .setDescription("Set or manage automatic emoji reactions.");

export const emojiReactChatInteraction = async (_client: Client, interaction: ChatInputCommandInteraction) => {
  const command = interaction.options.getString('command', true) as EmojiReactCommandType;
  // const string = interaction.options.getString('string to react');
  // const emoji = interaction.options.getString('emoji');
  // if (interaction.channel && .interaction.channel.isTextBased() && interaction.channel.isSendable()) {
  //   interaction.channel.send({ embeds: [embed] });

  switch (command) {
    case EmojiReactCommandType.LIST:
    case EmojiReactCommandType.SET:
      // @todo implement
      return await interaction.reply({
        ephemeral: true,
        content: 'Coming soon'
      });
    default:
      return;
  }
};

export default EmojiReactChatCommand;