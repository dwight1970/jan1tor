import { Client, Events, REST } from "discord.js";
import { Routes } from 'discord-api-types/v9';
import commands from "../commands";
import CleanUrlContextCommand, { cleanUrlContextInteraction } from "../commands/cleanUrlContextCommand";
import CleanUrlChatCommand, { cleanUrlChatInteraction } from "../commands/cleanUrlChatCommand";

export const registerCommands = async (client: Client): Promise<void> => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      console.error('Unable to start Discord client');
      return;
    }

    if (client.token === null || !process.env.APPLICATION_ID) {
      console.error('Unable to register commands. No token or application ID provided');
      return;
    }

    const rest = new REST({version: '10'}).setToken(client.token);

    // refresh commands on discord api side
    console.log('Registering commands in Discord API');
    rest.put(Routes.applicationCommands(process.env.APPLICATION_ID),
      {body: commands.map((command) => command.toJSON())})
      .then(() => {
        console.log('Commands registered');
      })
      .catch((error) => {
        console.log('Error while registering commands', error);
      });

    // inject commands definitions
    await client.application.commands.set(commands);
    console.log(`${client.user.username} is online`);
  });

  // attach interactions to the commands
  client.on(Events.InteractionCreate, async interaction => {

    // commands
    if (interaction.isCommand()) {
      const {commandName} = interaction;

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
