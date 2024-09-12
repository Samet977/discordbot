const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  let sunucu = client.guilds.get("732496075272749208")//
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  
if(!message.member.roles.has("727908113931436035") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<a:error:735845326350712932> Bu komutu kullanmaya yetkin yok.");  
 let guild = message.guild
  let user = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  let sebep = args.slice(1).join(" ")
  let yasaklayankisi = `Yasaklayan : ${message.author.tag} - ${message.author.id}`
  if (!user) return message.channel.send(`Kimi banlayacaksın kanka`)
      if (sebep.length < 1) return message.channel.send('Lütfen Bir Sebep Giriniz')
  if(sunucu.members.get(user.id).roles.has("732496075394646048")) return message.channel.send("Bu kişiyi banlayamazsın!").then(m => m.delete(9000));
if (user == message.author) return message.channel.send(`Asacağın kişiyi etiketlemelisin kanka`)
   message.react('735845319836827688')
let array = ["https://cdn.discordapp.com/attachments/719922694346506378/720984680937160714/giphy-2.gif","https://cdn.discordapp.com/attachments/719922694346506378/720984680937160714/giphy-2.gif","https://cdn.discordapp.com/attachments/719922694346506378/720984679938916362/giphy-4.gif","https://cdn.discordapp.com/attachments/719922694346506378/720984679150518332/giphy-6.gif"]
  
const random = new Discord.Attachment(array[Math.floor(Math.random() * array.length)])

  message.channel.send(`${user}, Kişisi ${message.author} Tarafından **Yasaklandı.** **Sebep:** **__${sebep}__**`, random) 

  user.send(`**${guild.name}** sunucusundan **${sebep}** sebebiyle Sunucdan Yasaklandın.`, random) 

 message.guild.member(user).ban(`${sebep} | ${yasaklayankisi}`).catch(error => message.reply("Üyeyi yasaklamak için yetkim yetmiyor."))  

    let embed4 = new Discord.RichEmbed()//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
    .setColor("#000000")
    .setDescription("`"+user.tag+"`"+` Kullanıcısı ${message.author} Tarafından __**${sebep}**__ Nedeniyle banlandı.`)
    .setFooter(`${client.user.tag}` , `${client.user.displayAvatarURL}`)
    .setTimestamp()  
    let kanal1 = message.guild.channels.get("732496076271124483")
    if(!kanal1) return//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
    kanal1.send(embed4)

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'ban',
  description: 'Belirttiğiniz kullanıcıyı sunucudan yasaklar.',
  usage: 'yasakla <@kullanıcı> sebep' 
};
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert