import { Command } from './Command';
import { Message } from 'discord.js';
import { SheetsManager } from '../storage/SheetsManager';

export class Sheet implements Command {
  name = 'sheet';
  description = 'Test google sheets api';
  usage = '';
  args = false;
  guildOnly = false;

  sheetsManager = new SheetsManager();

  async execute(message: Message, args: string[]): Promise<void> {
    await this.sheetsManager.test();
    await message.reply('Did some stuff with sheets!');
  }
}

export const sheet = new Sheet();
