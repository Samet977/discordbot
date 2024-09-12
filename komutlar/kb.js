const Rochelle = require("discord.js");
const client = new Rochelle.Client();
const db = require("quick.db");
const moment = require("moment");
exports.run = async (client, message, args, presence) => {
//(message.channel.id !== "719279214121189408") return message.channel.sendEmbed(new Discord.RichEmbed().setColor('WHİTE').setDescription('Bu kanalda bu komutu kullanamazsın. Sadece <#719279214121189408> Burda kullanımı var.').setFooter('Kalite Tesadüf Değildir', message.author.avatarURL).setTimestamp()).then(msg => msg.delete(5000))


let user = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])

  if (!user) user = message.author;

 
// Tarih hesaplama son.
  const member = message.guild.member(user);
 
message.react("698935589130731641")
  const aylar = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
      }
  if (!user) user = message.author;
    if (message.channel.type !== "group") {
 const Durum = user.presence.status || "idle";
  const renk =
    Durum == "online"
      ? 0x00ae86
      : Durum == "offline"
      ? 0x808080
      : Durum == "idle"
      ? 0xffff00
      : Durum == "dnd"
      ? 0xff0000
      : 0x00ae86;

  const aktiflikDurumu =
    Durum == "online"
      ? client.emojis.find(emoji => emoji.name === "cevrimici") + "Çevrimiçi"
      : Durum == "offline"
      ? client.emojis.find(emoji => emoji.name === "gorunmez") + "Çevrimdışı"
      : Durum == "idle"
      ? client.emojis.find(emoji => emoji.name === "bosta") + "Boşta"
      : Durum == "dnd"
      ? client.emojis.find(emoji => emoji.name === "rahatsiz") + "Rahatsız Etmeyin"
      : "Bilinmiyor/Bulunamadı.";
      const member = message.guild.member(user);
      const saint = new Rochelle.RichEmbed()
      .setThumbnail(user.avatarURL)
      .setColor('PURPLE')
      .setTimestamp()
      .setDescription(`**Kullanıcı Bilgileri** \n\n\`Kullanıcı Id\` **${user.id}** \n\n\`Profil\` ${user}\n\n\`Durum\` : ${aktiflikDurumu} \n\n\`Oluşturma Tarihi\`  ${moment(user.createdAt).format('DD')} ${aylar[moment(user.createdAt).format('MM')]} ${moment(user.createdAt).format('YYYY HH:mm:ss')} \n\n\n**Üye Bilgileri** \n\n\`Takma Adı\` ${member.nickname !== null ? `${member.nickname}` : 'Sunucuda kullanıcı adı bulunmuyor.'}\n\n\`Katılma Tarihi\`: ${moment(user.joinedAt).format('DD')} ${aylar[moment(user.joinedAt).format('MM')]} ${moment(user.joinedAt).format('YYYY HH:mm:ss')}\n\n\`Katılım Sırası\` ${message.guild.members.sort((a, b) => a.joinedTimestamp - b.joinedTimestamp).map(e => e.id).indexOf(message.author.id)}/${message.guild.memberCount}\n\n\`Kullanıcı Rolleri\` ${member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' | ') ? member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' | ') : `Bulunamadı`} `)
//${msg.guild.members.cache.sort((a, b) => a.joinedTimestamp - b.joinedTimestamp).map(e => e.id).indexOf(msg.author.id)}/${msg.guild.memberCount}
//${moment(message.guild.member(user).joinedAt).format('DD/MM/YYYY | HH:mm:ss')}
      console.log(".kullanıcıbilgim komutu " + message.author.username + " tarafından kullanıldı.")
      message.channel.sendEmbed(saint).then(m => m.delete(15000));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı-bilgi","kb"],
  permLevel: 0
};

exports.help = {
  name: "kb",
  category: "kullanıcı",
  description: "İstediğiniz kullanıcı hakkında bilgi verir.",
  usage: "teyit-bilgi <@kişi-etiket>"
}; //TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert