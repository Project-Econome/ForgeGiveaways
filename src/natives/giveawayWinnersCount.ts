import { ArgType, NativeFunction } from 'forgescript'

export default new NativeFunction({
    name: '$giveawayWinnersCount',
    description: 'Retrieves how many users won the giveaway.',
    unwrap: true,
    brackets: true,
    args: [
        {
            name: 'giveaway ID',
            description: 'The ID of the giveaway.',
            rest: false,
            required: true,
            type: ArgType.Number
        },
    ],
    execute: async function(ctx, [id]) {
        const giveaway = ctx.client.giveawayManager?.core?.get(id)
        return this.success(giveaway?.winnersCount)
    }
})