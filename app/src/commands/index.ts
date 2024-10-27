import CleanUrlCommand from "./cleanUrlChatCommand";
import CleanLink from "./cleanUrlContextCommand";
import { CommandDefinition } from "../types/common";

const commands: CommandDefinition[] = [
  CleanUrlCommand,
  CleanLink,
];

export default commands;

