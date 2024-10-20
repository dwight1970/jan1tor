import { Client, Events } from "discord.js";
import { Commands } from "../commands";
import { cleanLinkInteraction } from "../commands/cleanLink";

export const registerCommands = (client: Client): void => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      console.error('Unable to start Discord client');
      return;
    }

    // inject commands
    await client.application.commands.set(Commands);
    console.log(`${client.user.username} is online`);
  });

  client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isMessageContextMenuCommand()) {
      return await cleanLinkInteraction(client, interaction);
    }
  });
};

export default registerCommands;
