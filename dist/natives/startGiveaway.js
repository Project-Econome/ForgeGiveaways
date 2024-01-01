"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: '$startGiveaway',
    description: 'Starts a giveaway.',
    unwrap: true,
    args: [
        {
            name: 'guild ID',
            description: 'The guild ID where this giveaway will be created on.',
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String
        },
        {
            name: 'channel ID',
            description: 'The channel ID where this giveaway will be created on.',
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String
        },
        {
            name: 'host ID',
            description: 'The member ID of the hoster of this giveaway.',
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String
        },
        {
            name: 'duration',
            description: 'The duration for this giveaway.',
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String
        },
        {
            name: 'prize',
            description: 'The prize for this giveaway.',
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String
        },
        {
            name: 'winners',
            description: 'How many user can win the prize.',
            rest: false,
            required: false,
            type: forgescript_1.ArgType.Number
        }
    ],
    execute: async function (ctx, [guild, channel, host, duration, prize, winners]) {
        const giveaway = await ctx.client.giveawayManager?.core?.start({
            guildID: guild,
            channelID: channel,
            hostMemberID: host,
            time: duration,
            prize,
            winnersCount: winners ?? 1
        });
        return this.success(giveaway?.id);
    }
});
