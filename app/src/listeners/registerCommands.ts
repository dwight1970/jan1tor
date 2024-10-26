import { Client, Events } from "discord.js";
import commands from "../commands";
import CleanUrlContextCommand, { cleanUrlContextInteraction } from "../commands/cleanUrlContextCommand";
import CleanUrlChatCommand, { cleanUrlChatInteraction } from "../commands/cleanUrlChatCommand";

export const registerCommands = (client: Client): void => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      console.error('Unable to start Discord client');
      return;
    }

    // inject commands definitions
    await client.application.commands.set(commands);
    console.log(`${client.user.username} is online`);
  });

  // attach interactions to the commands
  client.on(Events.InteractionCreate, async interaction => {

    // commands
    if (interaction.isCommand()) {
      const { commandName } = interaction;

      switch (commandName) {
        case CleanUrlContextCommand.name:
          if (interaction.isMessageContextMenuCommand()) {
            return await cleanUrlContextInteraction(client, interaction);
          }
          return;
        case CleanUrlChatCommand.name:
          if (interaction.isChatInputCommand()) {
            return await cleanUrlChatInteraction(client, interaction);
          }
      }
    }
    return;
  });
};

export default registerCommands;
