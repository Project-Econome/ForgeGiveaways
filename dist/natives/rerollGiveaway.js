"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: '$rerollGiveaway',
    description: 'Rerolls a giveaway prize.',
    unwrap: true,
    brackets: true,
    args: [
        {
            name: 'giveaway ID',
            description: 'The ID of the giveaway to be rerolled.',
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Number
        },
    ],
    execute: async function (ctx, [id]) {
        const giveaway = ctx.client.giveawayManager?.core?.get(id);
        return this.success(await giveaway?.reroll());
    }
});
