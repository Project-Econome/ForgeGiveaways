import { DatabaseType, Giveaways, IDatabaseStructure, IEmbedStringsDefinitions, IGiveawayButtons, IGiveawaysEvents, IGiveaway } from 'discord-giveaways-super'
import { EventManager, ForgeClient, ForgeExtension } from 'forgescript'
import { GiveawayCommandManager } from './GiveawayCommandManager'
import { GIVEAWAY_STORAGE_NAME } from '../index'
import PACKAGE from '../../package.json'
import { User } from 'discord.js'

const resolve = (arg: string, to: string) => arg.replace('structures', to)

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

    client: ForgeClient | null
    commands: GiveawayCommandManager | null
    options: IGiveawayManagerOptions
    #path: `${string}.json`
    self: Giveaways<DatabaseType.JSON, `${string}.json`, IDatabaseStructure> | null
    static Client: ForgeClient | null = null

    /**
     * Extension options.
     */
    constructor(options: IGiveawayManagerOptions) {
        super()
        this.client = null
        this.commands = null
        this.options = options
        this.#path = options.path
        this.self = null
    }

    /**
     * Starts the extension setup.
     * @param client - ForgeClient instance.
     */
    init(client: ForgeClient) {
        this.self = new Giveaways(client, {
            connection: {
                path: this.#path
            },
            database: DatabaseType.JSON
        })
        this.commands = new GiveawayCommandManager(client)
        GiveawayManager.Client = client
        client.giveawayManager = this

        EventManager.load(GIVEAWAY_STORAGE_NAME, resolve(__dirname, 'events'))
        this.load(resolve(__dirname, 'natives'))

        if (this.options.events?.length) {
            client.events.load(
                GIVEAWAY_STORAGE_NAME,
                this.options.events
            )
        }
    }
}
