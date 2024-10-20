import CleanUrlCommand from "./cleanUrlCommand";
import CleanLink from "./cleanLink";
import { ChatCommand, MessageContextCommand } from "./types";

export const Commands: (ChatCommand | MessageContextCommand)[] = [
  CleanUrlCommand,
  CleanLink,
];

