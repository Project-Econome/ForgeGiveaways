import { ForgeClient, ForgeExtension } from 'forgescript';
export declare class GiveawayManager extends ForgeExtension {
    #private;
    name: string;
    description: string;
    version: string;
    /**
     * Extension options.
     */
    constructor(path: `${string}.json`);
    /**
     * Starts the extension setup.
     * @param client - ForgeClient instance.
     */
    init(client: ForgeClient): void;
}
