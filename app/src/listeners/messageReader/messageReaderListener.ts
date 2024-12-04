import { Client } from "discord.js";
import MessageHandler from "./messageHandler";
import logMessage from "../../lib/helpers/logMessage";
import SampleStrategy from "./strategies/sampleStrategy";

// Usage
const handler = new MessageHandler();
handler.register(new SampleStrategy());

const messageReaderListener = (client: Client): void => {
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // ignore own messages
    //logMessage(message);
    handler.handle(message);
  });
};

export default messageReaderListener;
