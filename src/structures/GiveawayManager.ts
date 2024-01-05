import { DatabaseType, Giveaways, IDatabaseStructure, IEmbedStringsDefinitions, IGiveawayButtons, IGiveawaysEvents, IGiveaway } from 'discord-giveaways-super'
import { EventManager, ForgeClient, ForgeExtension } from 'forgescript'
import { GiveawayCommandManager } from './GiveawayCommandManager'
import PACKAGE from '../../package.json'
import { User } from 'discord.js'

const resolve = (arg: string, to: string) => arg.replace('structures', to)
const GIVEAWAY_STORAGE_NAME = 'giveaway'

export interface IGiveawayManagerOptions {
    events?: (keyof IGiveawaysEvents<DatabaseType.JSON>)[]
    path: `${string}.json`,
    defineEmbedStrings<IsTemplate extends boolean = false>(
        giveaway: IGiveaway,
        giveawayHost: User
    ): Partial<IEmbedStringsDefinitions<IsTemplate>>,
    buttons?: IGiveawayButtons
}

export class GiveawayManager extends ForgeExtension {
    name: string = 'ForgeGiveaways'
    description: string = ''
    version: string = PACKAGE.version
    targetVersions: string[] = ['1.4.0']
    #options: IGiveawayManagerOptions
    #path: `${string}.json`
    #wrapper: Giveaways<DatabaseType.JSON, `${string}.json`, IDatabaseStructure> | null
    static Client: ForgeClient | null = null

    /**
     * Extension options.
     */
    constructor(options: IGiveawayManagerOptions) {
        super()
        this.#options = options
        this.#path = options.path
        this.#wrapper = null
    }

    /**
     * Starts the extension setup.
     * @param client - ForgeClient instance.
     */
    init(client: ForgeClient) {
        this.#wrapper = new Giveaways(client, {
            connection: {
                path: this.#path
            },
            database: DatabaseType.JSON
        })
        GiveawayManager.Client = client
        client.giveawayManager = {
            core: this.#wrapper,
            commands: new GiveawayCommandManager(client),
            options: this.#options
        }
        EventManager.load(GIVEAWAY_STORAGE_NAME, resolve(__dirname, 'events'))
        this.load(resolve(__dirname, 'natives'))
        client.events.load(GIVEAWAY_STORAGE_NAME, ...(this.#options.events ?? []))
    }
}
