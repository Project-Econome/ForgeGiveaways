"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiveawayManager = void 0;
const forgescript_1 = require("forgescript");
class GiveawayManager extends forgescript_1.ForgeExtension {
    // Extension metadata.
    name = "ForgeGiveaways";
    description = "Handle giveaways easily.";
    version = "0.0.1";
    client;
    constructor(client) {
        super();
        this.client = client;
    }
    // eslint-disable-next-line
    init(client) { }
}
exports.GiveawayManager = GiveawayManager;
//# sourceMappingURL=GiveawayManager.js.map