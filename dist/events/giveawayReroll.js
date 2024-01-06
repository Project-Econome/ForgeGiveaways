"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GiveawayEventManager_1 = require("../structures/GiveawayEventManager");
const GiveawayManager_1 = require("../structures/GiveawayManager");
const forgescript_1 = require("forgescript");
exports.default = new GiveawayEventManager_1.GiveawayEventHandler({
    name: 'giveawayReroll',
    description: 'Emitted when a giveaway is rerolled.',
    listener: async function (giveaway) {
        const commands = GiveawayManager_1.GiveawayManager.Client?.giveawayManager?.commands?.get('giveawayReroll');
        if (commands?.length) {
            for (const command of commands) {
                forgescript_1.Interpreter.run({
                    command,
                    client: GiveawayManager_1.GiveawayManager.Client,
                    data: command.compiled.code,
                    obj: giveaway
                });
            }
        }
    },
    intents: ['GuildMessageReactions']
});
