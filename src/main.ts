import { Client, Message } from 'discord.js';
import { TOKEN } from './Constants';

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag || 'nobody'}!`);
});

client.on('message', async (message: Message) => {
  if (message.content === '!ping') {
    await message.reply('Pong!');
  }
});

client.login(TOKEN)
  .then(() => console.log('My brain is loaded'))
  .catch((err: Error) => console.error(err));
