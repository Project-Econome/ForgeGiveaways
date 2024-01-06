"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: '$giveawayEntriesCount',
    description: 'Retrieves how many entries participated in the giveaway.',
    unwrap: true,
    brackets: true,
    args: [
        {
            name: 'giveaway ID',
            description: 'The ID of the giveaway.',
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Number
        },
    ],
    execute: async function (ctx, [id]) {
        const giveaway = ctx.client.giveawayManager?.self?.get(id);
        return this.success(giveaway?.entriesCount);
    }
});
