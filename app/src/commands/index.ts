import Hello from "./hello";
import CleanLink from "./cleanLink";
import { ChatCommand, MessageContextCommand } from "./types";

const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

const data = new ContextMenuCommandBuilder()
    .setName('User Information')
    .setType(ApplicationCommandType.User).set


export const Commands: (ChatCommand | MessageContextCommand)[] = [
    Hello,
    CleanLink,
];

