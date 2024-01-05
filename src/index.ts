import { DatabaseType, Giveaways, IDatabaseStructure } from 'discord-giveaways-super'
import { GiveawayManager, IGiveawayManagerOptions } from './structures/GiveawayManager'
import { GiveawayCommandManager } from './structures/GiveawayCommandManager'
import { Client, ButtonStyle } from 'discord.js'

export { ButtonStyle, GiveawayManager }

declare module 'discord.js' {
    interface Client {
        giveawayManager: {
            core: Giveaways<
                DatabaseType.JSON,
                `${string}.json`,
                IDatabaseStructure
            > | null,
            commands: GiveawayCommandManager
            options: IGiveawayManagerOptions
        } | null
    }
}

declare module 'forgescript' {
    interface ForgeClient extends Client<true> {}
}