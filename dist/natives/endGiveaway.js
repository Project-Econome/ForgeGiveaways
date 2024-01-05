"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: '$endGiveaway',
    description: 'Ends a giveaway.',
    unwrap: true,
    brackets: true,
    args: [
        {
            name: 'giveaway ID',
            description: 'The ID of the giveaway to be checked.',
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Number
        },
    ],
    execute: async function (ctx, [id]) {
        const gw = ctx.client.giveawayManager?.core?.get(id);
        if (!gw)
            this.error(forgescript_1.ErrorType.Custom, 'Invalid giveaway ID provided.');
        if (gw?.isRunning())
            gw?.end();
        return this.success();
    }
});
