# jan1tor discord bot

A simple Discord.js bot that provides a URL purification feature to remove suspicious parameters typically used to track users. 

1. <a href='#installation'>Installation</a>
1. <a href='#usage'>Usage</a>

## Installation

1. Go to the Discord Developer Dashboard.
2. 2.Create a new application.
- Copy your new APPLICATION ID.

3. In the "Bot" section, enable the following intents:
```
- Presence Intent
- Server Members Intent
- Message Content Intent
```

4. **Scroll down to the Permissions section and select the permissions required by the bot.** You can omit this step and use the following permissions integer: 1692133430525120; otherwise, select the necessary permissions to ensure proper functionality.
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

5. **Modify the link below by inserting your APPLICATION ID and permissions integer.**
Open the modified link in a web browser or send it within the Discord client and click on it.
````
https://discord.com/oauth2/authorize?client_id=[your_application_id]&permissions=[permissions]
```


