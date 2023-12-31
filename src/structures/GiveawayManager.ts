import { DatabaseType, Giveaways, IDatabaseStructure, IGiveawaysConfiguration } from 'discord-giveaways-super'
import { ForgeClient, ForgeExtension } from 'forgescript'
import PACKAGE from '../../package.json'

export class GiveawayManager extends ForgeExtension {
    name: string = 'ForgeGiveaway'
    description: string = ''
    version: string = PACKAGE.version
    #path: `${string}.json`
    #wrapper: Giveaways<DatabaseType.JSON, `${string}.json`, IDatabaseStructure> | null

    /**
     * Extension options.
     */
    constructor(path: `${string}.json`) {
        super()
        this.#path = path
        this.#wrapper = null
    }

    /**
     * Starts the extension setup.
     * @param client - ForgeClient instance.
     */
    init(client: ForgeClient) {
        client.giveawayManager = this.#wrapper
        this.#wrapper = new Giveaways(client, {
            connection: {
                path: this.#path
            },
            database: DatabaseType.JSON
        })
        this.load(__dirname.replace('structures', 'natives'))
    }
}
