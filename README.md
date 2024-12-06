# jan1tor discord bot

A simple Discord.js bot that provides a URL purification feature to remove suspicious parameters typically used to track users. 

## Installation

### Discord setup

1. Go to the Discord Developer Dashboard.
2. Create a new application. Once created, copy your `APPLICATION_ID` for later use.

3. In the "Bot" section, enable the following intents:
```
- Presence Intent
- Server Members Intent
- Message Content Intent
```

4. **Scroll down to the Permissions section and select the permissions required by the bot.** Alternatively, you can skip this step and use the following permissions integer: `1692133430525120`. If you choose to select the permissions manually, ensure proper functionality by copying the generated number after configuration.
```
- View Audit Log
- Change Nickname
- View Channels
- View Server Insights
- View Server Subscription Insights
- Send Messages
- Crete Public Threads
- Create Private Threads
- Send Messages in Threads
- Send TTS Messages
- Embed Links
- Read Message History
- Add Reactions
- Use Slash Commands
```

5. **Modify the link below** by replacing APPLICATION_ID and PERMISSIONS_INTEGER with your actual values.
Open the updated link in a web browser or share it in the Discord client, then click on it.

```
https://discord.com/oauth2/authorize?client_id=APPLICATION_ID&permissions=PERMISSIONS_INTEGER&scope=bot  

```

6. Invite bot to your Discord server.

### Runtime env

1. Clone the repo
2. Run `npm i`
3. Import blacklist using:
```
cd app/tools
node import-blacklist.mjs
```
4. Create your `.env` file from `.env.dist` and update the values
5. Run `make prod-init` for production and `make dev-init` for development setup
6. Run `make prod-up` or `make dev-up` to start the container

## Shout-outs

- tidy-url - https://github.com/DrKain/tidy-url
- Parameters for cleaning urls https://github.com/mpchadwick/tracking-query-params-registry


