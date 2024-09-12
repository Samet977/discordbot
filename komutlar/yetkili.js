const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if(!message.member.roles.has('732496075394646048') && !message.member.hasPermission('ADMINISTRATOR')) return message.reply('Kullanmağa Yetkin Yetmiyor Bilader')
  let enAltYetkiliRolü = message.guild.roles.get("732496075394646048"); // en alttaki rol id
  let yetkililer = message.guild.members.filter(uye => uye.highestRole.position >= enAltYetkiliRolü.position);
  let embed = new Discord.RichEmbed().setTitle(message.guild.name + " Yetkili Sayımı").setTimestamp().setFooter(message.author.tag + " tarafından istendi!")
  .setDescription(`Toplam Yetkili Sayısı: ${yetkililer.size}\nAktif Yetkili Sayısı: ${yetkililer.filter(uye => uye.presence.status !== "offline").size}\nSesli Kanalda Bulunanlar: ${yetkililer.filter(uye => uye.voiceChannel).size} | Bulunmayanlar: ${yetkililer.filter(uye => !uye.voiceChannel).size}`)
  // Online Üye Sayısı: ${message.guild.members.filter(uye => uye.presence.status !== "offline").size}
  message.channel.send(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: ["yetkili"], 
  permLevel: 0
};

exports.help = {
  name: 'yetkilisay', 
  description: 'Yetkilileri sayar.', 
  usage: 'yetkilisay',
  kategori: 'yetkili'
};