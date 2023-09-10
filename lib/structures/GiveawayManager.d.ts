import { ForgeClient, ForgeExtension } from "forgescript";
import { GiveawayManager as PrimitiveManager } from "discordjs-giveaways";
export declare class GiveawayManager extends ForgeExtension {
    name: string;
    description: string;
    version: string;
    manager: PrimitiveManager<"json"> | null;
    private options;
    constructor(options?: {
        path: `./${string}.json`;
    });
    init(client: ForgeClient): void;
}
//# sourceMappingURL=GiveawayManager.d.ts.map