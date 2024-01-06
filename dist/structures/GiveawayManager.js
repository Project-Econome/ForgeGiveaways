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
var _GiveawayManager_path;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiveawayManager = void 0;
const discord_giveaways_super_1 = require("discord-giveaways-super");
const forgescript_1 = require("forgescript");
const GiveawayCommandManager_1 = require("./GiveawayCommandManager");
const index_1 = require("../index");
const package_json_1 = __importDefault(require("../../package.json"));
const resolve = (arg, to) => arg.replace('structures', to);
class GiveawayManager extends forgescript_1.ForgeExtension {
    /**
     * Extension options.
     */
    constructor(options) {
        super();
        this.name = 'ForgeGiveaways';
        this.description = '';
        this.version = package_json_1.default.version;
        this.targetVersions = ['1.4.0'];
        _GiveawayManager_path.set(this, void 0);
        this.client = null;
        this.commands = null;
        this.options = options;
        __classPrivateFieldSet(this, _GiveawayManager_path, options.path, "f");
        this.self = null;
    }
    /**
     * Starts the extension setup.
     * @param client - ForgeClient instance.
     */
    init(client) {
        this.self = new discord_giveaways_super_1.Giveaways(client, {
            connection: {
                path: __classPrivateFieldGet(this, _GiveawayManager_path, "f")
            },
            database: discord_giveaways_super_1.DatabaseType.JSON
        });
        this.commands = new GiveawayCommandManager_1.GiveawayCommandManager(client);
        GiveawayManager.Client = client;
        client.giveawayManager = this;
        forgescript_1.EventManager.load(index_1.GIVEAWAY_STORAGE_NAME, resolve(__dirname, 'events'));
        this.load(resolve(__dirname, 'natives'));
        if (this.options.events?.length) {
            client.events.load(index_1.GIVEAWAY_STORAGE_NAME, this.options.events);
        }
    }
}
exports.GiveawayManager = GiveawayManager;
_GiveawayManager_path = new WeakMap();
GiveawayManager.Client = null;
