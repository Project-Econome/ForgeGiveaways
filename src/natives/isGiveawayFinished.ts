import { ArgType, NativeFunction } from 'forgescript'

export default new NativeFunction({
    name: '$isGiveawayFinished',
    description: 'Check if the giveaway ID is finished.',
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
        const gw =  ctx.client.giveawayManager?.core?.get(id)
        return this.success(gw?.isFinished)
    }
})
