import { Client } from "discord.js";
import MessageHandler from "./messageHandler";
// import logMessage from "../../lib/helpers/logMessage"; @todo: implement logging after implementing db
import SampleStrategy from "./strategies/sampleStrategy";
import UrlStrategy from "./strategies/urlStrategy/urlStrategy";

// Usage
const handler = new MessageHandler();
//handler.register(new SampleStrategy());
// @todo suppressing embeds
//handler.register(new UrlStrategy());

const messageReaderListener = (client: Client): void => {
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // ignore own messages
    //logMessage(message);
    await handler.handle(message);
  });
};

export default messageReaderListener;
