 const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const emoji = client.emojis.find(emoji => emoji.name === "bildirim")
const emoji1 = client.emojis.find(emoji => emoji.name === "kitap")
const emoji2 = client.emojis.find(emoji => emoji.name === "mor")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

 if (!message.member.roles.has('727908134894698576') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilginize` , `${emoji1}  Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
let rochelle1 = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!rochelle1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1}   Bir kullanıcı etiketlemeli ve ya id girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rochelle = message.guild.member(rochelle1)//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
let isim = args[1]
if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir İsim Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let yas = args[2]
if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir Yaş Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 //TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
rochelle.setNickname(`ᛉ ${isim} '${yas}`)


    message.react("698935589130731641");
  
  let embed = new Discord.RichEmbed() 
  .setColor("#E0FFFF")
  .setTitle('Menthe Krallığı', message.author.avatarURL)
  .setDescription(`**${emoji2} ${rochelle.user} Adlı Üyenin İsmi Başarıyla Kayıt Edildi** `)
.setFooter('Kalite Tesadüf Değildir')//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  .setTimestamp()
  return message.channel.send(embed).then(m => m.delete(6000));

 
};
exports.conf = {
  enabled: true,//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  guildOnly: true,
  aliases: ["isim","n", "i"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "nick",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kayıt isim yaş"
};
