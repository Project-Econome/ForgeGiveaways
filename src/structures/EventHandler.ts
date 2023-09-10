import { ManagerEvents } from "discordjs-giveaways/dist/typings/managerEvents";
import { BaseEventHandler, ForgeClient } from "forgescript";

export class EventHandler<L extends keyof ManagerEvents> extends BaseEventHandler<ManagerEvents, L> {
    register(client: ForgeClient) {
        client.on(this.name, this.listener as any);
    }
}
