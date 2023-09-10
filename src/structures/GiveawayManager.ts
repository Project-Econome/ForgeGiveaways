import { ForgeClient, ForgeExtension } from "forgescript";
import { GiveawayManager as PrimitiveManager } from "discordjs-giveaways";

export class GiveawayManager extends ForgeExtension {
    // Extension metadata.
    name = "ForgeGiveaways";
    description = "Handle giveaways easily.";
    version = "0.0.1";

    private readonly client: ForgeClient;
    public manager: PrimitiveManager<"json">;
    constructor(client: ForgeClient, options?: { path: `./${string}.json` }) {
        super();
        this.client = client;
        this.manager = new PrimitiveManager(client, {
            mode: "json",
            path: options?.path ?? "./giveaways.json"
        });
    }

    init(client: ForgeClient) {
        this.manager.start();
        client.giveawayManager = this;
    }
}