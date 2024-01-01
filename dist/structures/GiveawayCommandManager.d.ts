import { DatabaseType, IGiveawaysEvents } from 'discord-giveaways-super';
import { BaseCommandManager } from 'forgescript';
export declare class GiveawayCommandManager extends BaseCommandManager<keyof IGiveawaysEvents<DatabaseType.JSON>> {
    handlerName: string;
}
