import type { Message } from "discord.js";
import { format } from "date-fns";

const logMessage = (msg: Message): void => {
  const message = `[${format(msg.createdAt, 'yyyy-mm-dd HH:mm:ss')}] ${msg.author.globalName} (${msg.author.username}): ${msg.cleanContent}`;
  console.log(message);
};
export default logMessage;