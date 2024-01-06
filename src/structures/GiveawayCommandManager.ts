import { DatabaseType, IGiveawaysEvents } from 'discord-giveaways-super'
import { BaseCommandManager } from 'forgescript'
import { GIVEAWAY_STORAGE_NAME } from '../index'

export class GiveawayCommandManager extends BaseCommandManager<keyof IGiveawaysEvents<DatabaseType.JSON>> {
    handlerName = GIVEAWAY_STORAGE_NAME
}