import { CommandInteraction, ChatInputApplicationCommandData, Client, MessageApplicationCommandData } from "discord.js";

export interface ChatCommand extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: CommandInteraction) => void;
}

export interface MessageContextCommand extends MessageApplicationCommandData {
}

