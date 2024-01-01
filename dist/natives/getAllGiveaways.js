"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: '$getAllGiveaways',
    description: 'Check if the giveaway ID exists.',
    unwrap: true,
    execute: async function (ctx) {
        return this.success(ctx.client.giveawayManager?.core?.getAll().map(g => g.id).join(','));
    }
});
