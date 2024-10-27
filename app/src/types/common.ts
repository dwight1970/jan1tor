import { SlashCommandBuilder } from "@discordjs/builders";
import { ContextMenuCommandBuilder, SlashCommandOptionsOnlyBuilder } from "discord.js";

export type CommandDefinition = SlashCommandBuilder | SlashCommandOptionsOnlyBuilder | ContextMenuCommandBuilder;
