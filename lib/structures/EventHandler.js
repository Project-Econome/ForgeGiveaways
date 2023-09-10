"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const forgescript_1 = require("forgescript");
class EventHandler extends forgescript_1.BaseEventHandler {
    register(client) {
        client.on(this.name, this.listener);
    }
}
exports.EventHandler = EventHandler;
//# sourceMappingURL=EventHandler.js.map