const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
if(!message.member.roles.get("728100980024934480") && !message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(new Discord.RichEmbed() .setDescription(`Bu komutu Kullanmaya Hakkın yok :x:`).setAuthor(message.author.tag ,message.author.avatarURL).setColor("RANDOM")).then(m => m.delete(5000));
    let kullanici = message.mentions.members.first()
    let chan = client.channels.get("727908215240523817")
    var muteTime = args[1];
    if(!muteTime) return message.channel.send(new Discord.RichEmbed() .setDescription(`Süreyi Girmelisin`).setAuthor(message.author.tag ,message.author.avatarURL).setColor("RANDOM")).then(m => m.delete(5000));
    let reason = args.slice(2).join(" ")
        if(!kullanici.voiceChannel) return message.channel.send(new Discord.RichEmbed() .setDescription(`Etiketlenen kullanıcı bir ses kanalında değil`).setAuthor(message.author.tag ,message.author.avatarURL).setColor("RANDOM")).then(m => m.delete(5000));

    if(!reason) return message.channel.send(new Discord.RichEmbed() .setDescription(`Lütfen Bir Sebep Giriniz.`).setAuthor(message.author.tag ,message.author.avatarURL).setColor("RANDOM")).then(m => m.delete(5000));
    if (!kullanici)   if(kullanici.hasPermission("ADMINISTRATOR")) return message.channel.send("Kimi susturacağını belirtmedin.")
    if (!reason) return message.channel.send ("Bir Sebep Belirtmedin.")
      if(!kullanici.voiceChannel) return message.channel.send(new Discord.RichEmbed() .setDescription(`Etiketlenen kullanıcı bir ses kanalında değil`).setAuthor(message.author.tag ,message.author.avatarURL).setColor("RANDOM")).then(m => m.delete(5000));
  if(kullanici.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed() .setDescription(`Yöneticileri Susturamazsın! :x:`).setAuthor(message.author.tag ,message.author.avatarURL).setColor("RANDOM")).then(m => m.delete(5000));

  
  message.react('728390078849613884')
    kullanici.setMute(true, `Susturan yetkili: ${message.author.tag} - Sebebi: **${reason}** - Susturma süresi: ${muteTime}`)
        .then(() =>
           chan.sendEmbed (new Discord.RichEmbed().setDescription(`${kullanici} adlı kişi Ses Mutesi Atıldı 
 Ceza Süresi: **${süre}**
 Ceza Sebebi: **${reason}** `)
.setAuthor(message.author.tag ,message.author.avatarURL))
.setColor("RANDOM"))    

        .catch(console.error);
   
    
        setTimeout(() => {
    let chan1 = client.channels.get("727908216708792435")

        kullanici.setMute(false,`Süresi dolduğu için susturması kaldırıldı.`)
        chan1.sendEmbed(new Discord.RichEmbed().setDescription(`${kullanici} Adlı Kullanıcının **Ses Mute** süresi doldu`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL)).then(m => m.delete(5000));
  

    },  ms(muteTime));
let süre =muteTime
.replace(/y/g, " Yıl")
.replace(/d/g, " Gün")
.replace(/h/g, " Saat")
.replace(/m/g, " Dakika")
.replace(/s/g, " Saniye")

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["vmute","sesmute","smute"],
    permLevel: 0
};

exports.help = {
    name: 'voicemute',
    description: 'sesli kanalda susturur',
    usage: "mic-kapat @kisi @sure"
};