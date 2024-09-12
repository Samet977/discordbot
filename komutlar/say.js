
   const Discord = require('discord.js');

String.prototype.replaceA = function (find, replace) {
  return this.replace(new RegExp(find, 'g'), replace);
}

const donustur = function(sayi) {
  let gorunum = sayi.toString().replace('0', '0a')
    .replaceA('1', '1a')
    .replaceA('2', '2a')
    .replaceA('3', '3a')
    .replaceA('4', '4a')
    .replaceA('5', '5a')
    .replaceA('6', '6a')
    .replaceA('7', '7a')
    .replaceA('8', '8a')
    .replaceA('9', '9a')
  
  gorunum = gorunum
    .replaceA("0a", '<a:0a:728160046617198593>')
    .replaceA("1a", "<a:1a:728160119732305920>")
    .replaceA("2a", "<a:2a:728160192969179137>")
    .replaceA("3a", "<a:3a:728160236812369921>")
    .replaceA("4a", '<a:4a:728160297277194290>')
    .replaceA("5a", '<a:5a:728160402889900042>')
    .replaceA("6a", '<a:6a:728160422980616223>')
    .replaceA("7a", '<a:7a:728160512457572354>')
    .replaceA("8a", '<a:8a:728160587980210258>')
    .replaceA("9a", '<a:9a:728160658041864192>')
  
  return gorunum
}


exports.run = (client, message, args) => {
const emoji = client.emojis.find(emoji => emoji.name === "men_kelebek")
const emoji1 = client.emojis.find(emoji => emoji.name === "bildirim")
const emoji2 = client.emojis.find(emoji => emoji.name === "kitap")
 
 
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji1} Bilginiz`,`${emoji2} Bu Komutu Sadece **Üst Yönetim** Kullana Bilir`))

  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
  let count = 0;
  let tag = message.guild.members.filter(r=>r.user.username.includes('ᛉ')).size;
  let boost = message.guild.members.filter(r=>r.roles.has('675730968228921367')).size
  let çevrimiçi = message.guild.members.filter(m => m.presence.status !== "offline").size
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription(`
**Toplam Üye** • ${message.guild.memberCount} 
**Aktif Üye**  • ${çevrimiçi} 
**Taglı Üye**  • ${tag} 
**Sesteki Üye** • ${count} 

`)
.setFooter(`Kalite Tesadüf Değildir`).setTimestamp()
message.channel.send(embed).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: 'say',
  description: '',
  usage: ''
};