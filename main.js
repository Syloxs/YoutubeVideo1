const Discord = require('discord.js');
const client = new Discord.Client();
const database = require('./database/ayarlar.json');
const attachment = 'https://i.imgur.com/w3duR07.png'

let prefix = database.prefix;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === prefix + 'ping') {
    msg.reply('pong');
  }
  if (msg.content === prefix + 'avatar') {
    msg.reply(msg.author.displayAvatarURL());
  }
  if (msg.content === prefix + 'rip') {
    msg.channel.send(attachment);
  }
});

client.login(database.token);