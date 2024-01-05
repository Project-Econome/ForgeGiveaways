import { DatabaseType, IEmbedStringsDefinitions, IGiveawayButtons, IGiveawaysEvents, IGiveaway } from 'discord-giveaways-super';
import { ForgeClient, ForgeExtension } from 'forgescript';
import { User } from 'discord.js';
export interface IGiveawayManagerOptions {
    events?: (keyof IGiveawaysEvents<DatabaseType.JSON>)[];
    path: `${string}.json`;
    defineEmbedStrings<IsTemplate extends boolean = false>(giveaway: IGiveaway, giveawayHost: User): Partial<IEmbedStringsDefinitions<IsTemplate>>;
    buttons?: IGiveawayButtons;
}
export declare class GiveawayManager extends ForgeExtension {
    #private;
    name: string;
    description: string;
    version: string;
    targetVersions: string[];
    static Client: ForgeClient | null;
    /**
     * Extension options.
     */
    constructor(options: IGiveawayManagerOptions);
    /**
     * Starts the extension setup.
     * @param client - ForgeClient instance.
     */
    init(client: ForgeClient): void;
}
