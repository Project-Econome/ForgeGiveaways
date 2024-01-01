import { ArgType, NativeFunction } from 'forgescript'

export default new NativeFunction({
    name: '$giveawayExists',
    description: 'Check if the giveaway ID exists.',
    unwrap: true,
    args: [
        {
            name: 'giveaway ID',
            description: 'The ID of the giveaway to be checked.',
            rest: false,
            required: true,
            type: ArgType.Number
        },
    ],
    execute: async function(ctx, [id]) {
        return this.success(
            !!ctx.client.giveawayManager?.core?.get(id)
        )
    }
})