import CleanUrlCommand from "./cleanUrlChatCommand";
import CleanLink from "./cleanUrlContextCommand";
import { ApplicationCommandDataResolvable } from "discord.js";

const commands: ApplicationCommandDataResolvable[] = [
  CleanUrlCommand,
  CleanLink,
];

export default commands;

