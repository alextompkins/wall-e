import { Message } from 'discord.js';

export interface Command {
  name: string,
  description: string,
  args: boolean,
  usage: string,
  guildOnly: boolean,
  execute(message: Message, args: string[]): Promise<void>
}
