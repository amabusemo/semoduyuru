const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
   const currentSize = message.guild.members.filter(m => m.voiceChannel).size;

    var tagdakiler = 0;
    let aktif = message.guild.members.filter(m => m.presence.status !== "offline").size
 let tag = "め";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }})
  
  const e = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setAuthor(`${message.guild.name} Anlık Bilgileri` , message.author.avatarURL)
  .addField(`**Toplam Üye :** `  , `\`` + message.guild.memberCount + `\``)
  .addField(`**Sesli Kanalda Olanlar :**` , `\`` + currentSize + `\``)
  .addField(`**Sunucudaki Aktif Üye :**` , `\`` + aktif + `\``)
return message.channel.send(e)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kackisi'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Sunucu Bilgisi.',
  usage: 'say'
};
//XiR