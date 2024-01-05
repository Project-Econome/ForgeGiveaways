import { ArgType, NativeFunction } from 'forgescript'

export default new NativeFunction({
    name: '$rerollGiveaway',
    description: 'Rerolls a giveaway prize.',
    unwrap: true,
    brackets: true,
    args: [
        {
            name: 'giveaway ID',
            description: 'The ID of the giveaway to be rerolled.',
            rest: false,
            required: true,
            type: ArgType.Number
        },
    ],
    execute: async function(ctx, [id]) {
        const giveaway = ctx.client.giveawayManager?.core?.get(id)
        return this.success(await giveaway?.reroll())
    }
})