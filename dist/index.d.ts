import { GiveawayManager } from './structures/GiveawayManager';
import { Client, ButtonStyle } from 'discord.js';
export declare const GIVEAWAY_STORAGE_NAME = "ForgeGWEvents";
export { ButtonStyle, GiveawayManager };
declare module 'discord.js' {
    interface Client {
        giveawayManager: GiveawayManager | null;
    }
}
declare module 'forgescript' {
    interface ForgeClient extends Client<true> {
    }
}
