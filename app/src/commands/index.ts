import type { CommandDefinition } from "../types/common";
import CleanUrlCommand from "./cleanUrlChatCommand";
import CleanLink from "./cleanUrlContextCommand";
// import DiggaChatCommand from "./diggaChatCommand";

const commands: CommandDefinition[] = [
  CleanUrlCommand,
  CleanLink,
  // DiggaChatCommand
];

export default commands;

