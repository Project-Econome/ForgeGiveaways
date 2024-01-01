import { DatabaseType, IGiveawaysEvents } from 'discord-giveaways-super';
import { BaseEventHandler, ForgeClient } from 'forgescript';
export declare class GiveawayEventHandler<T extends keyof IGiveawaysEvents<DatabaseType.JSON>> extends BaseEventHandler<IGiveawaysEvents<DatabaseType.JSON>, T> {
    /**
     * Subscribe the event to the giveaway manager listeners.
     * @param client - ForgeClient instance.
     */
    register(client: ForgeClient): void;
}
