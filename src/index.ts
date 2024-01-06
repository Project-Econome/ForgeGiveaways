import { DatabaseType, Giveaways, IDatabaseStructure } from 'discord-giveaways-super'
import { GiveawayManager, IGiveawayManagerOptions } from './structures/GiveawayManager'
import { GiveawayCommandManager } from './structures/GiveawayCommandManager'
import { Client, ButtonStyle } from 'discord.js'

export const GIVEAWAY_STORAGE_NAME = 'ForgeGWEvents'
export { ButtonStyle, GiveawayManager }

declare module 'discord.js' {
    interface Client {
        giveawayManager: GiveawayManager | null
    }
}

declare module 'forgescript' {
    interface ForgeClient extends Client<true> {}
}