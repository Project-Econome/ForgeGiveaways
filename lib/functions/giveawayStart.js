"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$giveawayStart",
    description: "Starts a new giveaway.",
    unwrap: true,
    brackets: true,
    args: [{
            name: "winners",
            description: "How many winners can win the giveaway.",
            type: forgescript_1.ArgType.Number,
            rest: false,
            required: true
        }, {
            name: "time",
            description: "The giveaway duration.",
            type: forgescript_1.ArgType.Time,
            rest: false,
            required: true
        }, {
            name: "reward",
            description: "The giveaway reward.",
            type: forgescript_1.ArgType.String,
            rest: false,
            required: true
        }, {
            name: "guild ID",
            description: "The guild ID the giveaway will start on.",
            type: forgescript_1.ArgType.Guild,
            rest: false,
            required: false
        }, {
            name: "channel ID",
            description: "The channel ID the giveaway will start on.",
            type: forgescript_1.ArgType.Channel,
            check: (t) => t.isTextBased(),
            rest: false,
            required: false
        }, {
            name: "hoster ID",
            description: "The giveaway hoster ID.",
            type: forgescript_1.ArgType.User,
            check: (u) => !u.bot,
            rest: false,
            required: false
        }],
    async execute(ctx, [winners, time, reward, guildID = ctx.guild?.id, channelID = ctx.channel?.id, hosterID = ctx.user?.id]) {
        await ctx.client.giveawayManager.manager?.createGiveaway({
            guild_id: `${guildID}`,
            channel: channelID,
            hoster_id: `${hosterID?.toString()}`,
            reward,
            time,
            winnerCount: winners
        }).catch(() => {
            return forgescript_1.Return.error(this.error(forgescript_1.ErrorType.Custom, "cannot create the giveaway"));
        });
        return forgescript_1.Return.success(true);
    }
});
//# sourceMappingURL=giveawayStart.js.map