import { ArgType, ErrorType, NativeFunction, Return } from "forgescript";
import { GiveawayManager } from "../structures/GiveawayManager";
import { BaseChannel, TextChannel, User } from "discord.js";

export default new NativeFunction({
    name: "$giveawayStart",
    description: "Starts a new giveaway.",
    unwrap: true,
    brackets: true,
    args: [{
        name: "winners",
        description: "How many winners can win the giveaway.",
        type: ArgType.Number,
        rest: false,
        required: true
    },{
        name: "time",
        description: "The giveaway duration.",
        type: ArgType.Time,
        rest: false,
        required: true
    },{
        name: "reward",
        description: "The giveaway reward.",
        type: ArgType.String,
        rest: false,
        required: true
    },{
        name: "guild ID",
        description: "The guild ID the giveaway will start on.",
        type: ArgType.Guild,
        rest: false,
        required: false
    },{
        name: "channel ID",
        description: "The channel ID the giveaway will start on.",
        type: ArgType.Channel,
        check: (t: BaseChannel) => t.isTextBased(),
        rest: false,
        required: false
    },{
        name: "hoster ID",
        description: "The giveaway hoster ID.",
        type: ArgType.User,
        check: (u: User) => !u.bot,
        rest: false,
        required: false
    }],
    async execute(ctx, [
        winners,
        time,
        reward,
        guildID = ctx.guild?.id,
        channelID = ctx.channel?.id,
        hosterID = ctx.user?.id
    ]) {
        await (ctx.client.giveawayManager as GiveawayManager).manager?.createGiveaway({
            guild_id: `${guildID}`,
            channel: channelID as unknown as TextChannel,
            hoster_id: `${hosterID?.toString()}`,
            reward,
            time,
            winnerCount: winners
        }).catch(() => {
            return Return.error(
                this.error(
                    ErrorType.Custom,
                    "cannot create the giveaway"
                )
            );
        });
        return Return.success(true);
    }
});