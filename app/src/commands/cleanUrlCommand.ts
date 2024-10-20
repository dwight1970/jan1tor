import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { ChatCommand } from "./types";

export const CleanUrlCommand: ChatCommand = {
    name: "clean-url",
    description: "Returns url ",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};

export default CleanUrlCommand;
