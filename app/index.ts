import dotenv from 'dotenv';
import { Client, IntentsBitField } from 'discord.js';
import registerCommands from './src/listeners/registerCommands';
import messageReaderListener from "./src/listeners/messageReader/messageReaderListener";

// Read environment variables
dotenv.config();

if (!process.env.TOKEN) {
  console.error('Token not found, quitting.');
  process.exit(3);
}

// Initialize bot
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent]
});

// Listeners
registerCommands(client).then(() => console.log('Commands registered.')).catch((err) => console.error('Unable to register commands.', err));
messageReaderListener(client);

client.login(process.env.TOKEN)
  .then(() => {
    console.info('Bot has logged in');
  })
  .catch((error) => {
    console.error(error);
    process.exit(3);
  });
