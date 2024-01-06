import { NativeFunction } from 'forgescript'

export default new NativeFunction({
    name: '$getAllGiveaways',
    description: 'Check if the giveaway ID exists.',
    unwrap: true,
    execute: async function(ctx) {
        return this.success(
            ctx.client.giveawayManager?.self?.getAll().map(g => g.id).join(',')
        )
    }
})