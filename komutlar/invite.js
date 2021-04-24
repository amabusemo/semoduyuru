const Discord = require('discord.js');

exports.run = function(client, message) {

            const embed = new Discord.RichEmbed()


    .addField('Bot Invite Links <a:boost:708190486611099732>', '[Click Here](https://discordapp.com/oauth2/authorize?client_id=617645739740233728&scope=bot&permissions=0)')
.addField('Boost Server <a:boost:708190486611099732>', '[Click Here](https://discord.gg/JhHKMdp)')    
.setColor("random")
    .setThumbnail("https://cdn.discordapp.com/emojis/708190486611099732.gif?v=1")
      message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};