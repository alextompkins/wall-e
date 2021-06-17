import { ping } from './utility/Ping';
import { Collection } from 'discord.js';
import { Command } from './Command';

export const commands = new Collection<string, Command>([
  [ping.name, ping],
]);
