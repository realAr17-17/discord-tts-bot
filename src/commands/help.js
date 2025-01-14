const { MessageEmbed } = require('discord.js');
const { MESSAGE_EMBED } = require('../common/constants');
const { prefix } = require('../common/settings');

module.exports = {
  name: 'help',
  description: 'Display a help message with all the available commands.',
  emoji: ':question:',
  execute(message, options) {
    const { commands } = options;
    const orderedCommands = ['say', 'aeiou', 'stop', 'lang', 'langs', 'speed', 'help'];

    const helpMessage = orderedCommands.reduce((commandsList, commandName) => {
      const command = commands.get(commandName);
      return `${commandsList}${command.emoji} **${prefix}${command.name}** - ${command.description}\n`;
    }, '');

    const embed = new MessageEmbed()
      .setTitle('Text-to-Speech Help Message')
      .setColor(MESSAGE_EMBED.color)
      .setThumbnail(MESSAGE_EMBED.helpThumbnail)
      .addField('List of available commands:', helpMessage)
      .addField('made by Moonstar used by AR17')
    
    message.channel.send(embed);
  }
};
