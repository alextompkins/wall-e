import { Client } from 'discord.js';
import { TOKEN } from './Constants';

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag || 'nobody'}!`);
});

client.on('interaction', async interaction => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(TOKEN)
  .then(() => console.log('My brain is loaded'))
  .catch((err: Error) => console.error(err));
