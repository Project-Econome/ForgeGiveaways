"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _GiveawayManager_options, _GiveawayManager_path, _GiveawayManager_wrapper;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiveawayManager = void 0;
const discord_giveaways_super_1 = require("discord-giveaways-super");
const forgescript_1 = require("forgescript");
const GiveawayCommandManager_1 = require("./GiveawayCommandManager");
const package_json_1 = __importDefault(require("../../package.json"));
const resolve = (arg, to) => arg.replace('structures', to);
const GIVEAWAY_STORAGE_NAME = 'giveaway';
class GiveawayManager extends forgescript_1.ForgeExtension {
    /**
     * Extension options.
     */
    constructor(options) {
        super();
        this.name = 'ForgeGiveaways';
        this.description = '';
        this.version = package_json_1.default.version;
        _GiveawayManager_options.set(this, void 0);
        _GiveawayManager_path.set(this, void 0);
        _GiveawayManager_wrapper.set(this, void 0);
        __classPrivateFieldSet(this, _GiveawayManager_options, options, "f");
        __classPrivateFieldSet(this, _GiveawayManager_path, options.path, "f");
        __classPrivateFieldSet(this, _GiveawayManager_wrapper, null, "f");
    }
    /**
     * Starts the extension setup.
     * @param client - ForgeClient instance.
     */
    init(client) {
        GiveawayManager.Client = client;
        client.giveawayManager = {
            core: __classPrivateFieldGet(this, _GiveawayManager_wrapper, "f"),
            commands: new GiveawayCommandManager_1.GiveawayCommandManager(client)
        };
        __classPrivateFieldSet(this, _GiveawayManager_wrapper, new discord_giveaways_super_1.Giveaways(client, {
            connection: {
                path: __classPrivateFieldGet(this, _GiveawayManager_path, "f")
            },
            database: discord_giveaways_super_1.DatabaseType.JSON
        }), "f");
        forgescript_1.EventManager.load(GIVEAWAY_STORAGE_NAME, resolve(__dirname, 'events'));
        this.load(resolve(__dirname, 'natives'));
        client.events.load(GIVEAWAY_STORAGE_NAME, ...(__classPrivateFieldGet(this, _GiveawayManager_options, "f").events ?? []));
    }
}
exports.GiveawayManager = GiveawayManager;
_GiveawayManager_options = new WeakMap(), _GiveawayManager_path = new WeakMap(), _GiveawayManager_wrapper = new WeakMap();
GiveawayManager.Client = null;
