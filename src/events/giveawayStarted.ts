import { giveaway } from "discordjs-giveaways/dist/typings/giveaway";
import { EventHandler } from "../structures/EventHandler";
import { Interpreter } from "forgescript";
import { TextChannel } from "discord.js";

export default new EventHandler({
    name: "giveawayStarted",
    description: "Executed when a giveaway is created.",
    listener(data: giveaway, channel: TextChannel, hoster: string) {
        console.log("giveawayStart event fired");
        console.log(data, channel.id, hoster);
        const commands = this.commands.getCustom<any>("giveawayStarted");
        if (commands?.length) {
            for (const cmd of commands) {
                Interpreter.run({
                    command: cmd,
                    client: this,
                    data: cmd.compiled.code,
                    obj: data as any
                });
            }
        }
    }
});