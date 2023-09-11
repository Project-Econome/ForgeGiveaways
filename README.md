# Forge Giveaways
ForgeGiveaways is a package that extends the functionality of ForgeScript. With ForgeGiveaways, you can easily create and manage giveaways on your Discord server, using custom functions that suit your needs. ForgeGiveaways is simple to use, flexible and reliable.

Try it out and see how it can enhance your Discord experience!

## THIS EXTENSION IS UNDER WORKS
Is not finished, expect more features soon.

## Basic Setup
Download this repo as npm package.
`npm i github:Cyberghxst/ForgeGiveaways`

Now follow the next client setup:
```js
const { GiveawayManager } = require("forgegiveaways");
const { ForgeClient } = require("forgescript");

const giveaways = new GiveawayManager({
    path: "./path_to_file.json"
});

const bot = new ForgeClient({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent",
        "GuildMessageReactions"
    ],
    prefixes: [
        "!"
    ],
    extensions: [
        giveaways
    ],
    events: [
        "messageCreate",
        "interactionCreate"
    ]
});

bot.commands.add({
    name: "gwstart",
    type: "messageCreate",
    code: `
        $giveawayStart[1;2m;Contributor Role;$guildID;$channelID;$authorID]
    `
},{
    type: "giveawayStarted",
    code: `
        $log[A giveaway has been started.]
    `
});

bot.login("TOKEN");
```

There you go, have fun!