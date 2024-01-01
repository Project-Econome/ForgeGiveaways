import { DatabaseType, Giveaways, IDatabaseStructure } from 'discord-giveaways-super'
import { GiveawayCommandManager } from './structures/GiveawayCommandManager'
import { GiveawayManager } from './structures/GiveawayManager'
import { Client } from 'discord.js'

export { GiveawayManager }

declare module 'discord.js' {
    interface Client {
        giveawayManager: {
            core: Giveaways<
                DatabaseType.JSON,
                `${string}.json`,
                IDatabaseStructure
            > | null,
            commands: GiveawayCommandManager
        } | null
    }
}

declare module 'forgescript' {
    interface ForgeClient extends Client<true> {}
}