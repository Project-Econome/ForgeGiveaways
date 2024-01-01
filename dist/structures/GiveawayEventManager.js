"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiveawayEventHandler = void 0;
const forgescript_1 = require("forgescript");
class GiveawayEventHandler extends forgescript_1.BaseEventHandler {
    /**
     * Subscribe the event to the giveaway manager listeners.
     * @param client - ForgeClient instance.
     */
    register(client) {
        client.giveawayManager?.core?.on(this.name, this.listener);
    }
}
exports.GiveawayEventHandler = GiveawayEventHandler;
