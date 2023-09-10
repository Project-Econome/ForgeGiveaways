import { EventManager, ForgeClient, ForgeExtension, FunctionManager } from "forgescript";
import { GiveawayManager as PrimitiveManager } from "discordjs-giveaways";

export class GiveawayManager extends ForgeExtension {
    // Extension metadata.
    name = "ForgeGiveaways";
    description = "Handle giveaways easily.";
    version = "0.0.1";

    private client: ForgeClient | null;
    public manager: PrimitiveManager<"json"> | null;
    private options: { path: `./${string}.json` } | undefined;
    constructor(options?: { path: `./${string}.json` }) {
        super();
        this.client = null;
        this.manager = null;
        this.options = options;
    }

    init(client: ForgeClient) {
        // Loafing built-in events.
        EventManager.load("giveaway", `${__dirname.replace("structures", "events")}`);

        // Loading built-in functions.
        FunctionManager.load(`${__dirname.replace("structures", "functions")}`);

        // Data assignment.
        this.manager = new PrimitiveManager(client, {
            mode: "json",
            path: this.options?.path ?? "./giveaways.json"
        });
        this.manager.start();
        this.client = client;
        client.giveawayManager = this;
    }
}