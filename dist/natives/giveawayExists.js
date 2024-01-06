"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: '$giveawayExists',
    description: 'Check if the giveaway ID exists.',
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
        return this.success(!!ctx.client.giveawayManager?.self?.get(id));
    }
});
