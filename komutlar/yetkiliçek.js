const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return ; // BURAYA KOMUTU KULLANABİLECEK ROL ID
  let enAltYetkiliRolü = message.guild.roles.get('727908134894698576'); // EN ALT YETKILI ROLUNUN IDSI BURAYA
  let yetkililer = message.guild.members.filter(uye => !uye.user.bot && uye.highestRole.position >= enAltYetkiliRolü.position && uye.presence.status !== "offline" && !uye.voiceChannel).array();
  if (yetkililer.length == 0) return message.reply('Aktif olup, seste olmayan yetkili bulunmuyor!');
  let mesaj = await message.channel.send(`**${yetkililer.length}** yetkiliye ses çağrısı yapmak istiyor musun? (evet/hayır)`);
  var filter = m => m.author.id === message.author.id && m.author.id !== client.user.id && !m.author.bot;
  message.channel.awaitMessages(filter, { max: 1, timeout: 10000 }).then(collected => {
    let cevap = collected.first();
    if (cevap.content.toLowerCase().startsWith('hayır')) return message.reply('İşlem iptal edildi!');
    if (cevap.content.toLowerCase().startsWith('evet')) {
      yetkililer.forEach((yetkili, index) => {
        setTimeout(() => {
          yetkili.send(message.guild.name+'\nAktifsin fakat ses kanalında değilsin, ses kanalına girmen gerekiyor!').then(x => mesaj.edit(new Discord.RichEmbed().setDescription(`${yetkili} yetkilisine özelden mesaj atıldı!`).setColor(message.member.displayHexColor))).catch(err => message.channel.send(`${yetkili}, Aktifsin fakat ses kanalında değilsin, ses kanalına girmen gerekiyor!`).then(x => mesaj.edit(new Discord.RichEmbed().setDescription(`${yetkili} yetkilisine özelden mesaj atılamadığı için kanalda etiketlendi!`).setColor(message.member.displayHexColor))));
        }, index*1000);
      });
    };
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["journey","youtube"],
  permLevel: 0
};

exports.help = { 
  name: 'yetkili-çağır', 
  description: 'Sayım yapar.',
  usage: 'yetkili-çağır',
  kategori: 'yetkili'
};