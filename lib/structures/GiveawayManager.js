"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiveawayManager = void 0;
const forgescript_1 = require("forgescript");
const discordjs_giveaways_1 = require("discordjs-giveaways");
class GiveawayManager extends forgescript_1.ForgeExtension {
    // Extension metadata.
    name = "ForgeGiveaways";
    description = "Handle giveaways easily.";
    version = "0.0.1";
    manager;
    options;
    constructor(options) {
        super();
        this.manager = null;
        this.options = options;
    }
    init(client) {
        // Loading built-in events.
        forgescript_1.EventManager.load("giveaway", `${__dirname.replace("structures", "events")}`);
        // Loading built-in functions.
        forgescript_1.FunctionManager.load(`${__dirname.replace("structures", "functions")}`);
        // Data assignment.
        this.manager = new discordjs_giveaways_1.GiveawayManager(client, {
            mode: "json",
            path: this.options?.path ?? "./giveaways.json"
        });
        this.manager.start();
        client.giveawayManager = this;
    }
}
exports.GiveawayManager = GiveawayManager;
//# sourceMappingURL=GiveawayManager.js.map