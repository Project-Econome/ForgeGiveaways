import { ArgType, NativeFunction } from "forgescript";
import { BaseChannel, User } from "discord.js";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Number;
    rest: false;
    required: true;
}, {
    name: string;
    description: string;
    type: ArgType.Time;
    rest: false;
    required: true;
}, {
    name: string;
    description: string;
    type: ArgType.String;
    rest: false;
    required: true;
}, {
    name: string;
    description: string;
    type: ArgType.Guild;
    rest: false;
    required: false;
}, {
    name: string;
    description: string;
    type: ArgType.Channel;
    check: (t: BaseChannel) => boolean;
    rest: false;
    required: false;
}, {
    name: string;
    description: string;
    type: ArgType.User;
    check: (u: User) => boolean;
    rest: false;
    required: false;
}], true>;
export default _default;
//# sourceMappingURL=giveawayStart.d.ts.map