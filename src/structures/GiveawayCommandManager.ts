import { DatabaseType, IGiveawaysEvents } from 'discord-giveaways-super'
import { BaseCommandManager } from 'forgescript'

export class GiveawayCommandManager extends BaseCommandManager<keyof IGiveawaysEvents<DatabaseType.JSON>> {
    handlerName: string = "GiveawayCommandManager"
}