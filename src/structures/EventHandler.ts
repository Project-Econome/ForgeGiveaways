import { ManagerEvents } from "discordjs-giveaways/dist/typings/managerEvents";
import { BaseEventHandler, ForgeClient } from "forgescript";

export class EventHandler<L extends keyof ManagerEvents> extends BaseEventHandler<ManagerEvents, L> {
    register(client: ForgeClient) {
        // eslint-disable-next-line
        // @ts-ignore
        client.on(this.name, (...args) => this.listener(...args));
    }
}
