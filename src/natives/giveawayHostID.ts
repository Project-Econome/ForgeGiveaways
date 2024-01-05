import { ArgType, NativeFunction } from 'forgescript'

export default new NativeFunction({
    name: '$giveawayHostID',
    description: 'Retrieves giveaway\'s host user ID.',
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
        return this.success(giveaway?.host.id)
    }
})