"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = require("../structures/EventHandler");
const forgescript_1 = require("forgescript");
exports.default = new EventHandler_1.EventHandler({
    name: "giveawayStarted",
    description: "Executed when a giveaway is created.",
    listener(data, channel, hoster) {
        console.log("giveawayStart event fired");
        console.log(data, channel.id, hoster);
        const commands = this.commands.getCustom("giveawayStart");
        if (commands?.length) {
            for (const cmd of commands) {
                forgescript_1.Interpreter.run({
                    command: cmd,
                    client: this,
                    data: cmd.compiled.code,
                    obj: data
                });
            }
        }
    }
});
//# sourceMappingURL=giveawayStarted.js.map