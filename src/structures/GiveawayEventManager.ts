import { DatabaseType, IGiveawaysEvents } from 'discord-giveaways-super'
import { BaseEventHandler, ForgeClient } from 'forgescript'

export class GiveawayEventHandler<
        T extends keyof IGiveawaysEvents<
            DatabaseType.JSON
        >
    > extends BaseEventHandler<
        IGiveawaysEvents<
            DatabaseType.JSON
        >,
    T> {
    /**
     * Subscribe the event to the giveaway manager listeners.
     * @param client - ForgeClient instance.
     */
    register(client: ForgeClient) {
        client.giveawayManager?.self?.on(this.name, this.listener as any)
    }
}