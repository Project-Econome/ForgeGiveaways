"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiveawayCommandManager = void 0;
const forgescript_1 = require("forgescript");
class GiveawayCommandManager extends forgescript_1.BaseCommandManager {
    constructor() {
        super(...arguments);
        this.handlerName = "GiveawayCommandManager";
    }
}
exports.GiveawayCommandManager = GiveawayCommandManager;
