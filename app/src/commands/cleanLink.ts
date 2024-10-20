import { ApplicationCommandType, Client, MessageContextMenuCommandInteraction } from "discord.js";
import { MessageContextCommand } from "./types";

const cleanLink: MessageContextCommand = {
    name: "Clean URL",
    type: ApplicationCommandType.Message,
};

export const cleanLinkInteraction = async (client: Client, interaction: MessageContextMenuCommandInteraction) => {
    if (!interaction.isMessageContextMenuCommand()) return;
    const { content } = interaction.targetMessage;
    const { user } = interaction;
    // const urls = content.match(/https?:\/\/[^\s/$.?#].[^\s]*/g);

    // if (!urls?.length) {
    //     return await interaction.reply({
    //         ephemeral: true,
    //         content: 'No links were found.'
    //     });
    // }

    return await interaction.reply({
        ephemeral: true,
        content: `URLs cleaned from ${user.username}'s message:\n @TODO`,
    });

};

export default cleanLink;
