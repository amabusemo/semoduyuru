const Discord = require('discord.js');
const kurucuID = '672026258384617483';
exports.run = (client, message, args) => {

	if (message.author.id !== kurucuID) return message.channel.send("Bu komutu sadece kurucum kullabilir.");
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Dostum ne yapıyorsun?', 'Ben bir botum, beni sunucunda dene lütfen.')
    return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Bir şey yazmak zorundasın.');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);
  
      client.users.forEach(u => {
u.send(mesaj)
})

message.channel.send(`:white_check_mark: Mesaj **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** tane kullanıcıya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dmat'],
  permLevel: 4
};

exports.help = {
  description: 's',
  name: 'sdmat',
  usage: 'duyuru [mesaj]'
};
