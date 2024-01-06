import { DatabaseType, Giveaways, IDatabaseStructure, IEmbedStringsDefinitions, IGiveawayButtons, IGiveawaysEvents, IGiveaway } from 'discord-giveaways-super';
import { ForgeClient, ForgeExtension } from 'forgescript';
import { GiveawayCommandManager } from './GiveawayCommandManager';
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
    client: ForgeClient | null;
    commands: GiveawayCommandManager | null;
    options: IGiveawayManagerOptions;
    self: Giveaways<DatabaseType.JSON, `${string}.json`, IDatabaseStructure> | null;
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
