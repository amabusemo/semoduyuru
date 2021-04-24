const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


message.guild.fetchBans().then(yasak => {
      yasak.forEach(kullanıcı=> {
        message.guild.unban(kullanıcı)
      });
    });
  
  
message.reply("Sunucudaki Herkesin Banını kaldırdım.");



}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hbanaç'],
    permLevel: 4
};

exports.help = {
    name: 'banaç',
    description: 'Herkesin Banını Kaldırır. Çalanların Anasına Selam Created By Furkan.',
    usage: '-hbanaç'
};