import dotenv from 'dotenv';
import { Client, IntentsBitField } from 'discord.js';
import ready from './listeners/ready';

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
ready(client);

client.login(process.env.TOKEN)
    .then(() => {
        console.info('Bot has logged in');
    })
    .catch((error) => {
        console.error(error);
        process.exit(3);
    });
