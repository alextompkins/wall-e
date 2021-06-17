import { Command } from '../Command';
import { Message } from 'discord.js';

export class Ping implements Command {
  name = 'ping';
  description = 'Check the bot\'s pulse';
  usage = '';
  args = false;
  guildOnly = false;

  async execute(message: Message, args: string[]): Promise<void> {
    await message.reply('Pong!');
  }
}

export const ping = new Ping();
