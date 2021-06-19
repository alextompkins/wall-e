import { Client, Message } from 'discord.js';
import { PREFIX, TOKEN } from './Constants';
import { commands } from './commands';

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag || 'nobody'}!`);
});

client.on('message', async (message: Message) => {
  // Stop processing if not our command or if message comes from another bot
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift()?.toLowerCase();

  if (!(commandName && commands.has(commandName))) return;

  try {
    const command = commands.get(commandName);
    if (!command) return;
    if (command.guildOnly && message.channel.type === 'dm') {
      return message.reply('I don\'t like you talking to me alone.');
    }

    if (command.args && !args.length) {
      return `Talk to me nicely, like this: ${PREFIX}${command.name} ${command.usage}`;
    }

    await command.execute(message, args);
  } catch (error) {
    console.error(error);
    await message.reply('My brain just exploded.');
  }
});

client.login(TOKEN)
  .then(() => console.log('My brain is loaded'))
  .catch((err: Error) => console.error(err));
