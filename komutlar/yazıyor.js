const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if ( message.react(':black_heart:')) {
  message.channel.startTyping();
  message.delete()
}
//Semo
};

exports.help = {
  name: "yazıyor",
  description: "deneme.",
  usage: "duyuru <mesajın>"
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: ["yazıyor"]
}