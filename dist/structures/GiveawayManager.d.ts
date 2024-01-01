import { DatabaseType, IGiveawaysEvents } from 'discord-giveaways-super';
import { ForgeClient, ForgeExtension } from 'forgescript';
interface IGiveawayManagerOptions {
    events?: (keyof IGiveawaysEvents<DatabaseType.JSON>)[];
    path: `${string}.json`;
}
export declare class GiveawayManager extends ForgeExtension {
    #private;
    name: string;
    description: string;
    version: string;
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
export {};
