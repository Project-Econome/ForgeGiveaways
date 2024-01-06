import { ArgType, NativeFunction } from 'forgescript'

export default new NativeFunction({
    name: '$giveawayEntriesCount',
    description: 'Retrieves how many entries participated in the giveaway.',
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
        const giveaway = ctx.client.giveawayManager?.self?.get(id)
        return this.success(giveaway?.entriesCount)
    }
})