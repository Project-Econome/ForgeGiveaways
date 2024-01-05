import { GiveawayEventHandler } from '../structures/GiveawayEventManager'
import { DatabaseType, Giveaway } from 'discord-giveaways-super'
import { GiveawayManager } from '../structures/GiveawayManager'
import { Interpreter } from 'forgescript'

export default new GiveawayEventHandler<'giveawayEnd'>({
    name: 'giveawayEnd',
    description: 'Emitted when a giveaway ends.',
    listener: async function(giveaway: Giveaway<DatabaseType.JSON>) {
        const commands = GiveawayManager.Client?.giveawayManager?.commands.get('giveawayEnd')

        if (commands?.length) {
            for (const command of commands) {
                Interpreter.run({
                    command,
                    client: GiveawayManager.Client!,
                    data: command.compiled.code,
                    obj: giveaway
                })
            }
        }

    },
    intents: ['GuildMessageReactions']
})
