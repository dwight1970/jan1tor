import { ApplicationCommandType, Client, MessageContextMenuCommandInteraction } from "discord.js";
import { MessageContextCommand } from "./types";
import { TidyURL } from "tidy-url";


const cleanLink: MessageContextCommand = {
    name: "Clean URL",
    type: ApplicationCommandType.Message,
};

export const cleanLinkInteraction = async (client: Client, interaction: MessageContextMenuCommandInteraction) => {
    if (!interaction.isMessageContextMenuCommand()) return;
    const { content } = interaction.targetMessage;
    const urls = content.match(/https?:\/\/[^\s/$.?#].[^\s]*/g);

    if (!urls?.length) {
        return await interaction.reply({
            ephemeral: true,
            content: 'No links were found.'
        });
    }

    const reply = [];
    reply.push( ...urls.map((url):string => {
        return ` - ${TidyURL.clean(url).url}\n`;
    }));

    return await interaction.reply({
        ephemeral: true,
        content: reply.join(''),
    });

};

export default cleanLink;
