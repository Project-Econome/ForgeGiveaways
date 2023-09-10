import { ManagerEvents } from "discordjs-giveaways/dist/typings/managerEvents";
import { BaseEventHandler, ForgeClient } from "forgescript";
export declare class EventHandler<L extends keyof ManagerEvents> extends BaseEventHandler<ManagerEvents, L> {
    register(client: ForgeClient): void;
}
//# sourceMappingURL=EventHandler.d.ts.map