import { ArgType, ErrorType, NativeFunction } from 'forgescript'

export default new NativeFunction({
    name: '$endGiveaway',
    description: 'Ends a giveaway.',
    unwrap: true,
    brackets: true,
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
        const gw =  ctx.client.giveawayManager?.self?.get(id)
        if (!gw)
            this.error(ErrorType.Custom, 'Invalid giveaway ID provided.');

        if (gw?.isRunning()) gw?.end()

        return this.success()
    }
})
