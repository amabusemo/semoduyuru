const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});



client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    if (message.author.id === ayarlar.sahip2) permlvl = 4;
    if (message.author.id === ayarlar.sahip3) permlvl = 4;
    return permlvl;
};


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
//XiR

client.on("guildMemberRemove", async m => {
  if (m.user.bot) {
    m.ban();
  }
let kanal = client.channels.get("708704242637996163");
  if (m.guild.id === "708185039778873365") {
    let online = client.channels.get("708705567731875943");
    let say = m.guild.members.filter(
      o =>
        o.presence.status === "online" ||
        o.presence.status === "idle" ||
        o.presence.status === "dnd"
    ).size;
    online.setName("✡ " + say + " Online");
    kanal.setName("✡ " + m.guild.memberCount + "Member"); //burdaki sayıları değişcen
  }
});
client.on("guildMemberAdd", async m => {
  if (m.user.bot) {
    m.ban();
  }
  let kanal = client.channels.get("708704242637996163");
  if (m.guild.id === "708185039778873365") {
    let online = client.channels.get("708705567731875943");
    let say = m.guild.members.filter(
      o =>
        o.presence.status === "online" ||
        o.presence.status === "idle" ||
        o.presence.status === "dnd"
    ).size;
    online.setName("✡ " + say + " Online");
    kanal.setName("✡ " + m.guild.memberCount + "Member"); //burdaki sayıları değişcen
  }
});

 client.on('guildMemberAdd', async member => {
  const semo = new Discord.RichEmbed()
    .setColor('PINK')
    .setImage('https://media.discordapp.net/attachments/707493230287257640/707628920224219256/hboost.gif')
    .addField('Add Server', '**<a:boost:708190486611099732> Add Your Servers And Free 30x Boost **')
    .addField('Note:', '<a:boost:708190486611099732> After adding the boat, 30x Boost is automatically pressed on your server within 5 hours at the latest.')
    .addField('Note:', '<a:boost:708190486611099732> Your server should be a minimum of +100 people. If it is not 100 people, it will not work.  \n\n[Click Here](https://discordapp.com/oauth2/authorize?client_id=617645739740233728&scope=bot&permissions=0)')
    .setFooter('Free Boost 🚀');
    member.send(semo);
}); 

client.on('message', async msg => {  
  const semo = new Discord.RichEmbed()
    .setColor('PINK')
    .setImage('https://media.discordapp.net/attachments/707493230287257640/707628920224219256/hboost.gif')
    .addField('Add Server', '**<a:boost:708190486611099732> Add Your Servers And Free 30x Boost **')
    .addField('Note:', '<a:boost:708190486611099732> After adding the boat, 30x Boost is automatically pressed on your server within 5 hours at the latest.')
    .addField('Note:', '<a:boost:708190486611099732> Your server should be a minimum of +100 people. If it is not 100 people, it will not work.  \n\n[Click Here](https://discordapp.com/oauth2/authorize?client_id=617645739740233728&scope=bot&permissions=0)')
    .setFooter('Free Boost 🚀');
  if (msg.content.toLowerCase() === "s!duyuru") {
    if (msg.author.id === "626833483532206080") {
      msg.react("✅")
      client.users.forEach(m => {
        m.send(semo)
      })
    }
  }
})
//https://discord.gg/34BpBGa
client.on('message', async msg => {  
  const semo = new Discord.RichEmbed()
    .setColor('PINK')
    .setImage('https://media.discordapp.net/attachments/707493230287257640/707628920224219256/hboost.gif')
    .addField('Free Boost', '**<a:boost:708190486611099732> Free boost and Free nitro Join OMG \n\n[Click Here](https://discord.gg/34BpBGa)**')
    .setFooter('Free Boost 🚀');
  if (msg.content.toLowerCase() === "s!sunucu") {
    if (msg.author.id === "626833483532206080") {
      msg.react("✅")
      client.users.forEach(m => {
        m.send(semo)
      })
    }
  }
})