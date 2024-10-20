import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { ChatCommand } from "./types";

export const Hello: ChatCommand = {
    name: "hello",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};

export default Hello;
