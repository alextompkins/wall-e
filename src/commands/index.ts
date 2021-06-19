import { Collection } from 'discord.js';
import { Command } from './Command';
import { ping } from './utility/Ping';
import { sheet } from './Sheet';

export const commands = new Collection<string, Command>([
  [ping.name, ping],
  [sheet.name, sheet]
]);
