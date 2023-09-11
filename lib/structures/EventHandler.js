"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const forgescript_1 = require("forgescript");
class EventHandler extends forgescript_1.BaseEventHandler {
    register(client) {
        // eslint-disable-next-line
        // @ts-ignore
        client.on(this.name, (...args) => this.listener(...args));
    }
}
exports.EventHandler = EventHandler;
//# sourceMappingURL=EventHandler.js.map