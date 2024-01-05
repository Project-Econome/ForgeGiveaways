import { IEmbedStringsDefinitions } from 'discord-giveaways-super'
import { ArgType, NativeFunction } from 'forgescript'

export default new NativeFunction({
    name: '$startGiveaway',
    description: 'Starts a giveaway.',
    unwrap: true,
    brackets: true,
    args: [
        {
            name: 'guild ID',
            description: 'The guild ID where this giveaway will be created on.',
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: 'channel ID',
            description: 'The channel ID where this giveaway will be created on.',
            rest: false,
            required: true,
            type: ArgType.Channel
        },
        {
            name: 'host ID',
            description: 'The member ID of the hoster of this giveaway.',
            rest: false,
            required: true,
            type: ArgType.Member
        },
        {
            name: 'duration',
            description: 'The duration for this giveaway.',
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: 'prize',
            description: 'The prize for this giveaway.',
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: 'winners',
            description: 'How many user can win the prize.',
            rest: false,
            required: false,
            type: ArgType.Number
        }
    ],
    async execute(ctx, [
        guild,
        channel,
        host,
        duration,
        prize,
        winners
    ]) {
        const giveaway = await ctx.client.giveawayManager?.core?.start({
            guildID: guild.id,
            channelID: channel.id,
            hostMemberID: host.id,
            time: duration,
            prize,
            winnersCount: winners ?? 1,
            defineEmbedStrings: ctx.client.giveawayManager.options.defineEmbedStrings
        })

        return this.success(giveaway?.id)
    }
})