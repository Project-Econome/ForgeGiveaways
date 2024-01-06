"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: '$isGiveawayEnded',
    description: 'Check if the giveaway ID is ended.',
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
        const gw = ctx.client.giveawayManager?.self?.get(id);
        return this.success(gw?.isEnded);
    }
});
