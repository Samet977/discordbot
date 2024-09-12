const Rochelle = require("discord.js")

exports.run = async (client, message, args) => {
    if (!message.member.voiceChannel) return message.channel.send("Bir ses kanalında olman gerek")
    let rochelle1 = message.mentions.members.first();
    if (!rochelle1.voiceChannel) return message.channel.send("Bu kullanıcı herhangi bir ses kanalında değil")
    if (!rochelle1) return message.channel.send("Kullanıcı belirtmedin")
    if (message.member.voiceChannel.id === rochelle1.voiceChannel.id) return message.channel.send("Zaten aynı kanaldasınız")

    const filter = (reaction, user) => {
        return ['tik2', 'x_'].includes(reaction.emoji.name) && user.id === rochelle1.id;
    };//// üst isim yazılcak    return ['tik2', 'x_'].includes(reaction.emoji.name) && user.id === kullanici.id; emoji ismi 
    let rochelle = new Rochelle.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${rochelle1}, ${message.author}  ${rochelle1.voiceChannel.name} odasına gelmek istiyor. Kabul ediyormusun?`)
            .setFooter('Git Komutu Kullanıldı') 

    let mesaj = await message.channel.send(rochelle)
    await mesaj.react("735845319836827688") /// emoji id 
    await mesaj.react("735845326350712932")/// emoji id 
    mesaj.awaitReactions(filter, {
        max: 1,
        time: 30000,
        errors: ['time']
    }).then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === 'tik2') {  /// emoji ismi 
            let rochelle2 = new Rochelle.RichEmbed()
                .setColor("GREEN")
                .setDescription(`${rochelle1} olduğu odaya çekildi`)
            message.channel.send(rochelle2).then(msg => msg.delete(5000));
           message.member.setVoiceChannel(rochelle1.voiceChannel)
        } else {
            let rochelle = new Rochelle.RichEmbed()
                .setColor("RED")
                .setDescription(`${rochelle1} odaya çekilme teklifini reddetti`)
            message.channel.send(rochelle).then(msg => msg.delete(5000));
        }
    })
  
}

exports.conf = {
    enabled: true,
    aliases: ['git'],
    permLevel: 0
};

exports.help = {
    name: "git",
    description: "Etiketlediğiniz kullanıcıyı odaya çeker",
    usage: "git @kullanıcı"

};