<h1 align="center">Forge Giveaways</h1>
<p align="center">Manage and Handle Discord giveaways with ease.</p>

---

> [!CAUTION]
> This extension requires ForgeScript 1.4.0 to work.

---

## Example Setup
```js
const { ButtonStyle, GiveawayManager } = require('forge-gw')
const { ForgeClient } = require('forgescript')
const { join } = require('path')

require('dotenv').config()

const giveaways = new GiveawayManager({
    path: join(__dirname, 'giveaways/data.json'),
    defineEmbedStrings(giveaway, host) {
        return {
            // this ephemeral reply will be sent when they join the giveaway (embeds may also be used here)
            joinGiveawayMessage: {
                messageContent: ':white_check_mark: | You have joined the giveaway!'
            },

            // this ephemeral reply will be sent when they leave the giveaway (embeds may also be used here)
            leaveGiveawayMessage: {
                messageContent: ':exclamation: | You have left the giveaway!'
            },

            // this embed will be sent on giveaway start
            start: {
                messageContent: ':tada: **GIVEAWAY STARTED!** :tada:',

                // embed properties
                title: `Giveaway (ID: ${giveaway.id})`,

                description: `Prize: **${giveaway.prize}**.\nWinners: **${giveaway.winnersCount}**\n` +
                    `Entries: **${giveaway.entriesCount}**\nHost: **${host.username}**\nEnds at: <t:${giveaway.endTimestamp}:R>`,

                footer: `Ends at:`,
                timestamp: giveaway.endTimestamp
            },

            // defining all messages that are related
            // to giveaway finish
            finish(mentionsString, winnersCount) {
                return {
                    // this message will be sent separately in the giveaway channel when the giveaway ends
                    // used to mention the giveaway winners
                    endMessage: {
                        messageContent: `Congratulations ${mentionsString} on winning **${giveaway.prize}**!`
                    },

                    // the new separated message that the giveaway message in giveaway channel
                    // will be changed to after the giveaway is finished
                    newGiveawayMessage: {
                        messageContent: ':tada: **GIVEAWAY FINISHED!** :tada:',

                        title: `Giveaway (ID: ${giveaway.id})`,


                        // using "giveaway.winnersCount" to pluralize the "winners" word because
                        // it's constant and most likely to match the actual number of winners

                        // using "winnersCount" in "Winners" string in case if the actual number of winners
                        // will not match the giveaway's number of winners
                        description: `Prize: **${giveaway.prize}**\nEntries: **${giveaway.entriesCount}**\n` +
                            `${winnersCount == 1 ? 'Winner' : `Winners **(${winnersCount})**`}: ${mentionsString} `,

                        footer: `Ended at:`,
                        timestamp: giveaway.endedTimestamp
                    },

                    // the new message that the giveaway message in giveaway channel will be changed to
                    // after the giveaway is finished with no winners
                    noWinnersNewGiveawayMessage: {
                        messageContent: ':tada: **GIVEAWAY FINISHED!** :tada:',

                        title: `Giveaway (ID: ${giveaway.id})`,
                        description: `There was no winners in "**${giveaway.prize}**" giveaway!`,

                        footer: `Ended at:`,
                        timestamp: giveaway.endedTimestamp,
                    },

                    // the new separated message that the giveaway message in giveaway channel
                    // will be changed to after the giveaway is finished with no winners (embeds may also be used here)
                    noWinnersEndMessage: {
                        messageContent: `Unfortunetly, there are no winners in the **${giveaway.prize}** giveaway.`
                    }
                }
            },

            // defining all messages that are related
            // to rerolling the giveaway winners
            reroll(mentionsString, winnersCount) {
                return {
                    // this ephemeral reply will be sent when they're not a host
                    // of the giveaway and trying to reroll the winners (embeds may also be used here)
                    onlyHostCanReroll: {
                        messageContent: ':x: | Only host of this giveaway can reroll the winners.'
                    },

                    // the new message that the giveaway message in giveaway channel will be changed to
                    // after the reroll
                    newGiveawayMessage: {
                        messageContent: ':tada: **GIVEAWAY REROLLED!** :tada:',

                        title: `Giveaway (ID: ${giveaway.id})`,

                        description: `Prize: **${giveaway.prize}**\nEntries: **${giveaway.entriesCount}**\n` +
                            `${winnersCount == 1 ? 'Winner' : `Winners **(${winnersCount})**`}: ${mentionsString}`,

                        footer: `Ended at:`,
                        timestamp: giveaway.endedTimestamp,
                    },

                    // this message will be sent separately in the giveaway channel after the reroll
                    // used to mention the new giveaway winners (embeds may also be used here)
                    rerollMessage: {
                        messageContent: `${winnersCount == 1 ? 'New winner is' : 'New winners are'} ` +
                            `${mentionsString}, congratulations!`
                    },

                    // this ephemeral reply will be sent after the successful reroll (embeds may also be used here)
                    successMessage: {
                        messageContent: ':white_check_mark: | Successfully rerolled the winners!'
                    }
                }
            }
        }
    },
    // defining the buttons to be attached on giveaway related messages
    buttons: {
        // the "join giveaway" button to attach on the initial giveaway message
        joinGiveawayButton: {
            text: 'Join the giveaway',
            emoji: '🎉', // either an emoji or custom emoji ID is acceptable
            style: ButtonStyle.Primary
        },

        // the "reroll" button to attach on the separated giveaway end message
        rerollButton: {
            text: 'Reroll Winners',
            emoji: '🔁', // either an emoji or custom emoji ID is acceptable
            style: ButtonStyle.Primary
        },

        // the "go to nessage" link button to attach on the separated giveaway end message
        // that will bring to the initial giveaway message
        goToMessageButton: {
            text: 'Go to Message',
            emoji: '↗️' // either an emoji or custom emoji ID is acceptable
        }
    }
})

const bot = new ForgeClient({
    events: [
        'interactionCreate',
        'messageCreate',
        'ready'
    ],
    extensions: [
        giveaways
    ],
    intents: [
        'Guilds',
        'GuildMessages',
        'GuildMessageReactions',
        'GuildMembers',
        'MessageContent'
    ],
    prefixes: [
        '!'
    ],
    token: process.env.token,
})

bot.commands.add({
    type: 'ready',
    code: '$log[BOT READY]'
},{
    name: 'gw-start',
    type: 'interactionCreate',
    matchesInteractionType: (t) => t.isChatInputCommand(),
    code: `
        $!startGiveaway[966131185120059424;1092490880436408410;590267498192961540;2m;Free Nitro;1]
        $interactionReply[Giveaway started!]
    `,
    data: {
        name: 'gw-start',
        description: 'Starts a new giveaway.'
    }
})

bot.login()
```